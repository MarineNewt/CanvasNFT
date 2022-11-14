import React, { Component } from 'react';
import PixelPage from './PixelPage.js';
import NavBar from './NavBar.js';
import Web3 from 'web3';
import NFTcon from '../contracts/canvas.json'
import btnimg from "../images/tempicon.png"
import bkgrd from '../images/background.png'
import './App.css';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
    setInterval(() => {
      this.loadBlockchainData();
    }, 30000);
  }

  async loadWeb3(){
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-ethereum browser detected. Metamask install is recommended.')
    }
  }

  
  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId() 
    let blockNumber = await web3.eth.getBlockNumber()
    this.setState({ blockNumber: blockNumber })

    const NFTContractData = NFTcon.networks[networkId]
    if(NFTContractData) {
      const NFTContract = new web3.eth.Contract(NFTcon.abi, NFTContractData.address)
      this.setState({ NFTContract })
      let NFTContractBalance = await NFTContract.methods.balanceOf(this.state.account).call()
      this.setState({ NFTContractBalance: NFTContractBalance.toNumber() })
      let NFTContractSupply = await NFTContract.methods.totalSupply().call()
      this.setState({ NFTContractSupply: NFTContractSupply.toNumber() })
      let canvasfull = await NFTContract.methods.checkCanvas().call()
      this.setState({ canvasfull: canvasfull })
      }
    else {
      window.alert('Please switch to the Ethereum Network ')
      }

    this.setState({ loading: false })
  }

  mint = () => {
    const web3 = window.web3
    this.setState({loading: true})
    this.state.NFTContract.methods.mint().send({ from: this.state.account, value: web3.utils.toWei('0.02') }).on('transactionHash', (hash) => {
    this.setState({ loading: false })
  })}

  place = (tokenID,rcolor,gcolor,bcolor) => {
    let pixelnum = this.state.targetPixel
    this.setState({loading: true})
    this.state.NFTContract.methods.setPixel(tokenID,pixelnum,rcolor,gcolor,bcolor).send({ from: this.state.account }).on('transactionHash', (hash) => {
    this.setState({ loading: false })
  })}

  settarget = (targetPixel) => {
    console.log(this.state.targetPixel)
    this.setState({ targetPixel: targetPixel})
  }
  page = (pageselect) => {
    this.setState({ pageTier: pageselect})
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      NFTContract: {},
      NFTContractSupply: 0,
      canvasfull: [],
      targetPixel: 1,
      pageTier: 1,
      blockNumber: '0',
      loading: true
    }
  }
  
  render() {
    let content
    if (this.state.pageTier === 1) {
      content = <div className="container-fluid">
      <div className="row">
      <div className="content mr-auto ml-auto">
        <div id="content" className="compbox comp-font-sizer" style={{marginTop: '15vh'}}>
          <h1 className="comp-head-sizer">Canvas On-Chain NFT</h1>
          <p>Canvases minted: {this.state.NFTContractSupply} / 396</p>
          <p>MINT A CANVAS:</p>
          <form onSubmit={(event) => {
            event.preventDefault()
            this.mint()}}>
            <input type="image" src={btnimg} alt="" style={{height: "calc(7vw + 10px)", borderRadius: "13px"}} name="saveForm" class="btTxt submit" id="saveForm" />
          </form>
          <p><i>.02 ETH</i></p>
          <br></br><br></br>
          <button onClick={(event) => {event.preventDefault() 
            this.page(2)}} className='rainbow-button'>Click to place a Pixel</button>
          
        </div>
      </div>
      </div>
      </div>}
    if (this.state.pageTier === 2) {
      content = <PixelPage
                  page={this.page}
                  place={this.place}
                  settarget={this.settarget}
                  canvasfull={this.state.canvasfull}
                  />}
    return (
      <div style={{height: '100vh', margintop: '0', backgroundImage: `url( ${bkgrd} )`,
      backgroundSize: 'contain'}}>
        <NavBar account = {this.state.account} />
        {content}
      </div>
  );}}

export default App;

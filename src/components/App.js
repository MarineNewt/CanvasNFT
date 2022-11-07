import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
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
      }
    else {
      window.alert('Please switch to the Ethereum Network ')
      }

    this.setState({ loading: false })
  }

  mint = () => {
    const web3 = window.web3
    this.setState({loading: true})
    this.state.NFTContract.methods.mint().send({ from: this.state.account, value: web3.utils.toWei('0.015') }).on('transactionHash', (hash) => {
    this.setState({ loading: false })
  })}

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      treeToken: {},
      treeTokenBalance: '0',
      NFTContractSupply: 0,
      blockNumber: '0',
      loading: true
    }
  }
  
  render() {
    return (
  <Router>
    <Routes>
      <Route path="/" element={
      <div style={{height: '100vh', margintop: '0', backgroundImage: `url( ${bkgrd} )`,
      backgroundSize: 'contain'}}>
        <NavBar account = {this.state.account} />
        <div className="container-fluid">
        <div className="row">
        <div className="content mr-auto ml-auto">
          <div id="content" className="compbox comp-font-sizer" style={{marginTop: '15vh'}}>
            <h1 class="comp-head-sizer">Canvas NFT Minter</h1>
            <p>Canvases minted: {this.state.NFTContractSupply} / 396</p>
            <p>MINT A CANVAS:</p>
            <form onSubmit={(event) => {
              event.preventDefault()
              this.mint()}}>
              <input type="image" src={btnimg} alt="" style={{height: "calc(7vw + 10px)", borderRadius: "13px"}} name="saveForm" class="btTxt submit" id="saveForm" />
            </form>
            <br></br><br></br>
            <form style={{textAlign: 'center'}} action="/pixel" method="get">
              <button className='rainbow-button'>Click to place a Pixel</button>
            </form>
          </div>
        </div>
        </div>
        </div>
      </div>} />
      <Route path="/pixel" element={<Pixelroute/>}/>
    </Routes>
  </Router>
    );
  }
}

function Pixelroute() {
  return <PixelPage/>
}

export default App;

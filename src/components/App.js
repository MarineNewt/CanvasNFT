import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Web3 from 'web3';
import NFTcon from '../contracts/canvas.json'
import btnimg from "../images/tempicon.png"
import bkgrd from '../images/background.png'
import logo from '../images/tempicon.png'
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
      <div style={{height: '100vh', margintop: '0', backgroundImage: `url( ${bkgrd} )`,
      backgroundSize: 'contain'}}>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" style={{height: '7vh'}}>
          <div
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            rel="noopener noreferrer"
          >
            The Canvas NFT Project
          </div>
          <small className="navbar-brand col-sm-1 "> {this.state.account} </small>
          <img src={logo} height="40" width="40"  alt="" />
        </nav>
        <br></br>
        <div style={{left: '29vw', top: 'calc(30vh - 5vw)', position: 'absolute'}}>
          <div id="content" className="mt-3 compbox comp-font-sizer">
            <h1 class="comp-head-sizer">Canvas NFT Minter</h1>
            <p>Canvases minted: {this.state.NFTContractSupply} / 396</p>
            <p>CLICK TO MINT A CANVAS:</p>
            <form onSubmit={(event) => {
            event.preventDefault()
            let seedtoken
            seedtoken = this.input.value.toString()
            this.props.fire(seedtoken)}}>
            <input type="image" src={btnimg} alt="" style={{height: "8vw", borderRadius: "13px"}} name="saveForm" class="btTxt submit" id="saveForm" />
            </form>

            <form className="mt-5" onSubmit={(event) => {
            event.preventDefault()
            let seedtoken
            seedtoken = this.input.value.toString()
            this.props.fire(seedtoken)}}>
            <div>
              <h2 className="float-left"  style = {{color: "white", fontSize: "2vw"}} >Enter Pixel placement information:</h2>
              <br></br>
              <div className='input-group'>
              <input
                type="text"
                ref={(input) =>  { this.input = input }}
                className="form-control form-control-lg"
                placeholder="0"
                required
                style={{height: "3vw"}} />

              <button type="submit" className="input-group-append inputbtn" >Place Pixel</button>
  
              </div>
            </div>
          </form>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

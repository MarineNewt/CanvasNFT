import React, { Component } from 'react'
import logo from '../images/tempicon.png'
import OSlogo from '../images/OSicon.png'

class NavBar extends Component {
  render() {
    const Mobile = window.innerWidth >= 1100 ? 'false' : 'true';
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark  p-0 shadow" style={{height: 'calc(3vh + 24px)'}}>
          <div className='flex-container'>
            <div className="navbar-brand" rel="noopener noreferrer" style={{marginLeft:'10px', marginRight: 'calc(25vw - 100px)'}}>
            The Canvas NFT Project
            </div>
            {Mobile === 'false' && <p className="navbar-brand" style={{margin: 0, padding: 0,fontSize: 'calc(8px + 1.25vw)'}}> {this.props.account} </p>}          
          </div>
        
          <img className="navimage" src={logo} style={{position: 'fixed', right: '0px'}}   alt="" /> 
          <a href="https://opensea.io/collection/the-onchain-canvas" rel="noopener noreferrer" target="_blank"><img className="navimage" src={OSlogo} style={{position: 'relative', right: '55px'}}   alt="" /></a>
        </nav>
    );
  }
}

export default NavBar;
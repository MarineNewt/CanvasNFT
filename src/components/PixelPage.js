import React, { Component } from 'react'
import NavBar from './NavBar.js';
import bkgrd from '../images/background.png'


class PixelPage extends Component {
  
  render() {
    return (
      <div style={{height: '100vh', margintop: '0', backgroundImage: `url( ${bkgrd} )`,
      backgroundSize: 'contain'}}>
        <NavBar account = {this.props.account} />
        <div className="container-fluid">
        <div className="row">
        <div className="content mr-auto ml-auto">
          <div id="content" className="compbox comp-font-sizer" style={{marginTop: '9vh'}}>
            <div id="grid" className="mb-3">
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(0)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(3)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(4)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(5)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(6)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(7)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(8)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(9)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(3)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[0]+","+this.props.canvasfull[0]+")"}}></button>
              </div>
            </div>

            <form onSubmit={(event) => {
            event.preventDefault()
            let tokenID
            let rcolor
            let gcolor
            let bcolor
            tokenID = this.input1.value.toString()
            rcolor = this.input2.value.toString()
            gcolor = this.input3.value.toString()
            bcolor = this.input4.value.toString()
            this.props.place(tokenID,rcolor,gcolor,bcolor)}}>
              
            <div className='input-group'>
              <input
                type="text"
                ref={(input) =>  { this.input2 = input }}
                className="form-control form-control-lg"
                placeholder="R (1-255)"
                required
                style={{height: "3vw"}} />
              <input
                type="text"
                ref={(input) =>  { this.input3 = input }}
                className="form-control form-control-lg"
                placeholder="G (1-255)"
                required
                style={{height: "3vw"}} />
              <input
                type="text"
                ref={(input) =>  { this.input4 = input }}
                className="form-control form-control-lg"
                placeholder="B (1-255)"
                required
                style={{height: "3vw"}} />
              </div>
              <div>
                <input
                  type="text"
                  ref={(input) =>  { this.input1 = input }}
                  className="form-control form-control-lg"
                  placeholder="Your Canvas Token ID"
                  required
                  style={{height: "3vw"}} />
                <button type="submit" className="rainbow-button " style = {{width: '100%'}} >Place a pixel</button>
              </div>
            </form>

            <button onClick={(event) => {event.preventDefault();this.props.page(1)}} className="btn btn-primary btn-block btn-lg mb-1 mt-3" style = {{color: "white", backgroundColor: "black"}} >Return</button>

          </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default PixelPage;
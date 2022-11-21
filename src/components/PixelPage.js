import React, { Component } from 'react'
import NavBar from './NavBar.js';
import PickColor from './ColorPicker.js';
import bkgrd from '../images/background.png'


class PixelPage extends Component {
  
  render() {
    return (
      <div style={{height: '100vh', margintop: '0', backgroundImage: `url( ${bkgrd} )`,
      backgroundSize: 'contain'}}>
        <NavBar account = {this.props.account} />
        <div style={{position: 'absolute', top: '68px', left: 'calc(30px + .5vw)'}}><PickColor/></div>
        <div className="container-fluid">
        <div className="row">
        <div className="content mr-auto ml-auto">
          <div id="content" className="compbox comp-font-sizer" style={{marginTop: '9vh', width: 'calc(15vw + 230px)'}}>
            <div id="grid" className="mb-3">
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(1)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[0]+","+this.props.canvasfull[1]+","+this.props.canvasfull[2]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(2)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[3]+","+this.props.canvasfull[4]+","+this.props.canvasfull[5]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(3)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[6]+","+this.props.canvasfull[7]+","+this.props.canvasfull[8]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(4)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[9]+","+this.props.canvasfull[10]+","+this.props.canvasfull[11]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(5)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[12]+","+this.props.canvasfull[13]+","+this.props.canvasfull[14]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(6)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[15]+","+this.props.canvasfull[16]+","+this.props.canvasfull[17]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(7)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[18]+","+this.props.canvasfull[19]+","+this.props.canvasfull[20]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(8)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[21]+","+this.props.canvasfull[22]+","+this.props.canvasfull[23]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(9)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[24]+","+this.props.canvasfull[25]+","+this.props.canvasfull[26]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(10)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[27]+","+this.props.canvasfull[28]+","+this.props.canvasfull[29]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(11)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[30]+","+this.props.canvasfull[31]+","+this.props.canvasfull[32]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(12)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[33]+","+this.props.canvasfull[34]+","+this.props.canvasfull[35]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(13)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[36]+","+this.props.canvasfull[37]+","+this.props.canvasfull[38]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(14)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[39]+","+this.props.canvasfull[40]+","+this.props.canvasfull[41]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(15)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[42]+","+this.props.canvasfull[43]+","+this.props.canvasfull[44]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(16)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[45]+","+this.props.canvasfull[46]+","+this.props.canvasfull[47]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(17)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[48]+","+this.props.canvasfull[49]+","+this.props.canvasfull[50]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(18)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[51]+","+this.props.canvasfull[52]+","+this.props.canvasfull[53]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(19)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[54]+","+this.props.canvasfull[55]+","+this.props.canvasfull[56]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(20)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[57]+","+this.props.canvasfull[58]+","+this.props.canvasfull[59]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(21)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[60]+","+this.props.canvasfull[61]+","+this.props.canvasfull[62]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(22)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[63]+","+this.props.canvasfull[64]+","+this.props.canvasfull[65]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(23)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[66]+","+this.props.canvasfull[67]+","+this.props.canvasfull[68]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(24)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[69]+","+this.props.canvasfull[70]+","+this.props.canvasfull[71]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(25)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[72]+","+this.props.canvasfull[73]+","+this.props.canvasfull[74]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(26)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[75]+","+this.props.canvasfull[76]+","+this.props.canvasfull[77]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(27)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[78]+","+this.props.canvasfull[79]+","+this.props.canvasfull[80]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(28)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[81]+","+this.props.canvasfull[82]+","+this.props.canvasfull[83]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(29)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[84]+","+this.props.canvasfull[85]+","+this.props.canvasfull[86]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(30)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[87]+","+this.props.canvasfull[88]+","+this.props.canvasfull[89]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(31)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[90]+","+this.props.canvasfull[91]+","+this.props.canvasfull[92]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(32)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[93]+","+this.props.canvasfull[94]+","+this.props.canvasfull[95]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(33)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[96]+","+this.props.canvasfull[97]+","+this.props.canvasfull[98]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(34)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[99]+","+this.props.canvasfull[100]+","+this.props.canvasfull[101]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(35)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[102]+","+this.props.canvasfull[103]+","+this.props.canvasfull[104]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(36)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[105]+","+this.props.canvasfull[106]+","+this.props.canvasfull[107]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(37)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[108]+","+this.props.canvasfull[109]+","+this.props.canvasfull[110]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(38)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[111]+","+this.props.canvasfull[112]+","+this.props.canvasfull[113]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(39)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[114]+","+this.props.canvasfull[115]+","+this.props.canvasfull[116]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(40)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[117]+","+this.props.canvasfull[118]+","+this.props.canvasfull[119]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(41)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[120]+","+this.props.canvasfull[121]+","+this.props.canvasfull[122]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(42)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[123]+","+this.props.canvasfull[124]+","+this.props.canvasfull[125]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(43)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[126]+","+this.props.canvasfull[127]+","+this.props.canvasfull[128]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(44)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[129]+","+this.props.canvasfull[130]+","+this.props.canvasfull[131]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(45)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[132]+","+this.props.canvasfull[133]+","+this.props.canvasfull[134]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(46)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[135]+","+this.props.canvasfull[136]+","+this.props.canvasfull[137]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(47)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[138]+","+this.props.canvasfull[139]+","+this.props.canvasfull[140]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(48)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[141]+","+this.props.canvasfull[142]+","+this.props.canvasfull[143]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(49)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[144]+","+this.props.canvasfull[145]+","+this.props.canvasfull[146]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(50)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[147]+","+this.props.canvasfull[148]+","+this.props.canvasfull[149]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(51)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[150]+","+this.props.canvasfull[151]+","+this.props.canvasfull[152]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(52)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[153]+","+this.props.canvasfull[154]+","+this.props.canvasfull[155]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(53)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[156]+","+this.props.canvasfull[157]+","+this.props.canvasfull[158]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(54)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[159]+","+this.props.canvasfull[160]+","+this.props.canvasfull[161]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(55)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[162]+","+this.props.canvasfull[163]+","+this.props.canvasfull[164]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(56)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[165]+","+this.props.canvasfull[166]+","+this.props.canvasfull[167]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(57)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[168]+","+this.props.canvasfull[169]+","+this.props.canvasfull[170]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(58)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[171]+","+this.props.canvasfull[172]+","+this.props.canvasfull[173]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(59)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[174]+","+this.props.canvasfull[175]+","+this.props.canvasfull[176]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(60)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[177]+","+this.props.canvasfull[178]+","+this.props.canvasfull[179]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(61)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[180]+","+this.props.canvasfull[181]+","+this.props.canvasfull[182]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(62)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[183]+","+this.props.canvasfull[184]+","+this.props.canvasfull[185]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(63)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[186]+","+this.props.canvasfull[187]+","+this.props.canvasfull[188]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(64)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[189]+","+this.props.canvasfull[190]+","+this.props.canvasfull[191]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(65)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[192]+","+this.props.canvasfull[193]+","+this.props.canvasfull[194]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(66)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[195]+","+this.props.canvasfull[196]+","+this.props.canvasfull[197]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(67)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[198]+","+this.props.canvasfull[199]+","+this.props.canvasfull[200]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(68)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[201]+","+this.props.canvasfull[202]+","+this.props.canvasfull[203]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(69)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[204]+","+this.props.canvasfull[205]+","+this.props.canvasfull[206]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(70)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[207]+","+this.props.canvasfull[208]+","+this.props.canvasfull[209]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(71)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[210]+","+this.props.canvasfull[211]+","+this.props.canvasfull[212]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(72)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[213]+","+this.props.canvasfull[214]+","+this.props.canvasfull[215]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(73)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[216]+","+this.props.canvasfull[217]+","+this.props.canvasfull[218]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(74)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[219]+","+this.props.canvasfull[220]+","+this.props.canvasfull[221]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(75)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[222]+","+this.props.canvasfull[223]+","+this.props.canvasfull[224]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(76)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[225]+","+this.props.canvasfull[226]+","+this.props.canvasfull[227]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(77)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[228]+","+this.props.canvasfull[229]+","+this.props.canvasfull[230]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(78)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[231]+","+this.props.canvasfull[232]+","+this.props.canvasfull[233]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(79)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[234]+","+this.props.canvasfull[235]+","+this.props.canvasfull[236]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(80)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[237]+","+this.props.canvasfull[238]+","+this.props.canvasfull[239]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(81)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[240]+","+this.props.canvasfull[241]+","+this.props.canvasfull[242]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(82)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[243]+","+this.props.canvasfull[244]+","+this.props.canvasfull[245]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(83)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[246]+","+this.props.canvasfull[247]+","+this.props.canvasfull[248]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(84)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[249]+","+this.props.canvasfull[250]+","+this.props.canvasfull[251]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(85)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[252]+","+this.props.canvasfull[253]+","+this.props.canvasfull[254]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(86)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[255]+","+this.props.canvasfull[256]+","+this.props.canvasfull[257]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(87)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[258]+","+this.props.canvasfull[259]+","+this.props.canvasfull[260]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(88)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[261]+","+this.props.canvasfull[262]+","+this.props.canvasfull[263]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(89)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[264]+","+this.props.canvasfull[265]+","+this.props.canvasfull[266]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(90)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[267]+","+this.props.canvasfull[268]+","+this.props.canvasfull[269]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(91)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[270]+","+this.props.canvasfull[271]+","+this.props.canvasfull[272]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(92)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[273]+","+this.props.canvasfull[274]+","+this.props.canvasfull[275]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(93)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[276]+","+this.props.canvasfull[277]+","+this.props.canvasfull[278]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(94)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[279]+","+this.props.canvasfull[280]+","+this.props.canvasfull[281]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(95)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[282]+","+this.props.canvasfull[283]+","+this.props.canvasfull[284]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(96)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[285]+","+this.props.canvasfull[286]+","+this.props.canvasfull[287]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(97)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[288]+","+this.props.canvasfull[289]+","+this.props.canvasfull[290]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(98)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[291]+","+this.props.canvasfull[292]+","+this.props.canvasfull[293]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(99)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[294]+","+this.props.canvasfull[295]+","+this.props.canvasfull[296]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(100)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[297]+","+this.props.canvasfull[298]+","+this.props.canvasfull[299]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(101)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[300]+","+this.props.canvasfull[301]+","+this.props.canvasfull[302]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(102)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[303]+","+this.props.canvasfull[304]+","+this.props.canvasfull[305]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(103)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[306]+","+this.props.canvasfull[307]+","+this.props.canvasfull[308]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(104)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[309]+","+this.props.canvasfull[310]+","+this.props.canvasfull[311]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(105)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[312]+","+this.props.canvasfull[313]+","+this.props.canvasfull[314]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(106)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[315]+","+this.props.canvasfull[316]+","+this.props.canvasfull[317]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(107)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[318]+","+this.props.canvasfull[319]+","+this.props.canvasfull[320]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(108)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[321]+","+this.props.canvasfull[322]+","+this.props.canvasfull[323]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(109)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[324]+","+this.props.canvasfull[325]+","+this.props.canvasfull[326]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(110)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[327]+","+this.props.canvasfull[328]+","+this.props.canvasfull[329]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(111)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[330]+","+this.props.canvasfull[331]+","+this.props.canvasfull[332]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(112)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[333]+","+this.props.canvasfull[334]+","+this.props.canvasfull[335]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(113)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[336]+","+this.props.canvasfull[337]+","+this.props.canvasfull[338]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(114)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[339]+","+this.props.canvasfull[340]+","+this.props.canvasfull[341]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(115)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[342]+","+this.props.canvasfull[343]+","+this.props.canvasfull[344]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(116)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[345]+","+this.props.canvasfull[346]+","+this.props.canvasfull[347]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(117)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[348]+","+this.props.canvasfull[349]+","+this.props.canvasfull[350]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(118)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[351]+","+this.props.canvasfull[352]+","+this.props.canvasfull[353]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(119)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[354]+","+this.props.canvasfull[355]+","+this.props.canvasfull[356]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(120)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[357]+","+this.props.canvasfull[358]+","+this.props.canvasfull[359]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(121)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[360]+","+this.props.canvasfull[361]+","+this.props.canvasfull[362]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(122)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[363]+","+this.props.canvasfull[364]+","+this.props.canvasfull[365]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(123)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[366]+","+this.props.canvasfull[367]+","+this.props.canvasfull[368]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(124)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[369]+","+this.props.canvasfull[370]+","+this.props.canvasfull[371]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(125)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[372]+","+this.props.canvasfull[373]+","+this.props.canvasfull[374]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(126)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[375]+","+this.props.canvasfull[376]+","+this.props.canvasfull[377]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(127)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[378]+","+this.props.canvasfull[379]+","+this.props.canvasfull[380]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(128)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[381]+","+this.props.canvasfull[382]+","+this.props.canvasfull[383]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(129)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[384]+","+this.props.canvasfull[385]+","+this.props.canvasfull[386]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(130)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[387]+","+this.props.canvasfull[388]+","+this.props.canvasfull[389]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(131)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[390]+","+this.props.canvasfull[391]+","+this.props.canvasfull[392]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(132)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[393]+","+this.props.canvasfull[394]+","+this.props.canvasfull[395]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(133)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[396]+","+this.props.canvasfull[397]+","+this.props.canvasfull[398]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(134)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[399]+","+this.props.canvasfull[400]+","+this.props.canvasfull[401]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(135)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[402]+","+this.props.canvasfull[403]+","+this.props.canvasfull[404]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(136)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[405]+","+this.props.canvasfull[406]+","+this.props.canvasfull[407]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(137)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[408]+","+this.props.canvasfull[409]+","+this.props.canvasfull[410]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(138)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[411]+","+this.props.canvasfull[412]+","+this.props.canvasfull[413]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(139)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[414]+","+this.props.canvasfull[415]+","+this.props.canvasfull[416]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(140)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[417]+","+this.props.canvasfull[418]+","+this.props.canvasfull[419]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(141)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[420]+","+this.props.canvasfull[421]+","+this.props.canvasfull[422]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(142)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[423]+","+this.props.canvasfull[424]+","+this.props.canvasfull[425]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(143)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[426]+","+this.props.canvasfull[427]+","+this.props.canvasfull[428]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(144)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[429]+","+this.props.canvasfull[430]+","+this.props.canvasfull[431]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(145)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[432]+","+this.props.canvasfull[433]+","+this.props.canvasfull[434]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(146)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[435]+","+this.props.canvasfull[436]+","+this.props.canvasfull[437]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(147)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[438]+","+this.props.canvasfull[439]+","+this.props.canvasfull[440]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(148)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[441]+","+this.props.canvasfull[442]+","+this.props.canvasfull[443]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(149)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[444]+","+this.props.canvasfull[445]+","+this.props.canvasfull[446]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(150)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[447]+","+this.props.canvasfull[448]+","+this.props.canvasfull[449]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(151)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[450]+","+this.props.canvasfull[451]+","+this.props.canvasfull[452]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(152)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[453]+","+this.props.canvasfull[454]+","+this.props.canvasfull[455]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(153)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[456]+","+this.props.canvasfull[457]+","+this.props.canvasfull[458]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(154)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[459]+","+this.props.canvasfull[460]+","+this.props.canvasfull[461]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(155)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[462]+","+this.props.canvasfull[463]+","+this.props.canvasfull[464]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(156)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[465]+","+this.props.canvasfull[466]+","+this.props.canvasfull[467]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(157)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[468]+","+this.props.canvasfull[469]+","+this.props.canvasfull[470]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(158)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[471]+","+this.props.canvasfull[472]+","+this.props.canvasfull[473]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(159)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[474]+","+this.props.canvasfull[475]+","+this.props.canvasfull[476]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(160)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[477]+","+this.props.canvasfull[478]+","+this.props.canvasfull[479]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(161)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[480]+","+this.props.canvasfull[481]+","+this.props.canvasfull[482]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(162)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[483]+","+this.props.canvasfull[484]+","+this.props.canvasfull[485]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(163)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[486]+","+this.props.canvasfull[487]+","+this.props.canvasfull[488]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(164)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[489]+","+this.props.canvasfull[490]+","+this.props.canvasfull[491]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(165)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[492]+","+this.props.canvasfull[493]+","+this.props.canvasfull[494]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(166)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[495]+","+this.props.canvasfull[496]+","+this.props.canvasfull[497]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(167)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[498]+","+this.props.canvasfull[499]+","+this.props.canvasfull[500]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(168)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[501]+","+this.props.canvasfull[502]+","+this.props.canvasfull[503]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(169)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[504]+","+this.props.canvasfull[505]+","+this.props.canvasfull[506]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(170)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[507]+","+this.props.canvasfull[508]+","+this.props.canvasfull[509]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(171)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[510]+","+this.props.canvasfull[511]+","+this.props.canvasfull[512]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(172)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[513]+","+this.props.canvasfull[514]+","+this.props.canvasfull[515]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(173)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[516]+","+this.props.canvasfull[517]+","+this.props.canvasfull[518]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(174)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[519]+","+this.props.canvasfull[520]+","+this.props.canvasfull[521]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(175)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[522]+","+this.props.canvasfull[523]+","+this.props.canvasfull[524]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(176)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[525]+","+this.props.canvasfull[526]+","+this.props.canvasfull[527]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(177)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[528]+","+this.props.canvasfull[529]+","+this.props.canvasfull[530]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(178)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[531]+","+this.props.canvasfull[532]+","+this.props.canvasfull[533]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(179)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[534]+","+this.props.canvasfull[535]+","+this.props.canvasfull[536]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(180)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[537]+","+this.props.canvasfull[538]+","+this.props.canvasfull[539]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(181)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[540]+","+this.props.canvasfull[541]+","+this.props.canvasfull[542]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(182)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[543]+","+this.props.canvasfull[544]+","+this.props.canvasfull[545]+")"}}></button>
              </div>
              <div className='noroom'>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(183)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[546]+","+this.props.canvasfull[547]+","+this.props.canvasfull[548]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(184)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[549]+","+this.props.canvasfull[550]+","+this.props.canvasfull[551]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(185)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[552]+","+this.props.canvasfull[553]+","+this.props.canvasfull[554]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(186)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[555]+","+this.props.canvasfull[556]+","+this.props.canvasfull[557]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(187)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[558]+","+this.props.canvasfull[559]+","+this.props.canvasfull[560]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(188)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[561]+","+this.props.canvasfull[562]+","+this.props.canvasfull[563]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(189)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[564]+","+this.props.canvasfull[565]+","+this.props.canvasfull[566]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(190)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[567]+","+this.props.canvasfull[568]+","+this.props.canvasfull[569]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(191)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[570]+","+this.props.canvasfull[571]+","+this.props.canvasfull[572]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(192)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[573]+","+this.props.canvasfull[574]+","+this.props.canvasfull[575]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(193)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[576]+","+this.props.canvasfull[577]+","+this.props.canvasfull[578]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(194)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[579]+","+this.props.canvasfull[580]+","+this.props.canvasfull[581]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(195)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[582]+","+this.props.canvasfull[583]+","+this.props.canvasfull[584]+")"}}></button>
                <button onClick={(event) => {event.preventDefault();this.props.settarget(196)}} className='squareit' style={{backgroundColor: "rgb("+this.props.canvasfull[585]+","+this.props.canvasfull[586]+","+this.props.canvasfull[587]+")"}}></button>
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
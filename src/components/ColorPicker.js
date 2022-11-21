import React, { Component } from 'react';
import Pickr from '@simonwep/pickr';
import '@simonwep/pickr/dist/themes/classic.min.css';

class ColorPicker extends Component { 

   componentDidMount(){
     Pickr.create({
     el: '.color-picker',
     theme: 'classic', 
     default: 'rgb(255, 255, 255)',
     swatches: [
        'rgba(255, 255, 255, 1)',
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)',
        'rgba(0, 0, 0, 1)'
    ],

    components: {

        preview: true,
        opacity: false,
        hue: true,

        interaction: {
            hex: false,
            rgba: false,
            hsva: false,
            input: true,
            cmyk: false,
            clear: false,
            save: false
        }
    }
    })}

   render() {
     return(
       <div className="color-picker"></div>
     )
   }

}
export default ColorPicker;
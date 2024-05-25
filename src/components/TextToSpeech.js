import React, { Component } from 'react'
import '../static/TextToSpeech.css'
import logo from "../static/my-logo.png"
export default class TextToSpeech extends Component {
  render() {
    function convert() {
        const text = document.getElementsByClassName("textarea")[0];
        if(!(text.value)) {
            alert("Please enter the text to convert..!!")
        } else {
            const button = document.getElementsByClassName("convert");
            button.disabled = true;
            setTimeout(function() {
                const msg = new SpeechSynthesisUtterance();
                msg.text = text.value;
                msg.voice = window.speechSynthesis.getVoices()[4];
                window.speechSynthesis.speak(msg);
                button.disabled = false;
              }, 1000);
        }
    }
    function clear() {
        const text = document.getElementsByClassName("textarea")[0];
        if(!(text.value)) {
            alert("Nothing to clear..!!")    
        } else {
            document.getElementsByClassName("textarea")[0].value = "";
            alert("Clearing the text now..!!");
        }
    }
    return (
      <>
        <div className='outer-container'>
            <h1>Text to Speech</h1><br />
            <img className='my-logo' src={logo} alt=''/>
            <div className='convert-container'>
                <textarea className='textarea'></textarea> <br />
                <button className='convert' onClick={convert}>Convert to Speech</button>
                <button className='clear' onClick={clear}>Clear</button>
            </div>
        </div>
      </>
    )
  }
}
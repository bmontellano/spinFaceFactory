import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { findDOMNode } from ‘react-dom’;
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var counter = 0;
    var r = 5;
    var logo = $('.App-logo').click(function(){
      counter += 1;
      console.log("This is how many times you've clicked the logo --->" + counter);
      if (r && counter > 10){console.log('This is r ---> ' + r); r = r/2;}
      if (counter >= 10) {
        console.log("Here's you're reward");
        $(this).css('animation',`App-logo-spin infinite ${r}s linear`);
      }
      if(counter <10){
      $('.App-logo').hide(1000, function(){
        $('.App-logo').show(1000);
      });
      console.log('this is d --->', logo);
      if (counter >5 && counter < 10) {
        console.log('Ooooooo, you"re pressing it quite a bit of times. You"re a curious one');
      }
    }
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           <spinnys id='play-here'>PLAY HERE FOR EXCITING TIMES,</spinnys> <br />  <i id='spin-class'>and please don't pay attention to the nonsense above...</i>.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React: 
          </a>
          IF YOU REALLY WANT TO,<br /> 
            <span id='choose-id'>PROVE IT BY CLICKING ON THE SPINNY TO MAKE IT SPIN FASTER</span>
        </header>
        <script>
        var s = $()
        console.log('This is s ---->' + s);
        </script>
      </div>
     
    );
  }
  
}


export default App;
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
    var $chooseId = $('#choose-id');
    var $chooseId2 = $('#choose-id2');
    var $spinClassId = $('#play-here');
    var $learnReact = $(".App-link");
    var logo = $('.App-logo').click(function(){
      counter += 1;
      console.log("This is how many times you've clicked the logo --->" + counter);
      if(counter === 1){
       $chooseId.html("<i>Oooooh, that looks nice</i>");
       $chooseId2.hide(1500);
       $spinClassId.hide(2100, function(){
         $spinClassId.html("<p>" + "Counter: " + counter + "</p>")
         $spinClassId.show(2500, function() {
          $learnReact.hide(222);
          $('p').css('padding','0px').css('margin', '0px');
         });
       })  
    }
    $spinClassId.html("<p>" + "Counter: " + counter + "</p>")
    $('p').css('padding','0px').css('margin', '0px');
    if(counter === 3) {
      $('#choose-id').html("<strong>Oh, <i>woow</i>, I think you're on to something.</strong>")
    }
    if(counter ===7) {
      $chooseId2.show(2800, function(){
        $(this).html('<h3> I feel something special, is about to happen.</h3>');
      })
    }
    if(counter === 10){$chooseId2.html('<h3>WELCOME TO THE <i>SPIN ZONE</i></h3>'); $chooseId.hide(2000);}
      if (r && counter > 10){console.log('This is r ---> ' + r); r = r/1.2;}
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
           <spinnys id='play-here'>PLAY HERE FOR EXCITING TIMES, <br />  <i id='spin-class'>and please don't pay attention to the nonsense above...</i>. </spinnys>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
          <span id='choose-id2'>IF YOU REALLY WANT TO,</span> <br />
          <span id='choose-id'>PROVE IT BY CLICKING ON THE SPINNY TO MAKE IT SPIN FASTER</span>
          </p> 
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

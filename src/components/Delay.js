import React from 'react';
import { connect } from 'react-redux';

class Delay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: [],
      isStarted: false
    };
  }

  componentWillMount() {
	var contextClass = (window.AudioContext || window.webkitAudioContext)

	if (contextClass) 
	{
	  // Web Audio API is available.
	  this.state.context = new contextClass();
	} 
	else 
	{
	  alert('Web Audio API is not supported in this browser.')
	}

  }

  turnOnDelay() {
    console.log(this.props, '<---PROPS', this.state, '<-----STATE')
    if (this.props.isDelayOn) {
      if (!this.state.isStarted) {
        let tuna = newTuna(this.state.context)
        this.delay = new tuna.Delay({
          delayTime: 100
        });
        this.delay.connect(this.state.context.destination)
        this.delay.start(0);
        this.state.isStarted = true;
      }
      console.log(this.state.isStarted, this.state.context, this.lfo.frequency)
    }
    
  }
}
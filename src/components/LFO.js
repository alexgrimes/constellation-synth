import store from './store'
import React from 'react';
import { connect } from 'react-redux';

class LFO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: [],
      isStarted: false,
    }
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

  turnOnLFO() {
    if (this.props.isLFOOn) {
      if (!this.state.isStarted) {
        this.lfo = new OscillatorNode(this.state.context)
        let lfoGain = this.state.context.createGain();
        let masterGain = this.state.context.createGain();
        this.lfo.connect(lfoGain);
        masterGain.gain.value = this.props.masterGainValue;
        masterGain.connect(this.state.context.destination)
        this.lfo.start(0);
        this.state.isStarted = true;
        console.log(this.state, this.props)
      }
    }
    else {
      if(typeof this.lfo !== 'undefined') {
        if (this.state.isStarted) {
          this.lfo.stop(0);
          this.state.isStarted = false;
        }
      }
      console.log(this.state.isStarted)
    }
  }

  LFOTypeChanged(typeName) {
    console.log(this.state.isStarted)
	if (typeof this.lfo !== "undefined") {
	  this.lfo.type = typeName;
	}
  }

  LFOFrequencyChanged(value) {
    console.log(value, this.state.context.currentTime, this.lfo)
    if (typeof this.lfo !== "undefined") {
	  this.lfo.frequency.setValueAtTime(value, this.state.context.currentTime);
    }
  }

  render() {
    console.log(this.state.isStarted)
  	if(typeof this.lfo !== "undefined") {
  		this.lfo.onended = function() {
  			console.log("hey")
  		}
  	}
    console.log(this.state.isStarted, this.props.isLFOOn)
    this.turnOnLFO(this.props.isLFOOn);
    this.LFOTypeChanged(this.props.lfoType);
    this.LFOFrequencyChanged(this.props.lfoFreq);

    return (null)
  }
}
function mapStateToProps(state){
  console.log(state)
  return{
    isLFOOn: state.isLFOOn,
    lfoFreq: state.lfoFreq,
    lfoType: state.lfoType,
    masterGainValue: state.masterGainValue
  }
}

export default connect(mapStateToProps) (LFO);
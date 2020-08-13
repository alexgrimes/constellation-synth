import store from './store'
import React from 'react';
import { connect } from 'react-redux';

class OSC3 extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      context: [],
      isStarted: false,
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

  turnOnOSC3() {
    console.log(this.props, '<---PROPS', this.state, '<-----STATE')
    if (this.props.isOSC3On) {
      if (!this.state.isStarted) {
        this.osc = new OscillatorNode(this.state.context);
        let oscGain = this.state.context.createGain();
        let masterGain = this.state.context.createGain();
        this.osc.connect(oscGain);
        oscGain.connect(masterGain);
        // let frequency = this.osc.frequency.value / 3
        // this.osc.frequency.value = frequency;
        console.log(this.osc.frequency.value, masterGain.value)
        masterGain.gain.value = this.props.masterGainValue;
        masterGain.connect(this.state.context.destination)
        this.osc.start(0);
        this.state.isStarted = true;
      }
      console.log(this.state.isStarted, this.state.context, this.osc.frequency)
    }
    else {
      if(typeof this.osc !== "undefined") {
        if (this.state.isStarted) {
          this.osc.stop(0);
          this.state.isStarted = false;
        }
      }
    }
  }

  OSC3TypeChanged(typeName) {
    console.log(this.state.isStarted)
	if (typeof this.osc !== "undefined") {
	  this.osc.type = typeName;
	}
  }

  OSC3FrequencyChanged(value) {
    console.log(value, this.state.context.currentTime, this.osc)
    if (typeof this.osc !== "undefined") {
	  this.osc.frequency.setValueAtTime(value, this.state.context.currentTime);
  }
  }
  

  render() {
    console.log(this.state.isStarted)
  	if(typeof this.osc !== "undefined") {
  		this.osc.onended = function() {
  			console.log("hey")
  		}
  	}
    console.log(this.props.osc3Freq, this.osc)
    this.turnOnOSC3(this.props.isOSC3On);
    this.OSC3TypeChanged(this.props.osc3Type);
    this.OSC3FrequencyChanged(this.props.osc3Freq);

    return (null)
  }
}

function mapStateToProps(state){
  return{
    isOSC3On: state.isOSC3On,
    osc3Freq: state.osc3Freq,
    osc3Type: state.osc3Type,
    masterGainValue: state.masterGainValue,
  }
}

export default connect(mapStateToProps)(OSC3);
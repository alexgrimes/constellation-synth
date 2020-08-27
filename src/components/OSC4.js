import React from 'react';
import { connect } from 'react-redux';
import Tuna from 'tunajs'

class OSC4 extends React.Component {
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

  turnOnOSC4() {
  	if (this.props.isOSC4On) {
		if (!this.state.isStarted){

		// tuna context
		var tuna = new Tuna(this.state.context);

		// setting effects state
		this.osc = new OscillatorNode(this.state.context);
		this.chorus = new tuna.Chorus(this.state.context)
		this.lfo = new OscillatorNode(this.state.context);
		this.filter = new tuna.Filter(this.state.context);
		this.filter2 = new tuna.Filter(this.state.context);
		this.tremolo = new tuna.Tremolo(this.state.context);
		this.reverb = new tuna.Convolver(this.state.context);
		this.cabinet = new tuna.Cabinet(this.state.context);
		this.panner = new tuna.Panner(this.state.context);
		this.phaser = new tuna.Phaser(this.state.context);
		this.overdrive = new tuna.Overdrive(this.state.context);
		this.delay = new tuna.PingPongDelay(this.state.context)
		var output = this.state.context.createGain();
		var masterGain = this.state.context.createGain();
		var oscGain = this.state.context.createGain();
		var lfoGain = this.state.context.createGain();

		this.osc.connect(oscGain);
		this.lfo.connect(lfoGain);
		lfoGain.connect(oscGain.gain)
		oscGain.connect(this.chorus)
		this.chorus.connect(this.filter)
		this.filter.connect(this.tremolo);
		this.filter2.connect(this.tremolo);
		this.tremolo.connect(this.reverb);
		this.reverb.connect(this.panner);
		this.panner.connect(this.phaser);
		this.phaser.connect(this.delay);
		this.delay.connect(this.overdrive)
		this.overdrive.connect(output)
		output.connect(output.gain);
		output.connect(masterGain);
		masterGain.gain.value = this.props.masterGainValue;
        masterGain.connect(this.state.context.destination)
        this.osc.start(0);
				this.lfo.start(0);
        this.state.isStarted = true;
      }
    }
    else {
      if(typeof this.osc !== "undefined") {
        if (this.state.isStarted) {
          this.osc.stop(0);
					this.lfo.stop(0);
          this.state.isStarted = false;
        }
      }
    }
  }

  OSC4TypeChanged(typeName) {
   
	if (typeof this.osc !== "undefined") {
	  this.osc.type = typeName;
	}
  }

  OSC4FrequencyChanged(value) {
    
    if (typeof this.osc !== "undefined") {
	  this.osc.frequency.setValueAtTime(value, this.state.context.currentTime);
  }
  }

	lfo4TypeChanged(typeName) {
	if (typeof this.osc !== "undefined") {
	  this.lfo.type = typeName;
	}
  }

  lfo4FrequencyChanged(value) {
	if (typeof this.osc !== "undefined") {
	  this.lfo.frequency.setValueAtTime(value, this.state.context.currentTime);
	}
  }
  

  render() {
   
  	if(typeof this.osc !== "undefined") {
  		this.osc.onended = function() {
  		
  		}
  	}
		console.log(this.props.lfo4Freq)
		console.log(this.props.lfo4Type)
		this.lfo4FrequencyChanged(this.props.lfo4Freq)
		this.lfo4TypeChanged(this.props.lfo4Type)
    this.turnOnOSC4(this.props.isOSC4On);
    this.OSC4TypeChanged(this.props.osc4Type);
    this.OSC4FrequencyChanged(this.props.osc4Freq);

    return (
		<div>
		<h5>frequency: {this.props.osc4Freq}</h5>
		</div>
		)
  }
}

function mapStateToProps(state){
  return{
    isOSC4On: state.isOSC4On,
    osc4Freq: state.osc4Freq,
    osc4Type: state.osc4Type,
		lfo4Freq: state.lfo4Freq,
		lfo4Type: state.lfo4Type,
    masterGainValue: state.masterGainValue,
  }
}

export default connect(mapStateToProps)(OSC4);
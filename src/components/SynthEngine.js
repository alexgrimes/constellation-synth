import store from './store';
import React from 'react';
import { connect } from 'react-redux';
import Tuna from 'tunajs';

class SynthEngine extends React.Component {
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

  playSound() {
		console.log(this.props, this.state, this.state.context.destination)
  	if (this.props.isSynthPlaying) {
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
		this.bitcrusher = new tuna.Bitcrusher(this.state.context);
		this.moogFilter = new tuna.MoogFilter(this.state.context);
		this.moogFilter2 = new tuna.MoogFilter(this.state.context);
		this.reverb = new tuna.Convolver(this.state.context);
		this.cabinet = new tuna.Cabinet(this.state.context);
		this.panner = new tuna.Panner(this.state.context);
		this.phaser = new tuna.Phaser(this.state.context);
		// this.chorus = new tuna.Chorus(this.state.context);
		this.overdrive = new tuna.Overdrive(this.state.context);
		// this.overdrive2 = new tuna.Overdrive(this.state.context);
		// this.underdrive = new tuna.Overdrive(this.state.context);


		//
		var input = this.state.context.createGain();
		var output = this.state.context.createGain();
		var masterGain = this.state.context.createGain();

		//connecting

		// oscOutput.connect(this.osc)
	
		// this.lfo.connect(output);
		// output.connect(this.osc.frequency)
		// this.osc.connect(output);

		this.osc.connect(this.chorus)
		this.chorus.connect(this.filter)
		// input.connect(this.filter);
		this.filter.connect(this.filter2);
		// input.connect(this.filter2);
		this.filter2.connect(this.tremolo);
		
		this.tremolo.connect(this.reverb);

		// this.bitcrusher.connect(this.moogFilter);
	
		// this.moogFilter.connect(this.moogFilter2);
	
		// this.moogFilter2.connect(this.reverb);

		this.reverb.connect(this.panner);

		this.panner.connect(this.phaser);

		this.phaser.connect(this.overdrive);

		this.overdrive.connect(output);
	
		output.connect(output.gain);
		output.connect(masterGain);

		output.connect(output.gain);
		output.connect(masterGain);

		masterGain.gain.value = this.props.masterGainValue;

		masterGain.connect(this.state.context.destination);
		this.osc.start(0);
		this.lfo.start(0);
		this.state.isStarted = true;
		console.log(this.state.isStarted, this.state.context, this.lfo)
	    }
	console.log(this.props.masterGainValue)
	}
	else {
	  	if(typeof this.osc !== "undefined") {
		  	if (this.state.isStarted){
		  	this.osc.stop(0);
		  this.state.isStarted = false;
				}
  		}
  	}
	}	

	
///OSC FUNC/////////////
  oscTypeChanged(typeName) {
	if (typeof this.osc !== "undefined") {
	  this.osc.type = typeName;
	}
  }

	oscFrequencyChanged(value) {
		console.log(this.osc, value)
	if (typeof this.osc !== "undefined") {
	  this.osc.frequency.setValueAtTime(value, this.state.context.currentTime);
	}
  }

///LFO FUNC/////////////
  lfoTypeChanged(typeName) {
	if (typeof this.osc !== "undefined") {
	  this.lfo.type = typeName;
	}
  }

  lfoFrequencyChanged(value) {
	if (typeof this.osc !== "undefined") {
	  this.lfo.frequency.setValueAtTime(value, this.state.context.currentTime);
	}
  }

  render() {
  	if(typeof this.osc !== "undefined") {
  		this.osc.onended = function() {
  			console.log("hey")
  		}
  	}
		console.log(this.props.isSynthPlaying, this.state.isStarted)
  	this.playSound(this.props.isSynthPlaying);
		// this.turnOnLFO(this.props.isLFOOn)
  	this.oscTypeChanged(this.props.oscType);
  	// this.lfoTypeChanged(this.props.lfoType);
  	this.oscFrequencyChanged(this.props.oscFreq);
  	// this.lfoFrequencyChanged(this.props.lfoFreq);

  	return (null)
  }
}

function mapStateToProps(state){
	
  return {
    isSynthPlaying: state.isSynthPlaying,
		// isLFOOn: state.isLFOOn,
    oscFreq: state.oscFreq,
    // lfoFreq: state.lfoFreq,
    masterGainValue: state.masterGainValue,
    oscType: state.oscType,
    // lfoType: state.lfoType
  }
}

export default connect(mapStateToProps)(SynthEngine);
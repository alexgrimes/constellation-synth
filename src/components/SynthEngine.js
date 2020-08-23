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
		this.reverb = new tuna.Convolver(this.state.context);
		this.cabinet = new tuna.Cabinet(this.state.context);
		this.panner = new tuna.Panner(this.state.context);
		this.phaser = new tuna.Phaser(this.state.context);
		this.overdrive = new tuna.Overdrive(this.state.context);
		this.delay = new tuna.PingPongDelay(this.state.context)
		var output = this.state.context.createGain();
		var masterGain = this.state.context.createGain();
		this.wah = new tuna.WahWah(this.state.context)
	 //connecting
		this.osc.connect(this.filter)
		this.filter.connect(this.tremolo);
		this.tremolo.connect(this.chorus);
		this.chorus.connect(this.reverb);
		this.reverb.connect(this.panner);
		// this.delay.connect(this.panner)
		this.panner.connect(this.filter2)
		this.filter2.connect(this.phaser)
		this.phaser.connect(this.delay);
		this.delay.connect(this.overdrive);
		this.overdrive.connect(output)
		
		output.connect(output.gain);
		output.connect(masterGain);

		masterGain.gain.value = this.props.masterGainValue;

		masterGain.connect(this.state.context.destination);
		this.osc.start(0);
		this.lfo.start(0);
		this.state.isStarted = true;
	
	  }

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
  			
  		}
  	}
		
	
  	this.playSound(this.props.isSynthPlaying);
  	this.oscTypeChanged(this.props.oscType);
  	this.oscFrequencyChanged(this.props.oscFreq);

  	return (
			<div>
				<h5>frequency: {this.props.oscFreq}</h5>
			</div>
		)
  }
}

function mapStateToProps(state){
	
  return {
    isSynthPlaying: state.isSynthPlaying,
    oscFreq: state.oscFreq,
    masterGainValue: state.masterGainValue,
    oscType: state.oscType,
  }
}

export default connect(mapStateToProps)(SynthEngine);
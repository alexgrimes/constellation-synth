import store from './store'
import React from 'react';
import { connect } from 'react-redux';
import Tuna from 'tunajs';

class OSC2 extends React.Component {
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

  turnOnOSC2() {
    console.log(this.props, this.state, this.state.context.destination)
  	if (this.props.isOSC2On) {
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
		this.chorus = new tuna.Chorus(this.state.context);
		this.overdrive = new tuna.Overdrive(this.state.context);
		this.overdrive2 = new tuna.Overdrive(this.state.context);
		


		//
		var input = this.state.context.createGain();
		var output = this.state.context.createGain();
		var masterGain = this.state.context.createGain();
		
		//connecting

		// oscOutput.connect(this.osc)
	  this.osc.connect(output);
		this.lfo.connect(output);
		output.connect(this.osc.frequency)
		this.osc.connect(output);

		this.osc.connect(this.chorus)
		this.chorus.connect(this.filter)
		// input.connect(this.filter);
		this.filter.connect(this.filter2);
		// input.connect(this.filter2);
		this.filter2.connect(this.tremolo);
		
		this.tremolo.connect(this.bitcrusher);

		this.bitcrusher.connect(this.moogFilter);
	
		this.moogFilter.connect(this.moogFilter2);
	
		this.moogFilter2.connect(this.reverb);

		this.reverb.connect(this.cabinet);
	
		this.cabinet.connect(this.panner);

		this.panner.connect(this.phaser);

		this.phaser.connect(this.overdrive);

		this.overdrive.connect(output);
	
		
		output.connect(output.gain);
		output.connect(masterGain);

		masterGain.gain.value = this.props.masterGainValue;

        masterGain.connect(this.state.context.destination)
        this.osc.start(0);
        // this.lfo.start(0);
        this.state.isStarted = true;
      }
      console.log(this.state.context, this.osc.frequency)
    }
    else {
      if(typeof this.osc !== "undefined") {
        if (this.state.isStarted) {
          this.osc.stop(0);
					// this.lfo.stop(0);
          this.state.isStarted = false;
        }
      }
    }
  }

  OSC2TypeChanged(typeName) {
    console.log(this.state.isStarted)
	if (typeof this.osc !== "undefined") {
	  this.osc.type = typeName;
	}
  }

  OSC2FrequencyChanged(value) {
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
    console.log(this.props.osc2Freq, this.osc)
    this.turnOnOSC2(this.props.isOSC2On);
    this.OSC2TypeChanged(this.props.osc2Type);
    this.OSC2FrequencyChanged(this.props.osc2Freq);

    return (null)
  }
}

function mapStateToProps(state){
  return{
    isOSC2On: state.isOSC2On,
    osc2Freq: state.osc2Freq,
    osc2Type: state.osc2Type,

    masterGainValue: state.masterGainValue,
  }
}

export default connect(mapStateToProps)(OSC2);
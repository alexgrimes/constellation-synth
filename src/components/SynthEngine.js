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
		var oscGain = this.state.context.createGain();
		var lfoGain = this.state.context.createGain();
		var masterGain = this.state.context.createGain();
		this.wah = new tuna.WahWah(this.state.context)
		// this.filter.filterType = "bandpass"
		this.filter2.filterType = "bandpass"
	 //connecting
		console.log(this.filter)
		this.osc.connect(oscGain);
		this.lfo.connect(lfoGain);
		lfoGain.connect(oscGain.gain)
		oscGain.connect(this.filter)
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
		console.log(this.filter)
	if (typeof this.osc !== "undefined") {
	  this.osc.type = typeName;
	}
  }
	

	oscFrequencyChanged(value) {
	
	if (typeof this.osc !== "undefined") {
	  this.osc.frequency.setTargetAtTime(value, this.state.context.currentTime, 0.1);
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
		console.log(this.props.lfoFreq)
	  this.lfo.frequency.setTargetAtTime(value, this.state.context.currentTime, 6);
	}
  }

	///filter FUNC/////////////
  OSC1filterDepthChanged(value) {
		if (typeof this.filter !== "undefined") {
			this.filter.frequency.setTargetAtTime(value, this.state.context.currentTime, 12);
		} 
		console.log(this.filter)
  }

  // lfoFrequencyChanged(value) {
	// if (typeof this.osc !== "undefined") {
	//   this.lfo.frequency.setValueAtTime(value, this.state.context.currentTime);
	// }
  // }

	////TREMOLO FUNC/////
	OSC1tremoloRateChanged(value) {
		if (typeof this.tremolo !== "undefined") {
			this.tremolo.rate = value;
			console.log(this.tremolo.rate)
		}
		console.log(this.tremolo)
	}


/////////FILTER2 FUNC////////
	OSC1filter2DepthChanged(value) {
		if (typeof this.filter2 !== "undefined") {
			this.filter2.frequency.setTargetAtTime(value, this.state.context.currentTime, 30);
		} 
		console.log(this.filter2)
	}


	//////////CHORUS FUNC////////
	OSC1chorusDepthChanged(value) {
		if (typeof this.chorus !== "undefined") {
		this.chorus.depth = value;
		console.log(this.chorus.depth)
		} 
		console.log(this.chorus)
	}

	/////REVERB///////
	OSC1reverbLevelChanged(value) {
		if (typeof this.reverb !== "undefined") {
		this.reverb.level.setTargetAtTime(value, this.state.context.currentTime, 6)
		console.log(this.reverb.level.value)
		} 
	}

	/////PANNER////////
	OSC1pannerPanChanged(value) {
		if (typeof this.panner !== "undefined") {
		this.panner.pan.setTargetAtTime(value, this.state.context.currentTime, 6)
		console.log(this.panner.pan.value)
		} 
	}

	///////PHASER///////
	OSC1phaserFeedbackChanged(value) {
		if (typeof this.phaser !== "undefined") {
		this.phaser.feedback = value;
		console.log(this.phaser.feedback)
		} 
		console.log(this.phaser)
	}

	OSC1phaserRateChanged(value) {
		if (typeof this.phaser !== "undefined") {
		this.phaser.rate = value;
		console.log(this.phaser.rate)
		} 
		console.log(this.phaser)
	}

	OSC1phaserDepthChanged(value) {
		if (typeof this.phaser !== "undefined") {
		this.phaser.depth = value;
		console.log(this.phaser.depth)
		} 
		console.log(this.phaser)
	}

	///OVERDRIVE////

	OSC1overdriveDriveChanged(value) {
		if (typeof this.overdrive !== "undefined") {
		this.overdrive.drive.value = value;
		console.log(this.overdrive.drive.value)
		} 
		console.log(this.overdrive)
	}

	OSC1overdriveGainChanged(value) {
		if (typeof this.overdrive !== "undefined") {
			console.log(value)
		this.overdrive.gain = value;
		console.log(this.overdrive.gain)
		} 
		console.log(this.overdrive)
	}


  render() {
  	if(typeof this.osc !== "undefined") {
  		this.osc.onended = function() {
  			
  		}
  	}
		console.log(this.props.lfoFreq)
		console.log(this.props.lfoType)
		this.lfoFrequencyChanged(this.props.lfoFreq)
		this.lfoTypeChanged(this.props.lfoType)
  	this.playSound(this.props.isSynthPlaying);
  	this.oscTypeChanged(this.props.oscType);
  	this.oscFrequencyChanged(this.props.oscFreq);

		// this.OSC1chorusBypassChanged(this.props.osc1chorusBypass);
		this.OSC1chorusDepthChanged(this.props.osc1chorusDepth);

		// this.OSC1filterBypassChanged(this.props.osc1filterBypass);
		this.OSC1filterDepthChanged(this.props.osc1filterDepth);

		// this.OSC1filter2BypassChanged(this.props.osc1filter2Bypass);
		this.OSC1filter2DepthChanged(this.props.osc1filter2Depth);

		// this.OSC1tremoloBypassChanged(this.props.osc1tremoloBypass);
		this.OSC1tremoloRateChanged(this.props.osc1tremoloRate);

		// this.OSC1reverbBypassChanged(this.props.osc1reverbBypass);
		this.OSC1reverbLevelChanged(this.props.osc1reverbLevel)

		// this.OSC1pannerBypassChanged(this.props.osc1pannerBypass);
		this.OSC1pannerPanChanged(this.props.osc1pannerPan)

		// this.OSC1phaserBypassChanged(this.props.osc1phaserBypass);
		this.OSC1phaserDepthChanged(this.props.osc1phaserDepth)
		this.OSC1phaserRateChanged(this.props.osc1phaserRate)
		this.OSC1phaserFeedbackChanged(this.props.osc1phaserFeedback)

		// this.OSC1overdriveBypassChanged(this.props.osc1overdriveBypass);
		this.OSC1overdriveDriveChanged(this.props.osc1overdriveDrive)
		// this.OSC1overdriveGainChanged(this.props.osc1overdriveGain)
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
		lfoFreq: state.lfoFreq,
		lfoType: state.lfoType,
		osc1chorusBypass: state.osc1chorusBypass,
		osc1chorusDepth: state.osc1chorusDepth,
		osc1chorusRate: state.osc1chorusRate,

		osc1filterBypass: state.osc1filterBypass,
		osc1filterDepth: state.osc1filterDepth,

		osc1filter2Bypass: state.osc1filter2Bypass,
		osc1filter2Depth: state.osc1filter2Depth,

		osc1tremoloBypass: state.osc1tremoloBypass,
		osc1tremoloRate: state.osc1tremoloRate,

		osc1reverbBypass: state.osc1reverbBypass,
		osc1reverbLevel: state.osc1reverbLevel,

		osc1pannerBypass: state.osc1pannerBypass,
		osc1pannerPan: state.osc1pannerPan,

		osc1phaserBypass: state.osc1phaserBypass,
		osc1phaserRate: state.osc1phaserRate,
		osc1phaserDepth: state.osc1phaserDepth,
		osc1phaserFeedback: state.osc1phaserFeedback,

		osc1overdriveBypass: state.osc1overdriveBypass,
		osc1overdriveDrive: state.osc1overdriveDrive,
		osc1overdriveGain: state.osc1overdriveGain,
  }
}

export default connect(mapStateToProps)(SynthEngine);
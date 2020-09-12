import React from 'react';
import { connect } from 'react-redux';
import Tuna from 'tunajs';


class SynthEngine extends React.Component {

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

  playSound() {
	
  	if (this.props.isSynthPlaying) {
		if (!this.state.isStarted){

		// tuna context
		var tuna = new Tuna(this.state.context);

		// initializing effects
		this.osc = new OscillatorNode(this.state.context);
		this.chorus = new tuna.Chorus(this.state.context)
		this.lfo = new OscillatorNode(this.state.context);
		this.filter = new tuna.Filter(this.state.context);
		this.filter2 = new tuna.Filter(this.state.context);
		this.tremolo = new tuna.Tremolo(this.state.context);
		this.reverb = new tuna.Convolver(this.state.context);
		this.panner = new tuna.Panner(this.state.context);
		this.phaser = new tuna.Phaser(this.state.context);
		this.overdrive = new tuna.Overdrive(this.state.context);
		this.delay2 = new tuna.Delay(this.state.context);

		// gain variables
		var output = this.state.context.createGain();
		var oscGain = this.state.context.createGain();
		var lfoGain = this.state.context.createGain();
		var masterGain = this.state.context.createGain();

		//tweaking

		this.filter2.filterType = "bandpass";
		this.phaser.gain = 0.666;
		this.filter.gain = 3;
		this.delay2.feedback.value = 0.75;

	 	//connecting
		this.osc.connect(oscGain);
		this.lfo.connect(lfoGain);
		lfoGain.connect(oscGain.gain)
		oscGain.connect(this.filter)
		this.filter.connect(this.tremolo);
		this.tremolo.connect(this.chorus);
		this.chorus.connect(this.reverb);
		this.reverb.connect(this.panner);
		this.panner.connect(this.delay2)
		this.delay2.connect(this.phaser)
		this.phaser.connect(this.filter2)
		this.filter2.connect(this.overdrive)
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
	  this.osc.frequency.setTargetAtTime(value, this.state.context.currentTime, 0.25);
	}
  }

///LFO FUNC/////////////
  lfoTypeChanged(typeName) {
	if (typeof this.lfo !== "undefined") {
	  this.lfo.type = typeName;
	}
  }

  lfoFrequencyChanged(value) {
	if (typeof this.lfo !== "undefined") {
		console.log(this.props.lfoFreq, value, this.lfo, 'lfo freq change .. bypass')
	  this.lfo.frequency.value = value;
	}
	
  }

	// OSC1lfoBypassChanged() {
	// 	if (typeof this.lfo !== "undefined") {
	// 	if (this.props.isLFOOn == false){
	// 		console.log('LFO SHOULD TURN OFF HERE !!!!!!!!!!!!!!')
	// 		this.lfo.stop(0);
	// 	}
	// 	console.log(this.lfo.frequency.value, 'this lfo freq', 'bypass')
	// 	console.log(this.props.lfoFreq, 'props lfo freq')
	// 	console.log(this.props.isLFOOn, this.lfo, 'LFO BYPASS !!!!!!!!!!!!')
	// 	}	
	// }



	///filter FUNC/////////////
  OSC1filterDepthChanged(value) {
		if (typeof this.filter !== "undefined") {
			this.filter.frequency.setTargetAtTime(value, this.state.context.currentTime, 12);
		} 
		console.log(this.filter)
  }

	////TREMOLO FUNC/////
	OSC1tremoloRateChanged(value) {
		if (typeof this.tremolo !== "undefined") {
			this.tremolo.rate = value;
			console.log(this.tremolo.rate)
		}
		console.log(this.tremolo)
	}

	OSC1tremoloBypassChanged() {
		if (typeof this.tremolo !== "undefined") {
			if (this.props.osc1tremoloBypass) {
				this.tremolo.bypass = true;
			} else {
				this.tremolo.bypass = false;
			}
			console.log(this.props.osc1tremoloBypass)
			console.log(this.tremolo.bypass, 'tremolo BYPASS !!!!!!!!!!!')
		}
	}


	/////////FILTER2 FUNC////////
	OSC1filter2DepthChanged(value) {
		if (typeof this.filter2 !== "undefined") {
			this.filter2.frequency.setTargetAtTime(value, this.state.context.currentTime, 12);
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

	OSC1chorusBypassChanged() {
		if (typeof this.chorus !== "undefined") {
			if (this.props.osc1chorusBypass) {
				this.chorus.bypass = true;
			} else {
				this.chorus.bypass = false;
			}
			console.log(this.props.osc1chorusBypass)
			console.log(this.chorus.bypass, 'CHORUS BYPASS !!!!!!!!!!!')
		}
	}

	///////DELAY///////
	OSC1delay2WetLevelChanged(value) {
		if (typeof this.delay2 !== "undefined") {
		this.delay2.wetLevel.value = value;
		console.log(this.delay2.wetLevel.value)
		}
	}

	OSC1delay2TimeChanged(value) {
		if (typeof this.delay2 !== "undefined") {
		this.delay2.delayTime.value = value;
		console.log(this.delay2.delayTime.value, value, 'delay')
		console.log(this.props.osc1delay2Time, 'delay')
		}
	}

	/////REVERB///////
	OSC1reverbLevelChanged(value) {
		if (typeof this.reverb !== "undefined") {
			this.reverb.level.value = value;
			console.log(this.reverb.level.value)
		} 
	}

	/////PANNER////////
	OSC1pannerPanChanged(value) {
		if (typeof this.panner !== "undefined") {
			this.panner.pan.setTargetAtTime(value, this.state.context.currentTime, 6)
			console.log(this.panner.pan.value, 'pan')
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

	OSC1phaserBypassChanged() {
		if (typeof this.phaser !== "undefined") {
			if (this.props.osc1phaserBypass) {
				this.phaser.bypass = true;
			} else {
				this.phaser.bypass = false;
			}
			console.log(this.props.osc1phaserBypass)
			console.log(this.phaser.bypass, 'PHASER BYPASS!!!!!!!!!!!!!!', this.phaser)
		}
	}

	///OVERDRIVE////

	OSC1overdriveDriveChanged(value) {
		if (typeof this.overdrive !== "undefined") {
			this.overdrive.drive.value = value;
			console.log(this.overdrive.drive.value)
		} 
		console.log(this.overdrive)
	}


  render() {
  	if(typeof this.osc !== "undefined") {
  		this.osc.onended = function() {
  		}
  	}
		
	
		this.lfoFrequencyChanged(this.props.lfoFreq)
		this.lfoTypeChanged(this.props.lfoType)
		// this.OSC1lfoBypassChanged();

  	this.playSound(this.props.isSynthPlaying);
  	this.oscTypeChanged(this.props.oscType);
  	this.oscFrequencyChanged(this.props.oscFreq);

		this.OSC1chorusBypassChanged(this.props.osc1chorusBypass);
		this.OSC1chorusDepthChanged(this.props.osc1chorusDepth);

		this.OSC1filterDepthChanged(this.props.osc1filterDepth);

		this.OSC1filter2DepthChanged(this.props.osc1filter2Depth);

		this.OSC1tremoloBypassChanged(this.props.osc1tremoloBypass);
		this.OSC1tremoloRateChanged(this.props.osc1tremoloRate);

		this.OSC1delay2WetLevelChanged(this.props.osc1delay2WetLevel);
		this.OSC1delay2TimeChanged(this.props.osc1delay2Time)
		console.log(this.props.osc1delay2Time, 'delay')

		this.OSC1reverbLevelChanged(this.props.osc1reverbLevel)

		this.OSC1pannerPanChanged(this.props.osc1pannerPan)

		this.OSC1phaserBypassChanged(this.props.osc1phaserBypass);
		this.OSC1phaserDepthChanged(this.props.osc1phaserDepth)
		this.OSC1phaserRateChanged(this.props.osc1phaserRate)
		this.OSC1phaserFeedbackChanged(this.props.osc1phaserFeedback)

		this.OSC1overdriveDriveChanged(this.props.osc1overdriveDrive)

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
		isLFOOn: state.isLFOOn,
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

		osc1delay2WetLevel: state.osc1delay2WetLevel,
		osc1delay2Time: state.osc1delay2Time,
		osc1delay2Bypass: state.osc1delay2Bypass,

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
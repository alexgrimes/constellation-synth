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
		this.delay = new tuna.PingPongDelay(this.state.context);
		this.delay2 = new tuna.Delay(this.state.context)
		var output = this.state.context.createGain();
		var masterGain = this.state.context.createGain();
		var oscGain = this.state.context.createGain();
		var lfoGain = this.state.context.createGain();
		this.filter2.filterType = "bandpass";
		this.filter.gain = 3;
		this.delay2.feedback.value = 0.666;

		this.osc.connect(oscGain);
		this.lfo.connect(lfoGain);
		lfoGain.connect(oscGain.gain)
		oscGain.connect(this.filter)
		this.filter.connect(this.tremolo)
		this.tremolo.connect(this.chorus);
		this.chorus.connect(this.reverb);
		this.reverb.connect(this.panner);
		this.panner.connect(this.delay2);
		this.delay2.connect(this.filter2)
		this.filter2.connect(this.phaser);
		this.phaser.connect(this.overdrive)
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
	  this.osc.frequency.setTargetAtTime(value, this.state.context.currentTime, 0.1);
  }
  }

	lfo4TypeChanged(typeName) {
	if (typeof this.osc !== "undefined") {
	  this.lfo.type = typeName;
	}
  }

  lfo4FrequencyChanged(value) {
	if (typeof this.osc !== "undefined") {
	  this.lfo.frequency.setTargetAtTime(value, this.state.context.currentTime, 12);
	}
  }

	///filter FUNC/////////////
  OSC4filterDepthChanged(value) {
		if (typeof this.filter !== "undefined") {
			this.filter.frequency.setTargetAtTime(value, this.state.context.currentTime, 12);
		} 
		console.log(this.filter)
  }

		////TREMOLO FUNC/////
	OSC4tremoloRateChanged(value) {
		if (typeof this.tremolo !== "undefined") {
			this.tremolo.rate = value;
			console.log(this.tremolo.rate)
		}
		console.log(this.tremolo)
	}

	/////////FILTER2 FUNC////////
	OSC4filter2DepthChanged(value) {
		if (typeof this.filter2 !== "undefined") {
			this.filter2.frequency.setTargetAtTime(value, this.state.context.currentTime, 12);
		} 
		console.log(this.filter2)
	}

	//////////CHORUS FUNC////////
	OSC4chorusDepthChanged(value) {
		if (typeof this.chorus !== "undefined") {
		this.chorus.depth = value;
		console.log(this.chorus.depth)
		} 
		console.log(this.chorus)
	}


	///////DELAY///////
	OSC4delay2WetLevelChanged(value) {
		if (typeof this.delay2 !== "undefined") {
		this.delay2.wetLevel.value = value;
		console.log(this.delay2.wetLevel.value)
		}
	}

	OSC4delay2TimeChanged(value) {
		if (typeof this.delay2 !== "undefined") {
		this.delay2.time = value;
		console.log(this.delay2)
		console.log(this.props.osc4delay2Time)
		}
	}

	/////REVERB///////
	OSC4reverbLevelChanged(value) {
		if (typeof this.reverb !== "undefined") {
		this.reverb.level.setTargetAtTime(value, this.state.context.currentTime, 2)
		console.log(this.reverb.level.value)
		} 
	}

	/////PANNER////////
	OSC4pannerPanChanged(value) {
		if (typeof this.panner !== "undefined") {
		this.panner.pan.setTargetAtTime(value, this.state.context.currentTime, 3)
		console.log(this.panner.pan.value)
		} 
	}

	///////PHASER///////
	OSC4phaserFeedbackChanged(value) {
		if (typeof this.phaser !== "undefined") {
		this.phaser.feedback = value;
		console.log(this.phaser.feedback)
		} 
		console.log(this.phaser)
	}

	OSC4phaserRateChanged(value) {
		if (typeof this.phaser !== "undefined") {
		this.phaser.rate = value;
		console.log(this.phaser.rate)
		} 
		console.log(this.phaser)
	}

	OSC4phaserDepthChanged(value) {
		if (typeof this.phaser !== "undefined") {
		this.phaser.depth = value;
		console.log(this.phaser.depth)
		} 
		console.log(this.phaser)
	}

	///OVERDRIVE////

	OSC4overdriveDriveChanged(value) {
		if (typeof this.overdrive !== "undefined") {
		this.overdrive.drive.value = value;
		} 
		console.log(this.overdrive)
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

		// this.OSC4chorusBypassChanged(this.props.OSC4chorusBypass);
		this.OSC4chorusDepthChanged(this.props.osc4chorusDepth);

		// this.osc1filterBypassChanged(this.props.osc1filterBypass);
		this.OSC4filterDepthChanged(this.props.osc4filterDepth);

		// this.osc1filter2BypassChanged(this.props.osc1filter2Bypass);
		this.OSC4filter2DepthChanged(this.props.osc4filter2Depth);

		// this.osc1tremoloBypassChanged(this.props.osc1tremoloBypass);
		this.OSC4tremoloRateChanged(this.props.osc4tremoloRate);

		this.OSC4delay2WetLevelChanged(this.props.osc4delay2WetLevel);
		this.OSC4delay2TimeChanged(this.props.osc4delay2Time)

		// this.osc1reverbBypassChanged(this.props.osc1reverbBypass);
		this.OSC4reverbLevelChanged(this.props.osc4reverbLevel)

		// this.osc1pannerBypassChanged(this.props.osc1pannerBypass);
		this.OSC4pannerPanChanged(this.props.osc4pannerPan)

		// this.osc1phaserBypassChanged(this.props.osc1phaserBypass);
		this.OSC4phaserDepthChanged(this.props.osc4phaserDepth)
		this.OSC4phaserRateChanged(this.props.osc4phaserRate)
		this.OSC4phaserFeedbackChanged(this.props.osc4phaserFeedback)

		// this.OSC1overdriveBypassChanged(this.props.osc1overdriveBypass);
		this.OSC4overdriveDriveChanged(this.props.osc4overdriveDrive)
		// this.OSC1overdriveGainChanged(this.props.osc1overdriveGain)

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

		osc4chorusBypass: state.osc4chorusBypass,
		osc4chorusDepth: state.osc4chorusDepth,
		osc4chorusRate: state.osc4chorusRate,

		osc4filterBypass: state.osc4filterBypass,
		osc4filterDepth: state.osc4filterDepth,

		osc4filter2Bypass: state.osc4filter2Bypass,
		osc4filter2Depth: state.osc4filter2Depth,

		osc4tremoloBypass: state.osc4tremoloBypass,
		osc4tremoloRate: state.osc4tremoloRate,

		osc4delay2WetLevel: state.osc4delay2WetLevel,
		osc4delay2Time: state.osc4delay2Time,

		osc4reverbBypass: state.osc4reverbBypass,
		osc4reverbLevel: state.osc4reverbLevel,

		osc4pannerBypass: state.osc4pannerBypass,
		osc4pannerPan: state.osc4pannerPan,

		osc4phaserBypass: state.osc4phaserBypass,
		osc4phaserRate: state.osc4phaserRate,
		osc4phaserDepth: state.osc4phaserDepth,
		osc4phaserFeedback: state.osc4phaserFeedback,

		osc4overdriveBypass: state.osc4overdriveBypass,
		osc4overdriveDrive: state.osc4overdriveDrive,
		osc4overdriveGain: state.osc4overdriveGain,
  }
}

export default connect(mapStateToProps)(OSC4);
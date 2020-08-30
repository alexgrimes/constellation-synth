import React from 'react';
import { connect } from 'react-redux';
import Tuna from 'tunajs';

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
   
  	if (this.props.isOSC3On) {
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
		this.chorus = new tuna.Chorus(this.state.context);
		this.overdrive = new tuna.Overdrive(this.state.context);
		this.overdrive2 = new tuna.Overdrive(this.state.context);
		this.moogFilter = new tuna.MoogFilter(this.state.context);
		this.delay = new tuna.PingPongDelay(this.state.context)
		this.wah = new tuna.WahWah(this.state.context)
		this.filter2.filterType = "bandpass"
		//
		var output = this.state.context.createGain();
		var masterGain = this.state.context.createGain();
		var oscGain = this.state.context.createGain();
		var lfoGain = this.state.context.createGain();

		this.osc.connect(oscGain);
		this.lfo.connect(lfoGain);
		lfoGain.connect(oscGain.gain)
		oscGain.connect(this.filter)
		this.filter.connect(this.tremolo);
		this.tremolo.connect(this.reverb);
		this.reverb.connect(this.filter2)
		this.filter2.connect(this.chorus)
		this.chorus.connect(this.panner);
		this.panner.connect(this.wah);
		this.wah.connect(this.phaser);
		this.phaser.connect(this.delay)
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

  OSC3TypeChanged(typeName) {
   
	if (typeof this.osc !== "undefined") {
	  this.osc.type = typeName;
	}
  }

  OSC3FrequencyChanged(value) {
   
    if (typeof this.osc !== "undefined") {
	  this.osc.frequency.setValueAtTime(value, this.state.context.currentTime);
  }
  }

	lfo3TypeChanged(typeName) {
	if (typeof this.osc !== "undefined") {
	  this.lfo.type = typeName;
	}
  }

  lfo3FrequencyChanged(value) {
	if (typeof this.osc !== "undefined") {
	  this.lfo.frequency.setValueAtTime(value, this.state.context.currentTime);
	}
  }

	///filter FUNC/////////////
  OSC3filterDepthChanged(value) {
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
	OSC3tremoloRateChanged(value) {
		if (typeof this.tremolo !== "undefined") {
			this.tremolo.rate = value;
			console.log(this.tremolo.rate)
		}
		console.log(this.tremolo)
	}


/////////FILTER2 FUNC////////
	OSC3filter2DepthChanged(value) {
		if (typeof this.filter2 !== "undefined") {
			this.filter2.frequency.setTargetAtTime(value, this.state.context.currentTime, 30);
		} 
		console.log(this.filter2)
	}


	//////////CHORUS FUNC////////
	OSC3chorusDepthChanged(value) {
		if (typeof this.chorus !== "undefined") {
		this.chorus.depth = value;
		console.log(this.chorus.depth)
		} 
		console.log(this.chorus)
	}

	/////REVERB///////
	OSC3reverbLevelChanged(value) {
		if (typeof this.reverb !== "undefined") {
		this.reverb.level.setTargetAtTime(value, this.state.context.currentTime, 6)
		console.log(this.reverb.level.value)
		} 
	}

	/////PANNER////////
	OSC3pannerPanChanged(value) {
		if (typeof this.panner !== "undefined") {
		this.panner.pan.setTargetAtTime(value, this.state.context.currentTime, 6)
		console.log(this.panner.pan.value)
		} 
	}

	///////PHASER///////
	OSC3phaserFeedbackChanged(value) {
		if (typeof this.phaser !== "undefined") {
		this.phaser.feedback = value;
		console.log(this.phaser.feedback)
		} 
		console.log(this.phaser)
	}

	OSC3phaserRateChanged(value) {
		if (typeof this.phaser !== "undefined") {
		this.phaser.rate = value;
		console.log(this.phaser.rate)
		} 
		console.log(this.phaser)
	}

	OSC3phaserDepthChanged(value) {
		if (typeof this.phaser !== "undefined") {
		this.phaser.depth = value;
		console.log(this.phaser.depth)
		} 
		console.log(this.phaser)
	}

	///OVERDRIVE////

	OSC3overdriveDriveChanged(value) {
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
    console.log(this.props.lfo3Freq)
		console.log(this.props.lfo3Type)
		this.lfo3FrequencyChanged(this.props.lfo3Freq)
		this.lfo3TypeChanged(this.props.lfo3Type)
    this.turnOnOSC3(this.props.isOSC3On);
    this.OSC3TypeChanged(this.props.osc3Type);
    this.OSC3FrequencyChanged(this.props.osc3Freq);

			// this.OSC1chorusBypassChanged(this.props.osc1chorusBypass);
		this.OSC3chorusDepthChanged(this.props.osc3chorusDepth);

		// // this.OSC3filterBypassChanged(this.props.OSC3filterBypass);
		this.OSC3filterDepthChanged(this.props.osc3filterDepth);

		// // this.OSC3filter2BypassChanged(this.props.OSC3filter2Bypass);
		this.OSC3filter2DepthChanged(this.props.osc3filter2Depth);

		// // this.OSC3tremoloBypassChanged(this.props.OSC3tremoloBypass);
		this.OSC3tremoloRateChanged(this.props.osc3tremoloRate);

		// this.OSC3reverbBypassChanged(this.props.OSC3reverbBypass);
		this.OSC3reverbLevelChanged(this.props.osc3reverbLevel)

		// this.OSC3pannerBypassChanged(this.props.OSC3pannerBypass);
		this.OSC3pannerPanChanged(this.props.osc3pannerPan)

		// this.OSC3phaserBypassChanged(this.props.OSC3phaserBypass);
		this.OSC3phaserDepthChanged(this.props.osc3phaserDepth)
		this.OSC3phaserRateChanged(this.props.osc3phaserRate)
		this.OSC3phaserFeedbackChanged(this.props.osc3phaserFeedback)

		// this.OSC3overdriveBypassChanged(this.props.OSC3overdriveBypass);
		this.OSC3overdriveDriveChanged(this.props.osc3overdriveDrive)
		// this.OSC1overdriveGainChanged(this.props.osc1overdriveGain)

    return (
		<div> 
		 	<h5 className="text-left">frequency: {this.props.osc3Freq}</h5>
		 </div>)
  }
}

function mapStateToProps(state){
  return{
    isOSC3On: state.isOSC3On,
    osc3Freq: state.osc3Freq,
    osc3Type: state.osc3Type,
		lfo3Freq: state.lfo3Freq,
		lfo3Type: state.lfo3Type,
    masterGainValue: state.masterGainValue,

		osc3chorusDepth: state.osc3chorusDepth,

		osc3filterBypass: state.osc3filterBypass,
		osc3filterDepth: state.osc3filterDepth,

		osc3filter2Bypass: state.osc3filter2Bypass,
		osc3filter2Depth: state.osc3filter2Depth,

		osc3tremoloBypass: state.osc3tremoloBypass,
		osc3tremoloRate: state.osc3tremoloRate,

		osc3reverbBypass: state.osc3reverbBypass,
		osc3reverbLevel: state.osc3reverbLevel,

		osc3pannerBypass: state.osc3pannerBypass,
		osc3pannerPan: state.osc3pannerPan,

		osc3phaserBypass: state.osc3phaserBypass,
		osc3phaserRate: state.osc3phaserRate,
		osc3phaserDepth: state.osc3phaserDepth,
		osc3phaserFeedback: state.osc3phaserFeedback,

		osc3overdriveBypass: state.osc3overdriveBypass,
		osc3overdriveDrive: state.osc3overdriveDrive,
		osc3overdriveGain: state.osc3overdriveGain,
  }
}

export default connect(mapStateToProps)(OSC3);
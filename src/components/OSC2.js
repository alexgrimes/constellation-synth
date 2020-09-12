import React from 'react';
import { connect } from 'react-redux';
import Tuna from 'tunajs';

class OSC2 extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      context: {},
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
		this.filter3 = new tuna.Filter(this.state.context)
		this.tremolo = new tuna.Tremolo(this.state.context);
		this.reverb = new tuna.Convolver(this.state.context);
		this.cabinet = new tuna.Cabinet(this.state.context);
		this.panner = new tuna.Panner(this.state.context);
		this.phaser = new tuna.Phaser(this.state.context);
		this.overdrive = new tuna.Overdrive(this.state.context);
		this.delay = new tuna.PingPongDelay(this.state.context);
		this.delay2 = new tuna.Delay(this.state.context)
		this.wah = new tuna.WahWah
		this.filter2.filterType = "bandpass"
		this.filter.gain = 3;

		this.delay2.feedback.value = 0.75;


		//
		var oscGain = this.state.context.createGain();
		var lfoGain = this.state.context.createGain();
		var output = this.state.context.createGain();
		var masterGain = this.state.context.createGain();
		
		//connecting

		this.osc.connect(oscGain);
		this.lfo.connect(lfoGain);
		lfoGain.connect(oscGain.gain)
		oscGain.connect(this.filter)
		this.filter.connect(this.tremolo);
		this.tremolo.connect(this.chorus);
		this.chorus.connect(this.reverb);
		this.reverb.connect(this.panner);
		this.panner.connect(this.delay2);
		this.delay2.connect(this.phaser)
		this.phaser.connect(this.overdrive);
		// lfoGain.connect(this.phaser)
		// lfoGain.connect(this.overdrive.drive)
		// lfoGain.connect(this.filter.gain)
		// lfoGain.connect(this.tremolo)
		// lfoGain.connect(this.panner.pan)
		// lfoGain.connect(this.filter2.gain)
		// lfoGain.connect(this.chorus)
		// lfoGain.connect(this.delay.wetLevel)
		this.overdrive.connect(output)
		

		output.connect(output.gain);
		output.connect(masterGain);

		masterGain.gain.value = this.props.masterGainValue;

        masterGain.connect(this.state.context.destination)
        this.osc.start(0);
        this.lfo.start(0);
        this.state.isStarted = true;
				this.setState({context: this.state.context})
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

  OSC2TypeChanged(typeName) {
   
	if (typeof this.osc !== "undefined") {
	  this.osc.type = typeName;
	}
  }

  OSC2FrequencyChanged(value) {
   
    if (typeof this.osc !== "undefined") {
	  this.osc.frequency.setTargetAtTime(value, this.state.context.currentTime, 0.01);
  }
  }

	lfo2TypeChanged(typeName) {
	if (typeof this.osc !== "undefined") {
	  this.lfo.type = typeName;
	}
  }

  lfo2FrequencyChanged(value) {
	if (typeof this.osc !== "undefined") {
	  this.lfo.frequency.setTargetAtTime(value, this.state.context.currentTime, 12);
	}
  }

	///filter FUNC/////////////
  OSC2filterDepthChanged(value) {
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
	OSC2tremoloRateChanged(value) {
		if (typeof this.tremolo !== "undefined") {
			this.tremolo.rate = value;
			console.log(this.tremolo.rate)
		}
		console.log(this.tremolo)
	}


/////////FILTER2 FUNC////////
	OSC2filter2DepthChanged(value) {
		if (typeof this.filter2 !== "undefined") {
			this.filter2.frequency.setTargetAtTime(value, this.state.context.currentTime, 30);
		} 
		console.log(this.filter2)
	}


	//////////CHORUS FUNC////////
	OSC2chorusDepthChanged(value) {
		if (typeof this.chorus !== "undefined") {
		this.chorus.depth = value;
		console.log(this.chorus.depth)
		} 
		console.log(this.chorus)
	}

	////////Delay////////
	OSC2delay2WetLevelChanged(value) {
		if (typeof this.delay2 !== "undefined") {
		this.delay2.wetLevel.value = value;
		console.log(this.delay2.wetLevel.value)
		}
	}

	OSC2delay2TimeChanged(value) {
		if (typeof this.delay2 !== "undefined") {
		this.delay2.time = value;
		console.log(this.delay2.time)
		console.log(this.props.osc2delay2Time)
		}
	}

	/////REVERB///////
	OSC2reverbLevelChanged(value) {
		if (typeof this.reverb !== "undefined") {
		this.reverb.level.setTargetAtTime(value, this.state.context.currentTime, 6)
		console.log(this.reverb.level.value)
		} 
	}

	/////PANNER////////
	OSC2pannerPanChanged(value) {
		if (typeof this.panner !== "undefined") {
		this.panner.pan.setTargetAtTime(value, this.state.context.currentTime, 6)
		console.log(this.panner.pan.value)
		} 
	}

	///////PHASER///////
	OSC2phaserFeedbackChanged(value) {
		if (typeof this.phaser !== "undefined") {
		this.phaser.feedback = value;
		console.log(this.phaser.feedback)
		} 
		console.log(this.phaser)
	}

	OSC2phaserRateChanged(value) {
		if (typeof this.phaser !== "undefined") {
		this.phaser.rate = value;
		console.log(this.phaser.rate)
		} 
		console.log(this.phaser)
	}

	OSC2phaserDepthChanged(value) {
		if (typeof this.phaser !== "undefined") {
		this.phaser.depth = value;
		console.log(this.phaser.depth)
		} 
		console.log(this.phaser)
	}

// 	///OVERDRIVE////

	OSC2overdriveDriveChanged(value) {
		if (typeof this.overdrive !== "undefined") {
		this.overdrive.drive.value = value;
		console.log(this.overdrive.drive.value)
		} 
		console.log(this.overdrive)
	}

// 	OSC2overdriveGainChanged(value) {
// 		if (typeof this.overdrive !== "undefined") {
// 			console.log(value)
// 		this.overdrive.gain = value;
// 		console.log(this.overdrive.gain)
// 		} 
// 		console.log(this.overdrive)
// 	}


  

  render() {
    
  	if(typeof this.osc !== "undefined") {
  		this.osc.onended = function() {
  			
  		}
  	}
		console.log(this.props.lfo2Freq)
		console.log(this.props.lfo2Type)
		this.lfo2FrequencyChanged(this.props.lfo2Freq)
		this.lfo2TypeChanged(this.props.lfo2Type)
    this.turnOnOSC2(this.props.isOSC2On);
    this.OSC2TypeChanged(this.props.osc2Type);
    this.OSC2FrequencyChanged(this.props.osc2Freq);

			// this.OSC1chorusBypassChanged(this.props.osc1chorusBypass);
		this.OSC2chorusDepthChanged(this.props.osc2chorusDepth);

		// // this.OSC2filterBypassChanged(this.props.OSC2filterBypass);
		this.OSC2filterDepthChanged(this.props.osc2filterDepth);

		// // this.OSC2filter2BypassChanged(this.props.OSC2filter2Bypass);
		this.OSC2filter2DepthChanged(this.props.osc2filter2Depth);

		// // this.OSC2tremoloBypassChanged(this.props.OSC2tremoloBypass);
		this.OSC2tremoloRateChanged(this.props.osc2tremoloRate);

		this.OSC2delay2WetLevelChanged(this.props.osc2delay2WetLevel);
		this.OSC2delay2TimeChanged(this.props.osc2delay2Time)

		// // this.OSC2reverbBypassChanged(this.props.OSC2reverbBypass);
		this.OSC2reverbLevelChanged(this.props.osc2reverbLevel)

		// // this.OSC2pannerBypassChanged(this.props.OSC2pannerBypass);
		this.OSC2pannerPanChanged(this.props.osc2pannerPan)

		// // this.OSC2phaserBypassChanged(this.props.OSC2phaserBypass);
		this.OSC2phaserDepthChanged(this.props.osc2phaserDepth)
		this.OSC2phaserRateChanged(this.props.osc2phaserRate)
		this.OSC2phaserFeedbackChanged(this.props.osc2phaserFeedback)

		// // this.OSC2overdriveBypassChanged(this.props.OSC2overdriveBypass);
		this.OSC2overdriveDriveChanged(this.props.osc2overdriveDrive)
		// this.OSC1overdriveGainChanged(this.props.osc1overdriveGain)

    return (
		<div>
			<h5>frequency: {this.props.osc2Freq}</h5>
		</div>
		)
  }
}

function mapStateToProps(state){
		
  return{
    isOSC2On: state.isOSC2On,
    osc2Freq: state.osc2Freq,
    osc2Type: state.osc2Type,
		lfo2Freq: state.lfo2Freq,
		lfo2Type: state.lfo2Type,
		context: state.context,
    masterGainValue: state.masterGainValue,

		osc2chorusBypass: state.osc2chorusBypass,
		osc2chorusDepth: state.osc2chorusDepth,
		osc2chorusRate: state.osc2chorusRate,

		osc2filterBypass: state.osc2filterBypass,
		osc2filterDepth: state.osc2filterDepth,

		osc2filter2Bypass: state.osc2filter2Bypass,
		osc2filter2Depth: state.osc2filter2Depth,

		osc2tremoloBypass: state.osc2tremoloBypass,
		osc2tremoloRate: state.osc2tremoloRate,

		osc2delay2WetLevel: state.osc2delay2WetLevel,
		osc2delay2Time: state.osc2delay2Time,

		osc2wahBaseFrequency: state.osc2wahBaseFrequency,

		osc2reverbBypass: state.osc2reverbBypass,
		osc2reverbLevel: state.osc2reverbLevel,

		osc2pannerBypass: state.osc2pannerBypass,
		osc2pannerPan: state.osc2pannerPan,

		osc2phaserBypass: state.osc2phaserBypass,
		osc2phaserRate: state.osc2phaserRate,
		osc2phaserDepth: state.osc2phaserDepth,
		osc2phaserFeedback: state.osc2phaserFeedback,

		osc2overdriveBypass: state.osc2overdriveBypass,
		osc2overdriveDrive: state.osc2overdriveDrive,
		osc2overdriveGain: state.osc2overdriveGain,
  }
	
}

export default connect(mapStateToProps)(OSC2);
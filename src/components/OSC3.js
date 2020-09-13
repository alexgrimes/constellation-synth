import React from 'react';
import { connect } from 'react-redux';
import Tuna from 'tunajs';

class OSC3 extends React.Component {
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

  turnOnOSC3() {
   
  	if (this.props.isOSC3On) {
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

		// tweaking
		this.filter2.filterType = "bandpass";
		this.filter.gain = 3;
		this.delay2.feedback.value = 0.75;
		this.phaser.gain = 0.666;

		// gain vars
		var output = this.state.context.createGain();
		var masterGain = this.state.context.createGain();
		var oscGain = this.state.context.createGain();
		var lfoGain = this.state.context.createGain();


		// connecting 
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


	///OSC FUNC/////////

  OSC3TypeChanged(typeName) {
		if (typeof this.osc !== "undefined") {
			this.osc.type = typeName;
		}
  }

  OSC3FrequencyChanged(value) {
    if (typeof this.osc !== "undefined") {
	  	this.osc.frequency.setTargetAtTime(value, this.state.context.currentTime, 0.175);
  	}
  }

	///LFO FUNC/////////

	lfo3TypeChanged(typeName) {
		if (typeof this.lfo !== "undefined") {
			this.lfo.type = typeName;
			console.log(this.lfo.type, this.lfo.frequency, 'lfo')
		}
		
  }

  lfo3FrequencyChanged(value) {
		if (typeof this.lfo !== "undefined") {
			this.lfo.frequency.value = value;
		}
  }

	OSC3lfoBypassChanged() {
		if (typeof this.lfo !== "undefined") {
		if (this.props.isLFOOn == false){
			console.log('LFO SHOULD TURN OFF HERE !!!!!!!!!!!!!!')
			this.lfo.stop(0);
		}
		console.log(this.lfo.frequency.value, this.lfo.bypass, 'this lfo 3 freq', 'bypass')
		console.log(this.props.lfoFreq, 'props lfo 3 freq')
		console.log(this.props.isLFOOn, this.lfo, 'LFO 3 BYPASS !!!!!!!!!!!!')
		}	
	}

	///filter FUNC/////////////
  OSC3filterDepthChanged(value) {
		if (typeof this.filter !== "undefined") {
			this.filter.frequency.setTargetAtTime(value, this.state.context.currentTime, 12);
		} 
		console.log(this.filter)
  }

	////TREMOLO FUNC/////
	OSC3tremoloRateChanged(value) {
		if (typeof this.tremolo !== "undefined") {
			this.tremolo.rate = value;
			console.log(this.tremolo.rate)
		}
		console.log(this.tremolo)
	}

	OSC3tremoloBypassChanged() {
		if (typeof this.tremolo !== "undefined") {
			if (this.props.osc3tremoloBypass) {
				this.tremolo.bypass = true;
			} else {
				this.tremolo.bypass = false;
			}
			console.log(this.props.osc3tremoloBypass)
			console.log(this.tremolo.bypass, 'tremolo BYPASS !!!!!!!!!!!')
		}
	}


/////////FILTER2 FUNC////////
	OSC3filter2DepthChanged(value) {
		if (typeof this.filter2 !== "undefined") {
			this.filter2.frequency.setTargetAtTime(value, this.state.context.currentTime, 12);
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

	OSC3chorusBypassChanged() {
		if (typeof this.chorus !== "undefined") {
			if (this.props.osc3chorusBypass) {
				this.chorus.bypass = true;
			} else {
				this.chorus.bypass = false;
			}
			console.log(this.props.osc3chorusBypass)
			console.log(this.chorus.bypass, 'CHORUS BYPASS !!!!!!!!!!!')
		}
	}

		///////DELAY///////
	OSC3delay2WetLevelChanged(value) {
		if (typeof this.delay2 !== "undefined") {
		this.delay2.wetLevel.value = value;
		console.log(this.delay2.wetLevel.value)
		}
	}

	OSC3delay2TimeChanged(value) {
		if (typeof this.delay2 !== "undefined") {
		this.delay2.delayTime = value;
		console.log(this.delay2)
		console.log(this.props.osc3delay2Time)
		}
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

	OSC3phaserBypassChanged() {
		if (typeof this.phaser !== "undefined") {
			if (this.props.osc3phaserBypass) {
				this.phaser.bypass = true;
			} else {
				this.phaser.bypass = false;
			}
			console.log(this.props.osc3phaserBypass)
			console.log(this.phaser.bypass, 'PHASER BYPASS!!!!!!!!!!!!!!', this.phaser)
		}
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
		// this.OSC3lfoBypassChanged();

    this.turnOnOSC3(this.props.isOSC3On);
    this.OSC3TypeChanged(this.props.osc3Type);
    this.OSC3FrequencyChanged(this.props.osc3Freq);
		

		this.OSC3chorusBypassChanged(this.props.osc3chorusBypass);
		this.OSC3chorusDepthChanged(this.props.osc3chorusDepth);

		this.OSC3filterDepthChanged(this.props.osc3filterDepth);

		this.OSC3filter2DepthChanged(this.props.osc3filter2Depth);

		this.OSC3tremoloBypassChanged(this.props.OSC3tremoloBypass);
		this.OSC3tremoloRateChanged(this.props.osc3tremoloRate);

		this.OSC3delay2WetLevelChanged(this.props.osc3delay2WetLevel);
		this.OSC3delay2TimeChanged(this.props.osc3delay2Time)

		this.OSC3reverbLevelChanged(this.props.osc3reverbLevel)

		this.OSC3pannerPanChanged(this.props.osc3pannerPan)

		this.OSC3phaserBypassChanged(this.props.OSC3phaserBypass);
		this.OSC3phaserDepthChanged(this.props.osc3phaserDepth)
		this.OSC3phaserRateChanged(this.props.osc3phaserRate)
		this.OSC3phaserFeedbackChanged(this.props.osc3phaserFeedback)

		this.OSC3overdriveDriveChanged(this.props.osc3overdriveDrive)

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

		osc3delay2WetLevel: state.osc3delay2WetLevel,
		osc3delay2Time: state.osc3delay2Time,

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
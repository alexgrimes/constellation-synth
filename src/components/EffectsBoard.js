import React from 'react';
import { connect } from 'react-redux';

class EffectsBoard extends React.Component {
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

  turnOnFilter() {
    if (this.props.isFilterOn) {
      if (!this.state.isStarted) {
        console.log(this.state.context)
        this.filter = this.state.context.createBiquadFilter();
        this.distortion = this.state.context.createWaveShaper();
        this.gainNode = this.state.context.createGain();
        this.convolver = this.state.context.createConvolver;

        // this.filter.type = filter.LOWPASS;
        // this.filter.frequency.value;
        let convolverGain = this.state.context.createGain();
        let distortionGain = this.state.context.createGain();
        let filterGain = this.state.context.createGain();
        let masterGain = this.state.context.createGain();

        this.distortion.connect(distortionGain)
        distortionGain.connect(this.convolver)
        this.convolver.connect(convolverGain)
        convolverGain.connect(this.filter)
        this.filter.connect(filterGain);
        filterGain.connect(masterGain);
        masterGain.gain.value = this.props.masterGainValue;
        masterGain.connect(this.state.context.destination);
        this.filter.start(0);
        this.state.isStarted = true;
      }
    }
    else {
      if(typeof this.filter !== "undefined") {
        if (this.state.isStarted) {
          this.filter.stop(0);
          this.state.isStarted = false;
        }
      }
    }
  }
  filterTypeChanged(typeName) {
    console.log(this.state.isStarted)
	if (typeof this.filter !== "undefined") {
	  this.filter.type = typeName;
	}
  }
  filterFrequencyChanged(value) {
    console.log(value, this.state.context.currentTime, this.filter)
    if (typeof this.filter !== "undefined") {
	  this.filter.frequency.setValueAtTime(value, this.state.context.currentTime);
  }
  }

  filterGainChanged(value) {
    console.log(value, this.state.context.currentTime, this.filter)
    if (typeof this.filter !== "undefined") {
	  this.filter.gain.setValueAtTime(value, this.state.context.currentTime);
  }
  }

  render() {
    console.log(this.state.context)
  	if(typeof this.filter !== "undefined") {
  		this.filter.onended = function() {
  			console.log("hey")
  		}
  	}
    console.log(this.props.filter2Freq, this.filter)
    this.turnOnFilter(this.props.isFilterOn);
    this.filterTypeChanged(this.props.filterType);
    this.filterFrequencyChanged(this.props.filterFreq);

    return (null)
  }
}

function mapStateToProps(state){
  return{
    isfilterOn: state.isfilterOn,
    filterFreq: state.filterFreq,
    filterType: state.filterType,
    masterGainValue: state.masterGainValue,
  }
}

export default connect(mapStateToProps)(EffectsBoard);


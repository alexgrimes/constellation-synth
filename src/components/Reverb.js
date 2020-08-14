import store from './store';
import React from 'react';
import { connect } from 'react-redux';

class Reverb extends React.Component {
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

  playReverb() {
    console.log(this.props, this.state, this.state.context.destination)
    if (!this.state.isStarted)
  }
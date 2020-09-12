import React from 'react';
import store from './store';
import { playSynth } from './actions';
import { connect } from 'react-redux';
import '../index.css';

class PlaySynthButton extends React.Component {

  constructor(props) {
  	super(props);
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.playSynth(this.props.isSynthPlaying)
  }

  render() {
  	return(
  		<button class="customButton" onClick={this.handleClick}>
  		  {this.props.isSynthPlaying ? 'ON' : 'OFF'}
  		</button>
  		);
  }
}

function mapStateToProps(state){
  return {
    isSynthPlaying: state.isSynthPlaying
  }
}

function mapDispatchToProps(dispatch){
  return {
    playSynth: () => dispatch(playSynth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaySynthButton);

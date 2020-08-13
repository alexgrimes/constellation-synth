import React from 'react';
import '../index.css';
import store from './store'
import { turnOnLFO } from './actions'
import { connect } from 'react-redux'

class LFOonButton extends React.Component {
  
  constructor(props) {
  	super(props);
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.isLFOOn)
    this.props.turnOnLFO(this.props.isLFOOn)
    console.log(this.props.isLFOOn)
  }

  render() {
    console.log(this.props.isLFOOn)
  	return(
  		<button class="customButton" onClick={this.handleClick}>
  		  {this.props.isLFOOn ? 'ON' : 'OFF'}
  		</button>
  		);
  }
}

function mapStateToProps(state){
  return {
    isLFOOn: state.isLFOOn
  }
}

function mapDispatchToProps(dispatch){
  return {
    turnOnLFO: () => dispatch(turnOnLFO())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LFOonButton);
import React from 'react';
import '../index.css';
import store from './store'
import { turnOnOSC4 } from './actions'
import { connect } from 'react-redux'

class OSC4onButton extends React.Component {

  constructor(props) {
  	super(props);
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.turnOnOSC4(this.props.isOSC4On)
  }

  render() {
  	return(
  		<button class="customButton" onClick={this.handleClick}>
  		  {this.props.isOSC4On ? 'ON' : 'OFF'}
  		</button>
  		);
  }
}

function mapStateToProps(state){
  return {
    isOSC4On: state.isOSC4On
  }
}

function mapDispatchToProps(dispatch){
  return {
    turnOnOSC4: () => dispatch(turnOnOSC4())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OSC4onButton);
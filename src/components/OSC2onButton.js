import React from 'react';
import store from './store'
import { turnOnOSC2 } from './actions'
import { connect } from 'react-redux';
import '../index.css';

class OSC2onButton extends React.Component {

  constructor(props) {
  	super(props);
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
   
    this.props.turnOnOSC2(this.props.isOSC2On)
  }

  render() {
  	return(
  		<button class="customButton2" onClick={this.handleClick}>
  		  {this.props.isOSC2On ? 'ON' : 'OFF'}
  		</button>
  		);
  }
}

function mapStateToProps(state){
  return {
    isOSC2On: state.isOSC2On
  }
}

function mapDispatchToProps(dispatch){
  return {
    turnOnOSC2: () => dispatch(turnOnOSC2())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OSC2onButton);
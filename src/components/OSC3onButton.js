import React from 'react';
import store from './store';
import { turnOnOSC3 } from './actions';
import { connect } from 'react-redux';
import '../index.css';

class OSC3onButton extends React.Component {

  constructor(props) {
  	super(props);
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.turnOnOSC3(this.props.isOSC3On)
  }

  render() {
  	return(
  		<button class="customButton3" onClick={this.handleClick}>
  		  {this.props.isOSC3On ? 'ON' : 'OFF'}
  		</button>
  		);
  }
}

function mapStateToProps(state){
  return {
    isOSC3On: state.isOSC3On
  }
}

function mapDispatchToProps(dispatch){
  return {
    turnOnOSC3: () => dispatch(turnOnOSC3())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OSC3onButton);
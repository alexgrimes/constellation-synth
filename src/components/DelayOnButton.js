import React from 'react';
import '../index.css';
import store from './store'
import { turnOnDelay } from './actions'
import { connect } from 'react-redux'

class DelayOnButton extends React.Component {

  constructor(props) {
  	super(props);
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.turnOnDelay(this.props.isDelayOn)
  }

  render() {
  	return(
  		<button class="customButton" onClick={this.handleClick}>
  		  {this.props.isDelayOn ? 'On' : 'Off'}
  		</button>
  		);
  }
}

function mapStateToProps(state){
  return {
    isDelayOn: state.isDelayOn
  }
}

function mapDispatchToProps(dispatch){
  return {
    turnOnDelay: () => dispatch(turnOnDelay())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DelayOnButton);
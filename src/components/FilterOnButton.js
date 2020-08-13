import React from 'react';
import '../index.css';
import store from './store'
import { turnOnFilter } from './actions'
import { connect } from 'react-redux'

class FilterOnButton extends React.Component {
  
  constructor(props) {
  	super(props);
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.isFilterOn)
    this.props.turnOnFilter(this.props.isFilterOn)
    console.log(this.props.isFilterOn)
  }

  render() {
    console.log(this.props.isFilterOn)
  	return(
  		<button class="customButton" onClick={this.handleClick}>
  		  {this.props.isFilterOn ? 'ON' : 'OFF'}
  		</button>
  		);
  }
}

function mapStateToProps(state){
  return {
    isLFOOn: state.isFilterOn
  }
}

function mapDispatchToProps(dispatch){
  return {
    turnOnFilter: () => dispatch(turnOnFilter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterOnButton);
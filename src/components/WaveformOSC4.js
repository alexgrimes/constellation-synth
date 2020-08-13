import React from 'react';
import { connect } from 'react-redux';
import { changeOSC4Type } from './actions';
// import '../index.css';


class WaveformOSC4 extends React.Component {
  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.waveformClicked = this.waveformClicked.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  waveformClicked(type) {
    this.props.changeOSC4Type(type);
    this.closeMenu();
  }

  showMenu() {    
    this.setState({ dropdownOpen: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    this.setState({ dropdownOpen: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div>
        <button onClick ={() => this.showMenu()} class="dropdownButton">
          <img src={require('./images/'+this.props.osc4Type+'.png')} />
        </button>

        {
          this.state.dropdownOpen
            ? (
              <div className="menu" id="onTop">
                <div><button onClick={() => this.waveformClicked('sine')} class="dropdownButtonItem"><img src={require('./images/sine.png')} /></button>
                <button onClick={() => this.waveformClicked('square')} class="dropdownButtonItem"><img src={require('./images/square.png')} /></button></div>
                <div><button onClick={() => this.waveformClicked('triangle')} class="dropdownButtonItem"><img src={require('./images/triangle.png')} /></button>
                <button onClick={() => this.waveformClicked('sawtooth')} class="dropdownButtonItem"><img src={require('./images/sawtooth.png')} /></button></div>
              </div>
            )
            : (
              null
            )
        }

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    osc4Type: state.osc4Type
  }
}

function mapDispatchToProps(dispatch){
  return {
    changeOSC4Type: (type) => dispatch(changeOSC4Type(type))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WaveformOSC4);
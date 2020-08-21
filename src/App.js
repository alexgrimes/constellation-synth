import React, { useState } from 'react';
import PlaySynthButton from './components/PlaySynthButton';
import WaveformLFO from './components/WaveformOSC2';
import WaveformOSC from './components/WaveformOSC';
import XYPad from './components/XYPad';
import SynthEngine from './components/SynthEngine';
import './index.css';
import store from "./components/store";
import OSC2onButton from './components/OSC2onButton'
import OSC3onButton from './components/OSC3onButton'
import OSC4onButton from './components/OSC4onButton'
import OSC2 from './components/OSC2.js'
import OSC3 from './components/OSC3.js'
import OSC4 from './components/OSC4.js'
import { Container, Row, Col } from 'reactstrap';
import Modal from 'react-modal'
import "bootstrap/dist/css/bootstrap.css";
import WaveformOSC2 from './components/WaveformOSC2';
import WaveformOSC3 from './components/WaveformOSC3';
import WaveformOSC4 from './components/WaveformOSC4';
import Nav from './components/Nav';
import Footer from './components/Footer';


class App extends React.Component {
  render() {
    
    
    return (
      <div>
        <div className = "App">
        <Nav></Nav>
          <Container>          
            <Row>
             
              <Col></Col>
              <Col md={{ offset: 0.1 }}> 
                <div><h4 className="text-center">OSC 1</h4></div>
                <div className="row" ><PlaySynthButton /></div>
                <div className="row"><h4>waveform</h4></div>
                <div className="row"><WaveformOSC  /></div>
                <br></br>
                <SynthEngine/>
              </Col>
              <Col md={{ offset: 1 }} >
                <div><h4 className="text-center">OSC 2</h4></div>
                <div className="row"><OSC2onButton/></div>
                <div className="row"><h4 >waveform</h4></div>
                <div className="row"><WaveformOSC2 /></div>
                <br></br>
                <OSC2 />
              </Col>
              <Col md={{offset: 1}}>
                <div><h4 className="text-center">OSC 3</h4></div>
                <div className="row" ><OSC3onButton/></div>
                <div className="row"><h4 className="text-center">waveform</h4></div>
                <div className="row"><WaveformOSC3 /></div>
                <br/>
                <OSC3/>
              </Col>
              <Col md={{offset: 1}}> 
                <div><h4 className="text-center">OSC 4</h4></div>
                <div className="row" ><OSC4onButton /></div>
                <div className="row"><h4 className="text-center">waveform</h4></div>
                <div className="row"><WaveformOSC4 /></div>
                <br></br>
                <OSC4 />
              </Col>
             
             
              <Col></Col>
            </Row>
            <br></br>
            <Row>
            <Col></Col>
              <Col><XYPad 
                  className="canvas 1" 
                  color="black" 
                  width="900" height="600"
                  // osc2Freq={this.props.osc2Freq}
                  // osc1overdriveBypass={this.props.osc1overdriveBypass}
                  /></Col>
                  <Col></Col>
            </Row>
          </Container>
          
        
        </div>
        <Footer/>
      </div>
    )
  }
}


export default App;
import React from 'react';
import PlaySynthButton from './components/PlaySynthButton';
import WaveformLFO from './components/WaveformOSC2';
import WaveformOSC from './components/WaveformOSC';
import XYPad from './components/XYPad';
import EffectsBoard from './components/EffectsBoard'
import SynthEngine from './components/SynthEngine';
import './index.css';
import store from "./components/store";
import DelayOnButton from "./components/DelayOnButton"
import LFOonButton from './components/LFOonButton'
import OSC2onButton from './components/OSC2onButton'
import OSC3onButton from './components/OSC3onButton'
import OSC4onButton from './components/OSC4onButton'
import OSC2 from './components/OSC2.js'
import OSC3 from './components/OSC3.js'
import OSC4 from './components/OSC4.js'
import { Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import WaveformOSC2 from './components/WaveformOSC2';
import WaveformOSC3 from './components/WaveformOSC3';
import WaveformOSC4 from './components/WaveformOSC4';




class App extends React.Component {

  render() {

    return (
      < div className = "App">
      
        <Container>
          <Row>
            <Col></Col>
            <Col md={2}> 
              <div><h3 className="text-center">OSC 1</h3></div>
              <div className="row" ><PlaySynthButton /></div>
              <div className="row"><h2>Wave</h2></div>
              <div className="row"><WaveformOSC /></div>
              <br></br>
              <br></br>
              <div ></div>
              
            </Col>
            <Col md={{ offset: 1 }} >
              <div><h3 className="text-center">OSC 2</h3></div>
              <div className="row"><OSC2onButton/></div>
              <div className="row"><h2>Wave</h2></div>
              <div className="row"><WaveformOSC2 /></div>
              <br></br>
              <br></br>
              <div ></div>
              <OSC2 />
            </Col>
            <Col md={{offset: 1}}>
              <div><h3 className="text-center">OSC 3</h3></div>
              <div className="row" ><OSC3onButton/></div>
              <div className="row"><h2>Wave</h2></div>
              <div className="row"><WaveformOSC3 /></div>
              <br></br>
              <br></br>
              <div ></div>
              <OSC3 />
            </Col>
            <Col md={{offset: 1}}> 
              <div><h3 className="text-center">OSC 4</h3></div>
              <div className="button" ><OSC4onButton /></div>
              <div className="row"><h2>Wave</h2></div>
              <div className="row"><WaveformOSC4 /></div>
              <br></br>
              <br></br>
              <OSC4 />
            </Col>
            <Col></Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <div><h3 className="text">LFO</h3></div>
              <div className="row" ><LFOonButton/></div>
              <div className="row"><h2>Wave</h2></div>
              <div className="row"><WaveformOSC3 /></div>
              <br></br>
              <br></br>
              <div ></div>
              <EffectsBoard /></Col>
            <Col><XYPad 
                className="canvas 1" 
                color="black" 
                width="500" height="500"
                /></Col>
            <Col></Col>
          </Row>
        </Container>
        <SynthEngine/>
      </div>)

    }
}


export default App;
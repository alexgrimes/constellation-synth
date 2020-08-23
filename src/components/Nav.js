import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">constellation synth</NavbarBrand>
        <NavbarToggler  />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <button 
              type="button" 
              class="btn btn-dark" 
              data-toggle="modal" 
              data-target="#Modal"
              color="rgba(204, 7, 33, 0.897)"
              onClick={toggle}>
              About
            </button>
            <Modal 
              isOpen={isOpen}
              className="Modal"
              overlayClassName="Overlay"
              style={
                {
                  overlay: {
                    backgroundColor: 'rgba(128, 128, 128, 0.5)',

                  }
                }
              }>
              <h3>welcome to constellation synth</h3>
              <br/>
              <h6 > 
                * Constellation synth is a web-based synthesizer built with the Web Audio API. It is compatible with all browsers except Internet
                Explorer.
                <br/>
                <br/>
                <br/>
                * On each page load, four oscillators (sound sources) and twelve modulation nodes (sound transformers) aggregate into a unique sonic configuration.
                <br/>
                <br/>
                <br/>
                * Begin by turning on one or more of the the color coded oscillators. Click and drag oscillators to find 
                interesting sound constellations.
                <br/>
                <br/>
                <br/>
                * Every oscillator connects to every modulation node. As the oscillator moves, it activates it's 'neighboring' modulation nodes (sets the bypass to false) and automatically reconfigures 
                modulation parameters via proximity - in general, the closer to the oscillator is, the more intense the intervention.
                <br/>
                <br/>
                <br/>
                * Constellation synth can create a robust sonic palette from just a few clicks and drags. 
                The constant reconfiguring of frequency, modulation, and routing of effects results in 
                drastic changes in the sound with even small gestures. 
                <br/>
                <br/>
                <br/>
                * Play with proximity and waveform type. 
                  Probe, reconfigure, look for happy accidents, and refresh for a new environment.
                <br/>
                <br/>
                <br/>
                * It is best to listen with headphones or speakers - listening through laptop speakers will result in a suboptimal experience.
                <br/>
                <br/>
                <br/>
              </h6>
              <button 
                type="button" 
                className="btn btn-danger" 
                data-toggle="modal" 
                data-target="#Modal"
                onClick={toggle}>Make some noise!</button>
              </Modal>
              </NavItem>
    
          </Nav>
        </Collapse>
        <hr/>
      </Navbar>
      
    </div>
  );
}

export default Example;
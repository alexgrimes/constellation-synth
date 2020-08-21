// import React, { useState, useEffect } from 'react';

// const Modal = (props) => {
//   const {
//     buttonLabel,
//     className
//   } = props;

//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);


//   return (
//    <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
//     <div class="modal-dialog" role="document">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title" id="ModalLabel">Welcome to Constellation Synth...</h5>
//           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div class="modal-body">
//         <p>
//             Constellation Synth is a web-based synthesizer compatible with all browsers except Internet 
//             Explorer. On each page load, four oscillators and twelve modulation nodes form a new constellation.
//             The color coded oscillators are sound sources and the smaller modulation nodes transform
//             the oscillator's output.</p>
//             <br/>
//             <br/>
//             Start sound by turning on the color coded oscillators. Click and drag the oscillators to find 
//             interesting sound constellations. Oscillators activate their neighboring modulation nodes set 
//             their parameters by proximity. Generally the closer the oscillator is the more intense the intervention.
//             <br/>
//             <br/>
//             <p>
//             Constellation Synth can create a robust sonic palette from just a few clicks and some dragging. 
//             The constant reconfiguring of frequency, modulation, and routing of effects often results in 
//             drastic timbral changes with even small gestures. Play with proximity, waveform type, 
//             reconfigure, look for happy accidents, or reload and find yourself in a new environment. Record 
//             and download your sounds and use them however you like. 
//             </p>
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>onClick={handleShow}
//           <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
    
//   );
// }
// export default Modal;




<section>
            <Container>
              <Row>
                <Col>
                <h5>OSC 1 freq: {this.props.oscFreq}</h5>
                    <Table>
                        <thead>
                          <tr>
                            <th>effect</th>
                            <th>routing</th>
                            <th>level</th>
                            <th>rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>filter</td>
                            <td>{
                              this.props.osc1filterBypass ? "OFF" : "ON"
                            }</td>
                            <td>{((this.props.osc1filterDepth).toFixed(2))}</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>tremolo</td>
                            <td>{
                              this.props.osc1tremoloBypass ? "OFF" : "ON"
                            }</td>
                            <td></td>
                            <td>{this.props.osc1tremoloRate}</td>
                          </tr>
                          <tr>
                            <td>reverb</td>
                            <td>{
                              this.props.osc1chorusBypass ? "OFF" : "ON"
                            }</td>
                            <td>{((this.props.osc1reverbLevel).toFixed(2))}</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>panner</td>
                            <td>{
                              this.props.osc1pannerBypass ? "OFF" : "ON"
                            }</td>
                            <td>{((this.props.osc1pannerPan).toFixed(2))}</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>phaser</td>
                            <td>{
                              this.props.osc1phaserBypass ? "OFF" : "ON"
                            }</td>
                            <td>{((this.props.osc1phaserDepth).toFixed(2))}</td>
                            <td>{this.props.osc1phaserRate}</td>
                          </tr>
                          
                        </tbody>
              
                        {/* chorus bypass: {this.props.osc1chorusBypass}
                      
                        filter bypass: {this.props.osc1filterBypass}
                        tremolo bypass: {this.props.osc1tremoloBypass}
                        reverb bypass: {this.props.osc1reverbBypass}
                  
                        panner bypass: {this.props.osc1pannerBypass}

                        phaser bypass: {this.props.osc1phaserBypass}
                        overdrive bypass: {this.props.osc1overdriveBypass}
                        */}
                
                    </Table>
              </Col>
              <Col>
                <h5>OSC 2 freq: {this.props.osc2Freq}</h5>
                <Table>
                    <thead>
                      <tr>
                        <th>effect</th>
                        <th>routing</th>
                        <th>level</th>
                        <th>rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>filter</td>
                        <td>{
                          this.props.osc2filterBypass ? "OFF" : "ON"
                        }</td>
                        <td>{((this.props.osc2filterDepth).toFixed(2))}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>tremolo</td>
                        <td>{
                          this.props.osc2tremoloBypass ? "OFF" : "ON"
                        }</td>
                        <td></td>
                        <td>{this.props.osc2tremoloRate}</td>
                      </tr>
                      <tr>
                        <td>reverb</td>
                        <td>{
                          this.props.osc2chorusBypass ? "OFF" : "ON"
                        }</td>
                        <td>{((this.props.osc2reverbLevel).toFixed(2))}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>panner</td>
                        <td>{
                          this.props.osc2pannerBypass ? "OFF" : "ON"
                        }</td>
                        <td>{((this.props.osc2pannerPan).toFixed(2))}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>phaser</td>
                        <td>{
                          this.props.osc2phaserBypass ? "OFF" : "ON"
                        }</td>
                        <td>{((this.props.osc2phaserDepth).toFixed(2))}</td>
                        <td>{this.props.osc2phaserRate}</td>
                      </tr>
                      
                    </tbody>
          
                    {/* chorus bypass: {this.props.osc1chorusBypass}
                  
                    filter bypass: {this.props.osc1filterBypass}
                    tremolo bypass: {this.props.osc1tremoloBypass}
                    reverb bypass: {this.props.osc1reverbBypass}
              
                    panner bypass: {this.props.osc1pannerBypass}

                    phaser bypass: {this.props.osc1phaserBypass}
                    overdrive bypass: {this.props.osc1overdriveBypass}
                    */}
            
                </Table>
              </Col>
              <Col>
                <h5>OSC 3 freq: {this.props.osc3Freq}</h5>
                <Table>
                    <thead>
                      <tr>
                        <th>effect</th>
                        <th>routing</th>
                        <th>level</th>
                        <th>rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>filter</td>
                        <td>{
                          this.props.osc3filterBypass ? "OFF" : "ON"
                        }</td>
                        <td>{((this.props.osc3filterDepth).toFixed(2))}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>tremolo</td>
                        <td>{
                          this.props.osc3tremoloBypass ? "OFF" : "ON"
                        }</td>
                        <td></td>
                        <td>{this.props.osc3tremoloRate}</td>
                      </tr>
                      <tr>
                        <td>reverb</td>
                        <td>{
                          this.props.osc3chorusBypass ? "OFF" : "ON"
                        }</td>
                        <td>{((this.props.osc3reverbLevel).toFixed(2))}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>panner</td>
                        <td>{
                          this.props.osc3pannerBypass ? "OFF" : "ON"
                        }</td>
                        <td>{((this.props.osc3pannerPan).toFixed(2))}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>phaser</td>
                        <td>{
                          this.props.osc3phaserBypass ? "OFF" : "ON"
                        }</td>
                        <td>{((this.props.osc3phaserDepth).toFixed(2))}</td>
                        <td>{this.props.osc3phaserRate}</td>
                      </tr>
                      
                    </tbody>
          
                    {/* chorus bypass: {this.props.osc1chorusBypass}
                  
                    filter bypass: {this.props.osc1filterBypass}
                    tremolo bypass: {this.props.osc1tremoloBypass}
                    reverb bypass: {this.props.osc1reverbBypass}
              
                    panner bypass: {this.props.osc1pannerBypass}

                    phaser bypass: {this.props.osc1phaserBypass}
                    overdrive bypass: {this.props.osc1overdriveBypass}
                    */}
            
                </Table>
              </Col>
              <Col>
                <h5>OSC 4 freq: {this.props.osc4Freq}</h5>
                <Table>
                    {/* <thead>
                      <tr>
                        <th>effect</th>
                        <th>routing</th>
                        <th>level</th>
                        <th>rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Chorus</td>
                        <td>{
                          this.props.osc4chorusBypass ? "OFF" : "ON"
                        }</td>
                        <td>{((this.props.osc4chorusDepth).toFixed(2))} </td>
                        <td>{this.props.osc4chorusRate}</td>
                      </tr>
                      <tr>
                        <td>filter</td>
                        <td>{
                          this.props.osc4filterBypass ? "OFF" : "ON"
                        }</td>
                        <td>{((this.props.osc4filterDepth).toFixed(2))}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>tremolo</td>
                        <td>{
                          this.props.osc4tremoloBypass ? "OFF" : "ON"
                        }</td>
                        <td></td>
                        <td>{this.props.osc4tremoloRate}</td>
                      </tr>
                      <tr>
                        <td>reverb</td>
                        <td>{
                          this.props.osc4chorusBypass ? "OFF" : "ON"
                        }</td>
                        <td>{((this.props.osc4reverbLevel).toFixed(2))}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>panner</td>
                        <td>{
                          this.props.osc4pannerBypass ? "OFF" : "ON"
                        }</td>
                        <td>{((this.props.osc4pannerPan).toFixed(2))}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>phaser</td>
                        <td>{
                          this.props.osc4phaserBypass ? "OFF" : "ON"
                        }</td>
                        <td>{((this.props.osc4phaserDepth).toFixed(2))}</td>
                        <td>{this.props.osc4phaserRate}</td>
                      </tr>
                      <tr>
                        <td>overdrive</td>
                        <td>{
                          this.props.osc4overdriveBypass ? "OFF" : "ON"
                        }</td>
                        <td>{this.props.osc4overdriveGain}</td>
                        <td>{((this.props.osc4overdriveDrive).toFixed(2))}</td>
                      </tr>
                      
                    </tbody> */}
          
                    {/* chorus bypass: {this.props.osc1chorusBypass}
                  
                    filter bypass: {this.props.osc1filterBypass}
                    tremolo bypass: {this.props.osc1tremoloBypass}
                    reverb bypass: {this.props.osc1reverbBypass}
              
                    panner bypass: {this.props.osc1pannerBypass}

                    phaser bypass: {this.props.osc1phaserBypass}
                    overdrive bypass: {this.props.osc1overdriveBypass}
                    */}
            
                </Table>
              </Col>
            </Row>


            </Container>
              
              
             </section>
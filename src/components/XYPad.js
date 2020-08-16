import React from 'react';
import { connect } from 'react-redux';
import '../index.css';
import * as d3 from 'd3-delaunay';
import { 
  changeOSCFreq, 

  turnOnLFO,
  changeLFOType,
  changeLFOFreq,

  toggleOSC1chorusBypass,
  changeOSC1chorusDepth,
  changeOSC1chorusRate,

  toggleOSC1filterBypass,
  changeOSC1filterDepth,
  changeOSC1filterRate,

  toggleOSC1filter2Bypass,
  changeOSC1filter2Depth,
  changeOSC1filter2Rate,

  toggleOSC1tremoloBypass,
  changeOSC1tremoloIntensity,
  changeOSC1tremoloRate,

  toggleOSC1bitcrusherBypass,
  changeOSC1bitcrusherBits,
  changeOSC1bitcrusherBufferSize,

  toggleOSC1moogFilterBypass,
  changeOSC1moogFilterCutoff,
  changeOSC1moogFilterBufferSize,
  changeOSC1moogFilterResonance,

  toggleOSC1moogFilter2Bypass,
  changeOSC1moogFilter2Cutoff,
  changeOSC1moogFilter2BufferSize,
  changeOSC1moogFilter2Resonance,

  toggleOSC1reverbBypass,
  changeOSC1reverbLevel,

  toggleOSC1pannerBypass,
  changeOSC1pannerPan,

  toggleOSC1phaserBypass,
  changeOSC1phaserRate,
  changeOSC1phaserDepth,
  changeOSC1phaserFeedback,

  toggleOSC1overdriveBypass,
  changeOSC1overdriveDrive,
  changeOSC1overdriveGain,

 ///OSC2/////////////////// 
  changeOSC2Freq, 
  
  turnOnLFO2,
  changeLFO2Type,
  changeLFO2Freq,

  toggleOSC2chorusBypass,
  changeOSC2chorusDepth,
  changeOSC2chorusRate,

  toggleOSC2filterBypass,
  changeOSC2filterDepth,
  changeOSC2filterRate,

  toggleOSC2filter2Bypass,
  changeOSC2filter2Depth,
  changeOSC2filter2Rate,

  toggleOSC2tremoloBypass,
  changeOSC2tremoloIntensity,
  changeOSC2tremoloRate,

  toggleOSC2bitcrusherBypass,
  changeOSC2bitcrusherBits,
  changeOSC2bitcrusherBufferSize,

  toggleOSC2moogFilterBypass,
  changeOSC2moogFilterCutoff,
  changeOSC2moogFilterBufferSize,
  changeOSC2moogFilterResonance,

  toggleOSC2moogFilter2Bypass,
  changeOSC2moogFilter2Cutoff,
  changeOSC2moogFilter2BufferSize,
  changeOSC2moogFilter2Resonance,

  toggleOSC2reverbBypass,
  changeOSC2reverbLevel,

  toggleOSC2pannerBypass,
  changeOSC2pannerPan,

  toggleOSC2phaserBypass,
  changeOSC2phaserRate,
  changeOSC2phaserDepth,
  changeOSC2phaserFeedback,

  toggleOSC2overdriveBypass,
  changeOSC2overdriveDrive,
  changeOSC2overdriveGain,


   ///OSC3/////////////////// 
  changeOSC3Freq, 
  
  turnOnLFO3,
  changeLFO3Type,
  changeLFO3Freq,

  toggleOSC3chorusBypass,
  changeOSC3chorusDepth,
  changeOSC3chorusRate,

  toggleOSC3filterBypass,
  changeOSC3filterDepth,
  changeOSC3filterRate,

  toggleOSC3filter2Bypass,
  changeOSC3filter2Depth,
  changeOSC3filter2Rate,

  toggleOSC3tremoloBypass,
  changeOSC3tremoloIntensity,
  changeOSC3tremoloRate,

  toggleOSC3bitcrusherBypass,
  changeOSC3bitcrusherBits,
  changeOSC3bitcrusherBufferSize,

  toggleOSC3moogFilterBypass,
  changeOSC3moogFilterCutoff,
  changeOSC3moogFilterBufferSize,
  changeOSC3moogFilterResonance,

  toggleOSC3moogFilter2Bypass,
  changeOSC3moogFilter2Cutoff,
  changeOSC3moogFilter2BufferSize,
  changeOSC3moogFilter2Resonance,

  toggleOSC3reverbBypass,
  changeOSC3reverbLevel,

  toggleOSC3pannerBypass,
  changeOSC3pannerPan,

  toggleOSC3phaserBypass,
  changeOSC3phaserRate,
  changeOSC3phaserDepth,
  changeOSC3phaserFeedback,

  toggleOSC3overdriveBypass,
  changeOSC3overdriveDrive,
  changeOSC3overdriveGain,


   ///OSC4/////////////////// 
  changeOSC4Freq, 
  
  turnOnLFO4,
  changeLFO4Type,
  changeLFO4Freq,

  toggleOSC4chorusBypass,
  changeOSC4chorusDepth,
  changeOSC4chorusRate,

  toggleOSC4filterBypass,
  changeOSC4filterDepth,
  changeOSC4filterRate,

  toggleOSC4filter2Bypass,
  changeOSC4filter2Depth,
  changeOSC4filter2Rate,

  toggleOSC4tremoloBypass,
  changeOSC4tremoloIntensity,
  changeOSC4tremoloRate,

  toggleOSC4bitcrusherBypass,
  changeOSC4bitcrusherBits,
  changeOSC4bitcrusherBufferSize,

  toggleOSC4moogFilterBypass,
  changeOSC4moogFilterCutoff,
  changeOSC4moogFilterBufferSize,
  changeOSC4moogFilterResonance,

  toggleOSC4moogFilter2Bypass,
  changeOSC4moogFilter2Cutoff,
  changeOSC4moogFilter2BufferSize,
  changeOSC4moogFilter2Resonance,

  toggleOSC4reverbBypass,
  changeOSC4reverbLevel,

  toggleOSC4pannerBypass,
  changeOSC4pannerPan,

  toggleOSC4phaserBypass,
  changeOSC4phaserRate,
  changeOSC4phaserDepth,
  changeOSC4phaserFeedback,

  toggleOSC4overdriveBypass,
  changeOSC4overdriveDrive,
  changeOSC4overdriveGain,

  
} from './actions';


class XYPad extends React.Component {
  constructor(props) {
  	super(props);
    console.log(this.props.width)

    let circlePos1 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let circlePos2 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let circlePos3 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let circlePos4 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos1 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos2 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos3 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos4 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos5 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos6 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos7 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos8 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos9 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos10 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos11 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos12 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos13 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos14 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos15 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];
    let squarePos16 = [Math.floor(Math.random() * (this.props.width) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height) - 1 + 1) + 10];

    let square1distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos1[0]) * (circlePos1[0] - squarePos1[0])) + ((circlePos1[1] - squarePos1[1]) * (circlePos1[1] - squarePos1[1])))
    let square1distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos1[0]) * (circlePos2[0] - squarePos1[0])) + ((circlePos2[1] - squarePos1[1]) * (circlePos2[1] - squarePos1[1])))
    let square1distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos1[0]) * (circlePos3[0] - squarePos1[0])) + ((circlePos3[1] - squarePos1[1]) * (circlePos3[1] - squarePos1[1])))
    let square1distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos1[0]) * (circlePos4[0] - squarePos1[0])) + ((circlePos4[1] - squarePos1[1]) * (circlePos4[1] - squarePos1[1])))

    let square2distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos2[0]) * (circlePos1[0] - squarePos2[0])) + ((circlePos1[1] - squarePos2[1]) * (circlePos1[1] - squarePos2[1])))
    let square2distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos2[0]) * (circlePos2[0] - squarePos2[0])) + ((circlePos2[1] - squarePos2[1]) * (circlePos2[1] - squarePos2[1])))
    let square2distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos2[0]) * (circlePos3[0] - squarePos2[0])) + ((circlePos3[1] - squarePos2[1]) * (circlePos3[1] - squarePos2[1])))
    let square2distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos2[0]) * (circlePos4[0] - squarePos2[0])) + ((circlePos4[1] - squarePos2[1]) * (circlePos4[1] - squarePos2[1])))

    let square3distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos3[0]) * (circlePos1[0] - squarePos3[0])) + ((circlePos1[1] - squarePos3[1]) * (circlePos1[1] - squarePos3[1])))
    let square3distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos3[0]) * (circlePos2[0] - squarePos3[0])) + ((circlePos2[1] - squarePos3[1]) * (circlePos2[1] - squarePos3[1])))
    let square3distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos3[0]) * (circlePos3[0] - squarePos3[0])) + ((circlePos3[1] - squarePos3[1]) * (circlePos3[1] - squarePos3[1])))
    let square3distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos3[0]) * (circlePos4[0] - squarePos3[0])) + ((circlePos4[1] - squarePos3[1]) * (circlePos4[1] - squarePos3[1])))

    let square4distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos4[0]) * (circlePos1[0] - squarePos4[0])) + ((circlePos1[1] - squarePos4[1]) * (circlePos1[1] - squarePos4[1])))
    let square4distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos4[0]) * (circlePos2[0] - squarePos4[0])) + ((circlePos2[1] - squarePos4[1]) * (circlePos2[1] - squarePos4[1])))
    let square4distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos4[0]) * (circlePos3[0] - squarePos4[0])) + ((circlePos3[1] - squarePos4[1]) * (circlePos3[1] - squarePos4[1])))
    let square4distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos4[0]) * (circlePos4[0] - squarePos4[0])) + ((circlePos4[1] - squarePos4[1]) * (circlePos4[1] - squarePos4[1])))

    let square5distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos5[0]) * (circlePos1[0] - squarePos5[0])) + ((circlePos1[1] - squarePos5[1]) * (circlePos1[1] - squarePos5[1])))
    let square5distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos5[0]) * (circlePos2[0] - squarePos5[0])) + ((circlePos2[1] - squarePos5[1]) * (circlePos2[1] - squarePos5[1])))
    let square5distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos5[0]) * (circlePos3[0] - squarePos5[0])) + ((circlePos3[1] - squarePos5[1]) * (circlePos3[1] - squarePos5[1])))
    let square5distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos5[0]) * (circlePos4[0] - squarePos5[0])) + ((circlePos4[1] - squarePos5[1]) * (circlePos4[1] - squarePos5[1])))

    let square6distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos6[0]) * (circlePos1[0] - squarePos6[0])) + ((circlePos1[1] - squarePos6[1]) * (circlePos1[1] - squarePos6[1])))
    let square6distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos6[0]) * (circlePos2[0] - squarePos6[0])) + ((circlePos2[1] - squarePos6[1]) * (circlePos2[1] - squarePos6[1])))
    let square6distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos6[0]) * (circlePos3[0] - squarePos6[0])) + ((circlePos3[1] - squarePos6[1]) * (circlePos3[1] - squarePos6[1])))
    let square6distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos6[0]) * (circlePos4[0] - squarePos6[0])) + ((circlePos4[1] - squarePos6[1]) * (circlePos4[1] - squarePos6[1])))

    let square7distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos7[0]) * (circlePos1[0] - squarePos7[0])) + ((circlePos1[1] - squarePos7[1]) * (circlePos1[1] - squarePos7[1])))
    let square7distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos7[0]) * (circlePos2[0] - squarePos7[0])) + ((circlePos2[1] - squarePos7[1]) * (circlePos2[1] - squarePos7[1])))
    let square7distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos7[0]) * (circlePos3[0] - squarePos7[0])) + ((circlePos3[1] - squarePos7[1]) * (circlePos3[1] - squarePos7[1])))
    let square7distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos7[0]) * (circlePos4[0] - squarePos7[0])) + ((circlePos4[1] - squarePos7[1]) * (circlePos4[1] - squarePos7[1])))

    let square8distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos8[0]) * (circlePos1[0] - squarePos8[0])) + ((circlePos1[1] - squarePos8[1]) * (circlePos1[1] - squarePos8[1])))
    let square8distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos8[0]) * (circlePos2[0] - squarePos8[0])) + ((circlePos2[1] - squarePos8[1]) * (circlePos2[1] - squarePos8[1])))
    let square8distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos8[0]) * (circlePos3[0] - squarePos8[0])) + ((circlePos3[1] - squarePos8[1]) * (circlePos3[1] - squarePos8[1])))
    let square8distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos8[0]) * (circlePos4[0] - squarePos8[0])) + ((circlePos4[1] - squarePos8[1]) * (circlePos4[1] - squarePos8[1])))

    let square9distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos9[0]) * (circlePos1[0] - squarePos9[0])) + ((circlePos1[1] - squarePos9[1]) * (circlePos1[1] - squarePos9[1])))
    let square9distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos9[0]) * (circlePos2[0] - squarePos9[0])) + ((circlePos2[1] - squarePos9[1]) * (circlePos2[1] - squarePos9[1])))
    let square9distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos9[0]) * (circlePos3[0] - squarePos9[0])) + ((circlePos3[1] - squarePos9[1]) * (circlePos3[1] - squarePos9[1])))
    let square9distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos9[0]) * (circlePos4[0] - squarePos9[0])) + ((circlePos4[1] - squarePos9[1]) * (circlePos4[1] - squarePos9[1])))

    let square10distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos10[0]) * (circlePos1[0] - squarePos10[0])) + ((circlePos1[1] - squarePos10[1]) * (circlePos1[1] - squarePos10[1])))
    let square10distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos10[0]) * (circlePos2[0] - squarePos10[0])) + ((circlePos2[1] - squarePos10[1]) * (circlePos2[1] - squarePos10[1])))
    let square10distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos10[0]) * (circlePos3[0] - squarePos10[0])) + ((circlePos3[1] - squarePos10[1]) * (circlePos3[1] - squarePos10[1])))
    let square10distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos10[0]) * (circlePos4[0] - squarePos10[0])) + ((circlePos4[1] - squarePos10[1]) * (circlePos4[1] - squarePos10[1])))

    let square11distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos11[0]) * (circlePos1[0] - squarePos11[0])) + ((circlePos1[1] - squarePos11[1]) * (circlePos1[1] - squarePos11[1])))
    let square11distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos11[0]) * (circlePos2[0] - squarePos11[0])) + ((circlePos2[1] - squarePos11[1]) * (circlePos2[1] - squarePos11[1])))
    let square11distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos11[0]) * (circlePos3[0] - squarePos11[0])) + ((circlePos3[1] - squarePos11[1]) * (circlePos3[1] - squarePos11[1])))
    let square11distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos11[0]) * (circlePos4[0] - squarePos11[0])) + ((circlePos4[1] - squarePos11[1]) * (circlePos4[1] - squarePos11[1])))

    let square12distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos12[0]) * (circlePos1[0] - squarePos12[0])) + ((circlePos1[1] - squarePos12[1]) * (circlePos1[1] - squarePos12[1])))
    let square12distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos12[0]) * (circlePos2[0] - squarePos12[0])) + ((circlePos2[1] - squarePos12[1]) * (circlePos2[1] - squarePos12[1])))
    let square12distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos12[0]) * (circlePos3[0] - squarePos12[0])) + ((circlePos3[1] - squarePos12[1]) * (circlePos3[1] - squarePos12[1])))
    let square12distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos12[0]) * (circlePos4[0] - squarePos12[0])) + ((circlePos4[1] - squarePos12[1]) * (circlePos4[1] - squarePos12[1])))

    let square13distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos13[0]) * (circlePos1[0] - squarePos13[0])) + ((circlePos1[1] - squarePos13[1]) * (circlePos1[1] - squarePos14[1])))
    let square13distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos13[0]) * (circlePos2[0] - squarePos13[0])) + ((circlePos2[1] - squarePos13[1]) * (circlePos2[1] - squarePos14[1])))
    let square13distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos13[0]) * (circlePos3[0] - squarePos13[0])) + ((circlePos3[1] - squarePos13[1]) * (circlePos3[1] - squarePos14[1])))
    let square13distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos13[0]) * (circlePos4[0] - squarePos13[0])) + ((circlePos4[1] - squarePos13[1]) * (circlePos4[1] - squarePos14[1])))

    let square14distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos14[0]) * (circlePos1[0] - squarePos14[0])) + ((circlePos1[1] - squarePos14[1]) * (circlePos1[1] - squarePos14[1])))
    let square14distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos14[0]) * (circlePos2[0] - squarePos14[0])) + ((circlePos2[1] - squarePos14[1]) * (circlePos2[1] - squarePos14[1])))
    let square14distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos14[0]) * (circlePos3[0] - squarePos14[0])) + ((circlePos3[1] - squarePos14[1]) * (circlePos3[1] - squarePos14[1])))
    let square14distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos14[0]) * (circlePos4[0] - squarePos14[0])) + ((circlePos4[1] - squarePos14[1]) * (circlePos4[1] - squarePos14[1])))

    let square15distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos15[0]) * (circlePos1[0] - squarePos15[0])) + ((circlePos1[1] - squarePos15[1]) * (circlePos1[1] - squarePos15[1])))
    let square15distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos15[0]) * (circlePos2[0] - squarePos15[0])) + ((circlePos2[1] - squarePos15[1]) * (circlePos2[1] - squarePos15[1])))
    let square15distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos15[0]) * (circlePos3[0] - squarePos15[0])) + ((circlePos3[1] - squarePos15[1]) * (circlePos3[1] - squarePos15[1])))
    let square15distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos15[0]) * (circlePos4[0] - squarePos15[0])) + ((circlePos4[1] - squarePos15[1]) * (circlePos4[1] - squarePos15[1])))

    let square16distanceFromOsc1 = Math.sqrt(((circlePos1[0] - squarePos16[0]) * (circlePos1[0] - squarePos16[0])) + ((circlePos1[1] - squarePos16[1]) * (circlePos1[1] - squarePos16[1])))
    let square16distanceFromOsc2 = Math.sqrt(((circlePos2[0] - squarePos16[0]) * (circlePos2[0] - squarePos16[0])) + ((circlePos2[1] - squarePos16[1]) * (circlePos2[1] - squarePos16[1])))
    let square16distanceFromOsc3 = Math.sqrt(((circlePos3[0] - squarePos16[0]) * (circlePos3[0] - squarePos16[0])) + ((circlePos3[1] - squarePos16[1]) * (circlePos3[1] - squarePos16[1])))
    let square16distanceFromOsc4 = Math.sqrt(((circlePos4[0] - squarePos16[0]) * (circlePos4[0] - squarePos16[0])) + ((circlePos4[1] - squarePos16[1]) * (circlePos4[1] - squarePos16[1])))
    

    console.log(square1distanceFromOsc1)
    console.log(square2distanceFromOsc1)
    console.log(square3distanceFromOsc1)
    console.log(square4distanceFromOsc1)
    console.log(square5distanceFromOsc1)
    console.log(square6distanceFromOsc1)
    console.log(square7distanceFromOsc1)
    console.log(square8distanceFromOsc1)
    console.log(square9distanceFromOsc1)
    console.log(square10distanceFromOsc1)
    console.log(square11distanceFromOsc1)
    console.log(square12distanceFromOsc1)
    console.log(square13distanceFromOsc1)
    console.log(square14distanceFromOsc1)
    console.log(square15distanceFromOsc1)
    console.log(square16distanceFromOsc1)

  let lfoWaveTypes = ['sine', 'square', 'triangle', 'sawtooth']
  let randomType = Math.floor(Math.random()*lfoWaveTypes.length)

/////OSC 1 SETTINGS/////////////////////
    let oscFreq = circlePos1[1] * Math.floor(Math.random() * (7) - 1 + 1) + 20

    let lfoFreq = Math.floor((square1distanceFromOsc1 * .002) * Math.floor(Math.random() * (12) - 1 + 1) + 1)
    let lfoType = lfoWaveTypes[randomType]
  
    
    let osc1chorusDepth = (1000 - square2distanceFromOsc1) * .001
    let osc1chorusRate = Math.floor(square2distanceFromOsc1 * .008)
    
    let osc1filterDepth = (1000 - square3distanceFromOsc1) * .001
    let osc1filterRate = Math.floor(square3distanceFromOsc1 * .008)

    let osc1filter2Rate = square4distanceFromOsc1 * .001
    let osc1filter2Depth = Math.floor((1000 - square4distanceFromOsc1) * .008)

    let osc1tremoloIntensity = (1000 - square5distanceFromOsc1) * .001
    let osc1tremoloRate = square5distanceFromOsc1 * .011

    let osc1bitcrusherBits = Math.floor((1000 - square6distanceFromOsc1) * .016)
    let osc1bitcrusherBufferSize = square6distanceFromOsc1 * Math.floor(Math.random() * (16) -1 + 1) + 256

    let osc1moogFilterBufferSize = square7distanceFromOsc1 * Math.floor(Math.random() * (16) -1 + 1) + 256
    let osc1moogFilterCutoff = (1000 - square7distanceFromOsc1) * .001
    let osc1moogFilterResonance = Math.floor(square7distanceFromOsc1 * .004)

    let osc1moogFilter2BufferSize = square8distanceFromOsc1 * Math.floor(Math.random() * (16) -1 + 1) + 256
    let osc1moogFilter2Cutoff = square8distanceFromOsc1 * .001
    let osc1moogFilter2Resonance = Math.floor((1000 - square8distanceFromOsc1) * .004)

    let osc1reverbLevel = (1000 - square9distanceFromOsc1) * .001

    let osc1pannerPan = 1 - ((1000 - square10distanceFromOsc1) * .002)

    let osc1phaserDepth = (1000 - square11distanceFromOsc1) * .001
    let osc1phaserRate = Math.floor(square11distanceFromOsc1 * .008)
    let osc1phaserFeedback = square11distanceFromOsc1 * .001

    let osc1overdriveDrive = (1000 - square12distanceFromOsc1) * .001
    let osc1overdriveGain = Math.floor(46 - ((1000 - square12distanceFromOsc1) * .046)) * -1
    
    
    


    



/////OSC 2 SETTINGS/////////////////////
    let osc2Freq = circlePos2[1] * Math.floor(Math.random() * (7.5) - 1 + 1) + 20

    let lfo2Freq = Math.floor((square1distanceFromOsc2 * .002) * Math.floor(Math.random() * (12) - 1 + 1) + 1)
    let lfo2Type = lfoWaveTypes[randomType]
  
    
    let osc2chorusDepth = (1000 - square2distanceFromOsc2) * .001
    let osc2chorusRate = Math.floor(square2distanceFromOsc2 * .008)
    
    let osc2filterDepth = (1000 - square3distanceFromOsc2) * .001
    let osc2filterRate = Math.floor(square3distanceFromOsc2 * .008)

    let osc2filter2Rate = square4distanceFromOsc2 * .001
    let osc2filter2Depth = Math.floor((1000 - square4distanceFromOsc2) * .008)

    let osc2tremoloIntensity = (1000 - square5distanceFromOsc2) * .001
    let osc2tremoloRate = square5distanceFromOsc2 * .011

    let osc2bitcrusherBits = Math.floor((1000 - square6distanceFromOsc2) * .016)
    let osc2bitcrusherBufferSize = square6distanceFromOsc2 * Math.floor(Math.random() * (16) -1 + 1) + 256

    let osc2moogFilterBufferSize = square7distanceFromOsc2 * Math.floor(Math.random() * (16) -1 + 1) + 256
    let osc2moogFilterCutoff = (1000 - square7distanceFromOsc2) * .001
    let osc2moogFilterResonance = Math.floor(square7distanceFromOsc2 * .004)

    let osc2moogFilter2BufferSize = square8distanceFromOsc2 * Math.floor(Math.random() * (16) -1 + 1) + 256
    let osc2moogFilter2Cutoff = square8distanceFromOsc2 * .001
    let osc2moogFilter2Resonance = Math.floor((1000 - square8distanceFromOsc2) * .004)

    let osc2reverbLevel = (1000 - square9distanceFromOsc2) * .001

    let osc2pannerPan = 1 - ((1000 - square10distanceFromOsc2) * .002)

    let osc2phaserDepth = (1000 - square11distanceFromOsc2) * .001
    let osc2phaserRate = Math.floor(square11distanceFromOsc2 * .008)
    let osc2phaserFeedback = square11distanceFromOsc2 * .001

    let osc2overdriveDrive = (1000 - square12distanceFromOsc2) * .001
    let osc2overdriveGain = Math.floor(46 - ((1000 - square12distanceFromOsc2) * .046)) * -1
    



/////OSC 3 SETTINGS/////////////////////
    let osc3Freq = circlePos3[1] * Math.floor(Math.random() * (8) - 1 + 1) + 20

    let lfo3Freq = Math.floor((square1distanceFromOsc3 * .002) * Math.floor(Math.random() * (12) - 1 + 1) + 1)
    let lfo3Type = lfoWaveTypes[randomType]
  
    
    let osc3chorusDepth = (1000 - square2distanceFromOsc3) * .001
    let osc3chorusRate = Math.floor(square2distanceFromOsc3 * .008)
    
    let osc3filterDepth = (1000 - square3distanceFromOsc3) * .001
    let osc3filterRate = Math.floor(square3distanceFromOsc3 * .008)

    let osc3filter2Rate = square4distanceFromOsc3 * .001
    let osc3filter2Depth = Math.floor((1000 - square4distanceFromOsc3) * .008)

    let osc3tremoloIntensity = (1000 - square5distanceFromOsc3) * .001
    let osc3tremoloRate = square5distanceFromOsc3 * .011

    let osc3bitcrusherBits = Math.floor((1000 - square6distanceFromOsc3) * .016)
    let osc3bitcrusherBufferSize = square6distanceFromOsc3 * Math.floor(Math.random() * (16) -1 + 1) + 256

    let osc3moogFilterBufferSize = square7distanceFromOsc3 * Math.floor(Math.random() * (16) -1 + 1) + 256
    let osc3moogFilterCutoff = (1000 - square7distanceFromOsc3) * .001
    let osc3moogFilterResonance = Math.floor(square7distanceFromOsc3 * .004)

    let osc3moogFilter2BufferSize = square8distanceFromOsc3 * Math.floor(Math.random() * (16) -1 + 1) + 256
    let osc3moogFilter2Cutoff = square8distanceFromOsc3 * .001
    let osc3moogFilter2Resonance = Math.floor((1000 - square8distanceFromOsc3) * .004)

    let osc3reverbLevel = (1000 - square9distanceFromOsc3) * .001

    let osc3pannerPan = 1 - ((1000 - square10distanceFromOsc3) * .002)

    let osc3phaserDepth = (1000 - square11distanceFromOsc3) * .001
    let osc3phaserRate = Math.floor(square11distanceFromOsc3 * .008)
    let osc3phaserFeedback = square11distanceFromOsc3 * .001

    let osc3overdriveDrive = (1000 - square12distanceFromOsc3) * .001
    let osc3overdriveGain = Math.floor(46 - ((1000 - square12distanceFromOsc3) * .046)) * -1
    



/////OSC 4 SETTINGS/////////////////////
    let osc4Freq = circlePos4[1] * Math.floor(Math.random() * (9.5) - 1 + 1) + 20
    
    let lfo4Freq = Math.floor((square1distanceFromOsc4 * .002) * Math.floor(Math.random() * (12) - 1 + 1) + 1)
    let lfo4Type = lfoWaveTypes[randomType]
  
    
    let osc4chorusDepth = (1000 - square2distanceFromOsc4) * .001
    let osc4chorusRate = Math.floor(square2distanceFromOsc4 * .008)
    
    let osc4filterDepth = (1000 - square3distanceFromOsc4) * .001
    let osc4filterRate = Math.floor(square3distanceFromOsc4 * .008)

    let osc4filter2Rate = square4distanceFromOsc4 * .001
    let osc4filter2Depth = Math.floor((1000 - square4distanceFromOsc4) * .008)

    let osc4tremoloIntensity = (1000 - square5distanceFromOsc4) * .001
    let osc4tremoloRate = square5distanceFromOsc4 * .011

    let osc4bitcrusherBits = Math.floor((1000 - square6distanceFromOsc4) * .016)
    let osc4bitcrusherBufferSize = square6distanceFromOsc4 * Math.floor(Math.random() * (16) -1 + 1) + 256

    let osc4moogFilterBufferSize = square7distanceFromOsc4 * Math.floor(Math.random() * (16) -1 + 1) + 256
    let osc4moogFilterCutoff = (1000 - square7distanceFromOsc4) * .001
    let osc4moogFilterResonance = Math.floor(square7distanceFromOsc4 * .004)

    let osc4moogFilter2BufferSize = square8distanceFromOsc4 * Math.floor(Math.random() * (16) -1 + 1) + 256
    let osc4moogFilter2Cutoff = square8distanceFromOsc4 * .001
    let osc4moogFilter2Resonance = Math.floor((1000 - square8distanceFromOsc4) * .004)

    let osc4reverbLevel = (1000 - square9distanceFromOsc4) * .001

    let osc4pannerPan = 1 - ((1000 - square10distanceFromOsc4) * .002)

    let osc4phaserDepth = (1000 - square11distanceFromOsc4) * .001
    let osc4phaserRate = Math.floor(square11distanceFromOsc4 * .008)
    let osc4phaserFeedback = square11distanceFromOsc4 * .001

    let osc4overdriveDrive = (1000 - square12distanceFromOsc4) * .001
    let osc4overdriveGain = Math.floor(46 - ((1000 - square12distanceFromOsc4) * .046)) * -1
    





/////////////////////////////////////////////////////////////////////////////////
///////////////////SETTING STATE NOW////////////////////////////////////////////
    console.log(oscFreq, lfoFreq, osc2Freq, osc3Freq, osc4Freq, circlePos1[0], circlePos4[0])
    this.state = {

      circle1Pos: circlePos1,
      prevCircle1Pos: circlePos1,
      oscFreq: oscFreq,
      oscFreqRange: [15, 5000],
      lfoFreq: lfoFreq,
      start1Move: false,
      osc1Neighbors: [],

      circle2Pos: circlePos2,
      prevCircle2Pos: circlePos2,
      osc2Freq: osc2Freq,
      osc2FreqRange: [15, 5000],
      lfo2Freq: lfo2Freq,
      start2Move: false,
      osc2Neighbors: [],

      circle3Pos: circlePos3,
      prevCircle3Pos: circlePos3,
      osc3Freq: osc3Freq,
      osc3FreqRange: [15, 5000],
      lfo3Freq: lfo3Freq,
      start3Move: false,
      osc3Neighbors: [],

      circle4Pos: circlePos4,
      prevCircle4Pos: circlePos4,
      osc4Freq: osc4Freq,
      osc4FreqRange: [15, 5000],
      lfo4Freq: lfo4Freq,
      start4Move: false,
      osc4Neighbors: [],

/////EFFECT NODE 1//////////////////////
      square1Pos: squarePos1,
      prevSquare1Pos: squarePos1,
      start5Move: false,
      square1distanceFromOsc1: square1distanceFromOsc1,
      square1distanceFromOsc2: square1distanceFromOsc2,
      square1distanceFromOsc3: square1distanceFromOsc3,
      square1distanceFromOsc4: square1distanceFromOsc4,

      isLFOstarted: false,
      lfoType: lfoType,
      lfoFreq: lfoFreq,

      isLFO2started: false,
      lfo2Type: lfo2Type,
      lfo2Freq: lfo2Freq,

      isLFO3started: false,
      lfo3Type: lfo3Type,
      lfo3Freq: lfo3Freq,

      isLFO4started: false,
      lfo4Type: lfo4Type,
      lfo4Freq: lfo4Freq,

/////EFFECT NODE 2//////////////////////      
      square2Pos: squarePos2,
      prevSquare2Pos: squarePos2,
      start6Move: false,
      square2distanceFromOsc1: square2distanceFromOsc1,
      square2distanceFromOsc2: square2distanceFromOsc2,
      square2distanceFromOsc3: square2distanceFromOsc3,
      square2distanceFromOsc4: square2distanceFromOsc4,

      isOSC1chorusStarted: false,
      osc1chorusDepth: osc1chorusDepth,
      osc1chorusRate: osc1chorusRate,

      isOSC2chorusStarted: false,
      osc2chorusDepth: osc2chorusDepth,
      osc2chorusRate: osc2chorusRate,

      isOSC3chorusStarted: false,
      osc3chorusDepth: osc3chorusDepth,
      osc3chorusRate: osc3chorusRate,

      isOSC4chorusStarted: false,
      osc4chorusDepth: osc4chorusDepth,
      osc4chorusRate: osc4chorusRate,


/////EFFECT NODE 3////////////////////// 
      square3Pos: squarePos3,
      prevSquare3Pos: squarePos3,
      start7Move: false,
      square3distanceFromOsc1: square3distanceFromOsc1,
      square3distanceFromOsc2: square3distanceFromOsc2,
      square3distanceFromOsc3: square3distanceFromOsc3,
      square3distanceFromOsc4: square3distanceFromOsc4,

      isOSC1filterStarted: false,
      osc1filterDepth: osc1filterDepth,
      osc1filterRate: osc1filterRate,

      isOSC2filterStarted: false,
      osc2filterDepth: osc2filterDepth,
      osc2filterRate: osc2filterRate,

      isOSC3filterStarted: false,
      osc3filterDepth: osc3filterDepth,
      osc3filterRate: osc3filterRate,

      isOSC4filterStarted: false,
      osc4filterDepth: osc4filterDepth,
      osc4filterRate: osc4filterRate,


/////EFFECT NODE 4////////////////////// 
      square4Pos: squarePos4,
      prevSquare4Pos: squarePos4,
      start8Move: false,
      square4distanceFromOsc1: square4distanceFromOsc1,
      square4distanceFromOsc2: square4distanceFromOsc2,
      square4distanceFromOsc3: square4distanceFromOsc3,
      square4distanceFromOsc4: square4distanceFromOsc4,

      isOSC1filter2Started: false,
      osc1filter2Depth: osc1filter2Depth,
      osc1filter2Rate: osc1filter2Rate,

      isOSC2filter2Started: false,
      osc2filter2Depth: osc2filter2Depth,
      osc2filter2Rate: osc2filter2Rate,

      isOSC3filter2Started: false,
      osc3filter2Depth: osc3filter2Depth,
      osc3filter2Rate: osc3filter2Rate,

      isOSC4filter2Started: false,
      osc4filter2Depth: osc4filter2Depth,
      osc4filter2Rate: osc4filter2Rate,


/////EFFECT NODE 5////////////////////// 
      square5Pos: squarePos5,
      prevSquare5Pos: squarePos5,
      start9Move: false,
      square5distanceFromOsc1: square5distanceFromOsc1,
      square5distanceFromOsc2: square5distanceFromOsc2,
      square5distanceFromOsc3: square5distanceFromOsc3,
      square5distanceFromOsc4: square5distanceFromOsc4,


      isOSC1tremoloStarted: false,
      osc1tremoloIntensity: osc1tremoloIntensity,
      osc1tremoloRate: osc1tremoloRate,

      isOSC2tremoloStarted: false,
      osc2tremoloIntensity: osc2tremoloIntensity,
      osc2tremoloRate: osc2tremoloRate,

      isOSC3tremoloStarted: false,
      osc3tremoloIntensity: osc3tremoloIntensity,
      osc3tremoloRate:  osc3tremoloRate,

      isOSC4tremoloStarted: false,
      osc4tremoloIntensity: osc4tremoloIntensity,
      osc4tremoloRate: osc4tremoloRate,


/////EFFECT NODE 6////////////////////// 
      square6Pos: squarePos6,
      prevSquare6Pos: squarePos6,
      start10Move: false,
      square6distanceFromOsc1: square6distanceFromOsc1,
      square6distanceFromOsc2: square6distanceFromOsc2,
      square6distanceFromOsc3: square6distanceFromOsc3,
      square6distanceFromOsc4: square6distanceFromOsc4,

      isOSC1bitcrusherStarted: false,
      osc1bitcrusherBits: osc1bitcrusherBits,
      osc1bitcrusherBufferSize: osc1bitcrusherBufferSize,

      isOSC2bitcrusherStarted: false,
      osc2bitcrusherBits: osc2bitcrusherBits,
      osc2bitcrusherBufferSize: osc2bitcrusherBufferSize,

      isOSC3bitcrusherStarted: false,
      osc3bitcrusherBits: osc3bitcrusherBits,
      osc3bitcrusherBufferSize: osc3bitcrusherBufferSize,

      isOSC4bitcrusherStarted: false,
      osc4bitcrusherBits: osc4bitcrusherBits,
      osc4bitcrusherBufferSize: osc4bitcrusherBufferSize,


/////EFFECT NODE 7////////////////////// 
      square7Pos: squarePos7,
      prevSquare7Pos: squarePos7,
      start11Move: false,
      square7distanceFromOsc1: square7distanceFromOsc1,
      square7distanceFromOsc2: square7distanceFromOsc2,
      square7distanceFromOsc3: square7distanceFromOsc3,
      square7distanceFromOsc4: square7distanceFromOsc4,

      isOSC1moogFilterStarted: false,
      osc1moogFilterBufferSize: osc1moogFilterBufferSize,
      osc1moogFilterCutoff: osc1moogFilterCutoff,
      osc1moogFilterResonance: osc1moogFilterResonance,

      isOSC2moogFilterStarted: false,
      osc2moogFilterBufferSize: osc2moogFilterBufferSize,
      osc2moogFilterCutoff: osc2moogFilterCutoff,
      osc2moogFilterResonance: osc2moogFilterResonance,

      isOSC3moogFilterStarted: false,
      osc3moogFilterBufferSize: osc3moogFilterBufferSize,
      osc3moogFilterCutoff: osc3moogFilterCutoff,
      osc3moogFilterResonance: osc3moogFilterResonance,

      isOSC4moogFilterStarted: false,
      osc4moogFilterBufferSize: osc4moogFilterBufferSize,
      osc4moogFilterCutoff: osc4moogFilterCutoff,
      osc4moogFilterResonance: osc4moogFilterResonance,


/////EFFECT NODE 8////////////////////// 
      square8Pos: squarePos8,
      prevSquare8Pos: squarePos8,
      start12Move: false,
      square8distanceFromOsc1: square8distanceFromOsc1,
      square8distanceFromOsc2: square8distanceFromOsc2,
      square8distanceFromOsc3: square8distanceFromOsc3,
      square8distanceFromOsc4: square8distanceFromOsc4,


      isOSC1moogFilter2Started: false,
      osc1moogFilter2BufferSize: osc1moogFilter2BufferSize,
      osc1moogFilter2Cutoff: osc1moogFilter2Cutoff,
      osc1moogFilter2Resonance: osc1moogFilter2Resonance,

      isOSC2moogFilter2Started: false,
      osc2moogFilter2BufferSize: osc2moogFilter2BufferSize,
      osc2moogFilter2Cutoff: osc2moogFilter2Cutoff,
      osc2moogFilter2Resonance: osc2moogFilter2Resonance,

      isOSC3moogFilter2Started: false,
      osc3moogFilter2BufferSize: osc3moogFilter2BufferSize,
      osc3moogFilter2Cutoff: osc3moogFilter2Cutoff,
      osc3moogFilter2Resonance: osc3moogFilter2Resonance,

      isOSC4moogFilter2Started: false,
      osc4moogFilter2BufferSize: osc4moogFilter2BufferSize,
      osc4moogFilter2Cutoff: osc4moogFilter2Cutoff,
      osc4moogFilter2Resonance: osc4moogFilter2Resonance,


/////EFFECT NODE 9////////////////////// 
      square9Pos: squarePos9,
      prevSquare9Pos: squarePos9,
      start13Move: false,
      square9distanceFromOsc1: square9distanceFromOsc1,
      square9distanceFromOsc2: square9distanceFromOsc2,
      square9distanceFromOsc3: square9distanceFromOsc3,
      square9distanceFromOsc4: square9distanceFromOsc4,

      isOSC1reverbStarted: false,
      osc1reverbLevel: osc1reverbLevel,

      isOSC2reverbStarted: false,
      osc2reverbLevel: osc2reverbLevel,

      isOSC3reverbStarted: false,
      osc3reverbLevel: osc3reverbLevel,

      isOSC4reverbStarted: false,
      osc4reverbLevel: osc4reverbLevel,


/////EFFECT NODE 10////////////////////// 
      square10Pos: squarePos10,
      prevSquare10Pos: squarePos10,
      start14Move: false,
      square10distanceFromOsc1: square10distanceFromOsc1,
      square10distanceFromOsc2: square10distanceFromOsc2,
      square10distanceFromOsc3: square10distanceFromOsc3,
      square10distanceFromOsc4: square10distanceFromOsc4,

      isOSC1pannerStarted: false,
      osc1pannerPan: osc1pannerPan,

      isOSC2pannerStarted: false,
      osc2pannerPan: osc2pannerPan,

      isOSC3pannerStarted: false,
      osc3pannerPan: osc3pannerPan,

      isOSC4pannerStarted: false,
      osc4pannerPan: osc4pannerPan,



  
/////EFFECT NODE 11////////////////////// 
      square11Pos: squarePos11,
      prevSquare11Pos: squarePos11,
      start15Move: false,
      square11distanceFromOsc1: square11distanceFromOsc1,
      square11distanceFromOsc2: square11distanceFromOsc2,
      square11distanceFromOsc3: square11distanceFromOsc3,
      square11distanceFromOsc4: square11distanceFromOsc4,

      isOSC1phaserStarted: false,
      osc1phaserRate: osc1phaserRate,
      osc1phaserDepth: osc1phaserDepth,
      osc1phaserFeedback: osc1phaserFeedback,

      isOSC2phaserStarted: false,
      osc2phaserRate: osc2phaserRate,
      osc2phaserDepth: osc2phaserDepth,
      osc2phaserFeedback: osc2phaserFeedback,

      isOSC3phaserStarted: false,
      osc3phaserRate: osc3phaserRate,
      osc3phaserDepth: osc3phaserDepth,
      osc3phaserFeedback: osc3phaserFeedback,

      isOSC4phaserStarted: false,
      osc4phaserRate: osc4phaserRate,
      osc4phaserDepth: osc4phaserDepth,
      osc4phaserFeedback: osc4phaserFeedback,


/////EFFECT NODE 12////////////////////// 
      square12Pos: squarePos12,
      prevSquare12Pos: squarePos12,
      start16Move: false,
      square12distanceFromOsc1: square12distanceFromOsc1,
      square12distanceFromOsc2: square12distanceFromOsc2,
      square12distanceFromOsc3: square12distanceFromOsc3,
      square12distanceFromOsc4: square12distanceFromOsc4,

      isOSC1overdriveStarted: false,
      osc1overdriveDrive: osc1overdriveDrive,
      osc1overdriveGain: osc1overdriveGain,

      isOSC2overdriveStarted: false,
      osc2overdriveDrive: osc2overdriveDrive,
      osc2overdriveGain: osc2overdriveGain,

      isOSC3overdriveStarted: false,
      osc3overdriveDrive: osc3overdriveDrive,
      osc3overdriveGain: osc3overdriveGain,

      isOSC4overdriveStarted: false,
      osc4overdriveDrive: osc4overdriveDrive,
      osc4overdriveGain: osc4overdriveGain,


/////EFFECT NODE 13////////////////////// 
      square13Pos: squarePos13,
      prevSquare13Pos: squarePos13,
      start17Move: false,
      square13distanceFromOsc1: square13distanceFromOsc1,
      square13distanceFromOsc2: square13distanceFromOsc2,
      square13distanceFromOsc3: square13distanceFromOsc3,
      square13distanceFromOsc4: square13distanceFromOsc4,


/////EFFECT NODE 14////////////////////// 
      square14Pos: squarePos14,
      prevSquare14Pos: squarePos14,
      start18Move: false,
      square14distanceFromOsc1: square14distanceFromOsc1,
      square14distanceFromOsc2: square14distanceFromOsc2,
      square14distanceFromOsc3: square14distanceFromOsc3,
      square14distanceFromOsc4: square14distanceFromOsc4,


/////EFFECT NODE 15////////////////////// 
      square15Pos: squarePos15,
      prevSquare15Pos: squarePos15,
      start19Move: false,
      square15distanceFromOsc1: square15distanceFromOsc1,
      square15distanceFromOsc2: square15distanceFromOsc2,
      square15distanceFromOsc3: square15distanceFromOsc3,
      square15distanceFromOsc4: square15distanceFromOsc4,


/////EFFECT NODE 16////////////////////// 
      square16Pos: squarePos16,
      prevSquare16Pos: squarePos16,
      start20Move: false,
      square16distanceFromOsc1: square16distanceFromOsc1,
      square16distanceFromOsc2: square16distanceFromOsc2,
      square16distanceFromOsc3: square16distanceFromOsc3,
      square16distanceFromOsc4: square16distanceFromOsc4,
      
    };
   
    // this.updateFrequencyOSC();
    // // this.updateFrequencyOSC2();
    // this.updateFrequencyOSC3();
    // this.updateFrequencyOSC4();
    // this.turnOnLFO();
    // this.turnOnLFO2();
    
    
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleMouseDown, false);
        document.addEventListener('mouseup', this.handleMouseUp, false);
        document.addEventListener('mousemove', this.handleMouseEvent, false);
        var rect = this.refs.canvas.getBoundingClientRect();
        this.canvasPos = [rect.left, rect.top];
        this.ctx = this.refs.canvas.getContext('2d');
        
        this.ctx.fillStyle = this.props.color;
        this.ctx.beginPath();
        this.ctx.fillRect(0,0, this.props.width, this.props.height);
        
      
        this.drawLabel();
        
        this.updateCanvas();
    }

    drawLabel() {
        this.ctx.font = '10px consolas';
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#CC0720';
        this.ctx.fillText('OSCILLATOR FREQUENCY', Math.round(this.props.width/2), 10 + 5);
        this.ctx.beginPath();
        this.ctx.rotate(1.5708);
        this.ctx.fillText(
          'LFO FREQUENCY', 
          Math.round(this.props.width / 2), 
          -this.props.width + 10 + 5);
        this.ctx.rotate(-1.5708);
    }

    updateCanvas() {
      
      this.ctx.beginPath();
      this.ctx.arc(this.state.prevCircle1Pos[0], this.state.prevCircle1Pos[1], 7, false, Math.PI * 2, false);
      this.ctx.arc(this.state.prevCircle2Pos[0], this.state.prevCircle2Pos[1], 7, false, Math.PI * 2, false);
      this.ctx.arc(this.state.prevCircle3Pos[0], this.state.prevCircle3Pos[1], 7, false, Math.PI * 2, false);
      this.ctx.arc(this.state.prevCircle4Pos[0], this.state.prevCircle4Pos[1], 7, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = this.props.color;
      

      this.drawLabel();

      
      let points = [
        this.state.circle1Pos, 
        this.state.circle2Pos, 
        this.state.circle3Pos, 
        this.state.circle4Pos, 
        this.state.square1Pos,
        this.state.square2Pos,
        this.state.square3Pos,
        this.state.square4Pos,
        this.state.square5Pos,
        this.state.square6Pos,
        this.state.square7Pos,
        this.state.square8Pos,
        this.state.square9Pos,
        this.state.square10Pos,
        this.state.square11Pos,
        this.state.square12Pos,
        this.state.square13Pos,
        this.state.square14Pos,
        this.state.square15Pos,
        this.state.square16Pos,
      ]

      // console.log(points)
      const delaunay = d3.Delaunay.from(points);
      
      const voronoi = delaunay.voronoi([0.5, 0.5, this.props.width - 0.5, this.props.height])
      this.ctx.fillStyle = this.props.color;
      this.ctx.fillRect(0, 0, this.props.width, this.props.height)
      this.ctx.beginPath();
      delaunay.render(this.ctx);
      this.ctx.strokeStyle = "#C0392B";
      this.ctx.stroke();
      this.ctx.closePath();
      // console.log(voronoi.neighbors(), delaunay.neighbors())
      this.ctx.beginPath();
      voronoi.render(this.ctx);
      voronoi.renderBounds(this.ctx);
      this.ctx.strokeStyle = "#C0C0C0";
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.beginPath();
      delaunay.renderPoints(this.ctx);
      this.ctx.fill();

      //turn effects on of neighboring oscillators with this
      const osc1Neighbors = [...delaunay.neighbors(0)]
      this.state.osc1Neighbors = osc1Neighbors;
      const osc2Neighbors = [...delaunay.neighbors(1)]
      this.state.osc2Neighbors = osc2Neighbors;
      const osc3Neighbors = [...delaunay.neighbors(2)]
      this.state.osc3Neighbors = osc3Neighbors;
      const osc4Neighbors = [...delaunay.neighbors(3)]
      this.state.osc4Neighbors = osc4Neighbors;
      // console.log(osc2Neighbors)
      if (this.state.osc1Neighbors.includes(5)) {
        this.setState({isLFOstarted: true})
      }
      else if (this.state.osc1Neighbors.includes(6)) {
        this.setState({isOSC1chorusStarted: true})
      }
      else if (this.state.osc1Neighbors.includes(7)) {
        this.setState({isOSC1filterStarted: true})
      }  
      else if (this.state.osc1Neighbors.includes(8)) {
        this.setState({isOSC1filter2Started: true})
      } 
      else if (this.state.osc1Neighbors.includes(9)) {
        this.setState({isOSC1tremoloStarted: true})
      }   
      else if (this.state.osc1Neighbors.includes(10)) {
        this.setState({isOSC1bitcrusherStarted: true})
      }
      else if (this.state.osc1Neighbors.includes(11)) {
        this.setState({isOSC1moogFilterStarted: true})
      }
      else if (this.state.osc1Neighbors.includes(12)) {
        this.setState({isOSC1moogFilter2Started: true})
      }  
      else if (this.state.osc1Neighbors.includes(13)) {
        this.setState({isOSC1reverbStarted: true})
      } 
      else if (this.state.osc1Neighbors.includes(14)) {
        this.setState({isOSC1pannerStarted: true})
      }   
      else if (this.state.osc1Neighbors.includes(15)) {
        this.setState({isOSC1phaserStarted: true})
      }
      else if (this.state.osc1Neighbors.includes(16)) {
        this.setState({isOSC1overdriveStarted: true})
      }
      else {
        this.setState({
          isLFOstarted: false,
          isOSC1chorusStarted: false,
          isOSC1filterStarted: false,
          isOSC1filter2Started: false,
          isOSC1tremoloStarted: false,
          isOSC1bitcrusherStarted: false,
          isOSC1moogFilterStarted: false,
          isOSC1moogFilter2Started: false,
          isOSC1reverbStarted: false,
          isOSC1pannerStarted: false,
          isOSC1phaserStarted: false,
          isOSC1overdriveStarted: false
        })
      }

      if (this.state.osc2Neighbors.includes(5)) {
        this.setState({isLFO2started: true})
        this.turnOnLFO2();
      }
      else if (this.state.osc2Neighbors.includes(6)) {
        this.setState({isOSC2chorusStarted: true})
        this.toggleOSC2chorusBypass();
      }
      else if (this.state.osc2Neighbors.includes(7)) {
        this.setState({isOSC2filterStarted: true})
        this.toggleOSC2filterBypass();
      }  
      else if (this.state.osc2Neighbors.includes(8)) {
        this.setState({isOSC2filter2Started: true})
        this.toggleOSC2filter2Bypass();
      } 
      else if (this.state.osc2Neighbors.includes(9)) {
        this.setState({isOSC2tremoloStarted: true})
        this.toggleOSC2tremoloBypass();
      }   
      else if (this.state.osc2Neighbors.includes(10)) {
        this.setState({isOSC2bitcrusherStarted: true})
        this.toggleOSC2bitcrusherBypass();
      }
      else if (this.state.osc2Neighbors.includes(11)) {
        this.setState({isOSC2moogFilterStarted: true})
        this.toggleOSC2moogFilterBypass();
      }
      else if (this.state.osc2Neighbors.includes(12)) {
        this.setState({isOSC2moogFilter2Started: true})
        this.toggleOSC2moogFilter2Bypass();
      }  
      else if (this.state.osc2Neighbors.includes(13)) {
        this.setState({isOSC2reverbStarted: true})
        this.toggleOSC2reverbBypass();
      } 
      else if (this.state.osc2Neighbors.includes(14)) {
        this.setState({isOSC2pannerStarted: true})
        this.toggleOSC2pannerBypass();
      }   
      else if (this.state.osc2Neighbors.includes(15)) {
        this.setState({isOSC2phaserStarted: true})
        this.toggleOSC2phaserBypass();
      }
      else if (this.state.osc2Neighbors.includes(16)) {
        this.setState({isOSC2overdriveStarted: true})
        this.toggleOSC2overdriveBypass();
      }
      else {
        this.setState({
          isLFO2started: false,
          isOSC2chorusStarted: false,
          isOSC2filterStarted: false,
          isOSC2filter2Started: false,
          isOSC2tremoloStarted: false,
          isOSC2bitcrusherStarted: false,
          isOSC2moogFilterStarted: false,
          isOSC2moogFilter2Started: false,
          isOSC2reverbStarted: false,
          isOSC2pannerStarted: false,
          isOSC2phaserStarted: false,
          isOSC2overdriveStarted: false
        })
      }

      if (this.state.osc3Neighbors.includes(5)) {
        this.setState({isLFO3started: true})
      }
      else if (this.state.osc3Neighbors.includes(6)) {
        this.setState({isOSC3chorusStarted: true})
      }
      else if (this.state.osc3Neighbors.includes(7)) {
        this.setState({isOSC3filterStarted: true})
      }  
      else if (this.state.osc3Neighbors.includes(8)) {
        this.setState({isOSC3filter2Started: true})
      } 
      else if (this.state.osc3Neighbors.includes(9)) {
        this.setState({isOSC3tremoloStarted: true})
      }   
      else if (this.state.osc3Neighbors.includes(10)) {
        this.setState({isOSC3bitcrusherStarted: true})
      }
      else if (this.state.osc3Neighbors.includes(11)) {
        this.setState({isOSC3moogFilterStarted: true})
      }
      else if (this.state.osc3Neighbors.includes(12)) {
        this.setState({isOSC3moogFilter2Started: true})
      }  
      else if (this.state.osc3Neighbors.includes(13)) {
        this.setState({isOSC3reverbStarted: true})
      } 
      else if (this.state.osc3Neighbors.includes(14)) {
        this.setState({isOSC3pannerStarted: true})
      }   
      else if (this.state.osc3Neighbors.includes(15)) {
        this.setState({isOSC3phaserStarted: true})
      }
      else if (this.state.osc3Neighbors.includes(16)) {
        this.setState({isOSC3overdriveStarted: true})
      }
      else {
        this.setState({
          isLFO3started: false,
          isOSC3chorusStarted: false,
          isOSC3filterStarted: false,
          isOSC3filter2Started: false,
          isOSC3tremoloStarted: false,
          isOSC3bitcrusherStarted: false,
          isOSC3moogFilterStarted: false,
          isOSC3moogFilter2Started: false,
          isOSC3reverbStarted: false,
          isOSC3pannerStarted: false,
          isOSC3phaserStarted: false,
          isOSC3overdriveStarted: false
        })
      }

      if (this.state.osc4Neighbors.includes(5)) {
        this.setState({isLFO4started: true})
      }
      else if (this.state.osc4Neighbors.includes(6)) {
        this.setState({isOSC4chorusStarted: true})
      }
      else if (this.state.osc4Neighbors.includes(7)) {
        this.setState({isOSC4filterStarted: true})
      }  
      else if (this.state.osc4Neighbors.includes(8)) {
        this.setState({isOSC4filter2Started: true})
      } 
      else if (this.state.osc4Neighbors.includes(9)) {
        this.setState({isOSC4tremoloStarted: true})
      }   
      else if (this.state.osc4Neighbors.includes(10)) {
        this.setState({isOSC4bitcrusherStarted: true})
      }
      else if (this.state.osc4Neighbors.includes(11)) {
        this.setState({isOSC4moogFilterStarted: true})
      }
      else if (this.state.osc4Neighbors.includes(12)) {
        this.setState({isOSC4moogFilter2Started: true})
      }  
      else if (this.state.osc4Neighbors.includes(13)) {
        this.setState({isOSC4reverbStarted: true})
      } 
      else if (this.state.osc4Neighbors.includes(14)) {
        this.setState({isOSC4pannerStarted: true})
      }   
      else if (this.state.osc4Neighbors.includes(15)) {
        this.setState({isOSC4phaserStarted: true})
      }
      else if (this.state.osc4Neighbors.includes(16)) {
        this.setState({isOSC4overdriveStarted: true})
      }
      else {
        this.setState({
          isLFO4started: false,
          isOSC4chorusStarted: false,
          isOSC4filterStarted: false,
          isOSC4filter2Started: false,
          isOSC4tremoloStarted: false,
          isOSC4bitcrusherStarted: false,
          isOSC4moogFilterStarted: false,
          isOSC4moogFilter2Started: false,
          isOSC4reverbStarted: false,
          isOSC4pannerStarted: false,
          isOSC4phaserStarted: false,
          isOSC4overdriveStarted: false
        })
      }

      



      // console.log(this.state)
      // console.log(osc2Neighbors)


      // distance function: 
      // if osc1Neighbors.includes(5) {}
      

      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle1Pos[0], this.state.circle1Pos[1], 7.5, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();


      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle2Pos[0], this.state.circle2Pos[1], 7.5, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle3Pos[0], this.state.circle3Pos[1], 7.5, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle4Pos[0], this.state.circle4Pos[1], 7.5, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();


      //square 1
      this.ctx.beginPath();
      this.ctx.arc(this.state.square1Pos[0], this.state.square1Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square2Pos[0], this.state.square2Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square3Pos[0], this.state.square3Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square4Pos[0], this.state.square4Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square5Pos[0], this.state.square5Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square6Pos[0], this.state.square6Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square7Pos[0], this.state.square7Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square8Pos[0], this.state.square8Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square9Pos[0], this.state.square9Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square10Pos[0], this.state.square10Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square11Pos[0], this.state.square11Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square12Pos[0], this.state.square12Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square13Pos[0], this.state.square13Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square14Pos[0], this.state.square14Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square15Pos[0], this.state.square15Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.arc(this.state.square16Pos[0], this.state.square16Pos[1], 4, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

    }

    handleMouseUp() {
      this.setState({
        start1Move: false,
        start2Move: false,
        start3Move: false,
        start4Move: false,
        start5Move: false,
        start6Move: false,
        start7Move: false,
        start8Move: false,
        start9Move: false,
        start10Move: false,
        start11Move: false,
        start12Move: false,
        start13Move: false,
        start14Move: false,
        start15Move: false,
        start16Move: false,
        start17Move: false,
        start18Move: false,
        start19Move: false,
        start20Move: false,
      })
    }

    handleMouseDown(event) {
      // when this event starts check that pos X = node at pos X and you're finding the exact node you clicked
      //  filter to return the state 
      //find which node was clicked and update x and y coords
      // var posX = event.clientX - this.canvasPos[0];
      // var posY = event.clientY - this.canvasPos[1];
      // console.log(event.layerX, event.layerY, '-- event layers X & Y')
      // console.log(this.state.circle1Pos[0], this.state.circle1Pos[1], '--circle1pos')
      // console.log(this.state.circle2Pos[0], this.state.circle2Pos[1], '--circle2pos')
      // console.log(this.state.circle3Pos[0], this.state.circle3Pos[1], '--circle3pos')
      // console.log(this.state.circle4Pos[0], this.state.circle4Pos[1], '--circle4pos')
      
      let topRange1x = this.state.circle1Pos[0] + 5
      let bottomRange1x = this.state.circle1Pos[0] - 5
      let topRange1y = this.state.circle1Pos[1] + 5
      let bottomRange1y = this.state.circle1Pos[1] - 5
      let topRange2x = this.state.circle2Pos[0] + 5
      let bottomRange2x = this.state.circle2Pos[0] - 5
      let topRange2y = this.state.circle2Pos[1] + 5
      let bottomRange2y = this.state.circle2Pos[1] - 5
      let topRange3x = this.state.circle3Pos[0] + 5
      let bottomRange3x = this.state.circle3Pos[0] - 5
      let topRange3y = this.state.circle3Pos[1] + 5
      let bottomRange3y = this.state.circle3Pos[1] - 5
      let topRange4x = this.state.circle4Pos[0] + 5
      let bottomRange4x = this.state.circle4Pos[0] - 5
      let topRange4y = this.state.circle4Pos[1] + 5
      let bottomRange4y = this.state.circle4Pos[1] - 5

      let topRange5x = this.state.square1Pos[0] + 5
      let bottomRange5x = this.state.square1Pos[0] - 5
      let topRange5y = this.state.square1Pos[1] + 5
      let bottomRange5y = this.state.square1Pos[1] - 5
      let topRange6x = this.state.square2Pos[0] + 5
      let bottomRange6x = this.state.square2Pos[0] - 5
      let topRange6y = this.state.square2Pos[1] + 5
      let bottomRange6y = this.state.square2Pos[1] - 5
      let topRange7x = this.state.square3Pos[0] + 5
      let bottomRange7x = this.state.square3Pos[0] - 5
      let topRange7y = this.state.square3Pos[1] + 5
      let bottomRange7y = this.state.square3Pos[1] - 5
      let topRange8x = this.state.square4Pos[0] + 5
      let bottomRange8x = this.state.square4Pos[0] - 5
      let topRange8y = this.state.square4Pos[1] + 5
      let bottomRange8y = this.state.square4Pos[1] - 5

      let topRange9x = this.state.square5Pos[0] + 5
      let bottomRange9x = this.state.square5Pos[0] - 5
      let topRange9y = this.state.square5Pos[1] + 5
      let bottomRange9y = this.state.square5Pos[1] - 5
      let topRange10x = this.state.square6Pos[0] + 5
      let bottomRange10x = this.state.square6Pos[0] - 5
      let topRange10y = this.state.square6Pos[1] + 5
      let bottomRange10y = this.state.square6Pos[1] - 5
      let topRange11x = this.state.square7Pos[0] + 5
      let bottomRange11x = this.state.square7Pos[0] - 5
      let topRange11y = this.state.square7Pos[1] + 5
      let bottomRange11y = this.state.square7Pos[1] - 5
      let topRange12x = this.state.square8Pos[0] + 5
      let bottomRange12x = this.state.square8Pos[0] - 5
      let topRange12y = this.state.square8Pos[1] + 5
      let bottomRange12y = this.state.square8Pos[1] - 5

      let topRange13x = this.state.square9Pos[0] + 5
      let bottomRange13x = this.state.square9Pos[0] - 5
      let topRange13y = this.state.square9Pos[1] + 5
      let bottomRange13y = this.state.square9Pos[1] - 5
      let topRange14x = this.state.square10Pos[0] + 5
      let bottomRange14x = this.state.square10Pos[0] - 5
      let topRange14y = this.state.square10Pos[1] + 5
      let bottomRange14y = this.state.square10Pos[1] - 5
      let topRange15x = this.state.square11Pos[0] + 5
      let bottomRange15x = this.state.square11Pos[0] - 5
      let topRange15y = this.state.square11Pos[1] + 5
      let bottomRange15y = this.state.square11Pos[1] - 5
      let topRange16x = this.state.square12Pos[0] + 5
      let bottomRange16x = this.state.square12Pos[0] - 5
      let topRange16y = this.state.square12Pos[1] + 5
      let bottomRange16y = this.state.square12Pos[1] - 5

      let topRange17x = this.state.square13Pos[0] + 5
      let bottomRange17x = this.state.square13Pos[0] - 5
      let topRange17y = this.state.square13Pos[1] + 5
      let bottomRange17y = this.state.square13Pos[1] - 5
      let topRange18x = this.state.square14Pos[0] + 5
      let bottomRange18x = this.state.square14Pos[0] - 5
      let topRange18y = this.state.square14Pos[1] + 5
      let bottomRange18y = this.state.square14Pos[1] - 5
      let topRange19x = this.state.square15Pos[0] + 5
      let bottomRange19x = this.state.square15Pos[0] - 5
      let topRange19y = this.state.square15Pos[1] + 5
      let bottomRange19y = this.state.square15Pos[1] - 5
      let topRange20x = this.state.square16Pos[0] + 5
      let bottomRange20x = this.state.square16Pos[0] - 5
      let topRange20y = this.state.square16Pos[1] + 5
      let bottomRange20y = this.state.square16Pos[1] - 5

      if (event.layerX >= bottomRange1x && event.layerX <= topRange1x && event.layerY >= bottomRange1y && event.layerY <= topRange1y) { 
        this.setState({start1Move: true})
      } 
      else if (event.layerX >= bottomRange2x && event.layerX <= topRange2x && event.layerY >= bottomRange2y && event.layerY <= topRange2y) {
        this.setState({start2Move: true})
      }
      else if  (event.layerX >= bottomRange3x && event.layerX <= topRange3x && event.layerY >= bottomRange3y && event.layerY <= topRange3y) {
        this.setState({start3Move: true})
      }
      else if  (event.layerX >= bottomRange4x && event.layerX <= topRange4x && event.layerY >= bottomRange4y && event.layerY <= topRange4y) {
        this.setState({start4Move: true})
      } 
      else if  (event.layerX >= bottomRange5x && event.layerX <= topRange5x && event.layerY >= bottomRange5y && event.layerY <= topRange5y) {
        this.setState({start5Move: true})
      } 
      else if  (event.layerX >= bottomRange6x && event.layerX <= topRange6x && event.layerY >= bottomRange6y && event.layerY <= topRange6y) {
        this.setState({start6Move: true}) 
      }
      else if  (event.layerX >= bottomRange7x && event.layerX <= topRange7x && event.layerY >= bottomRange7y && event.layerY <= topRange7y) {
        this.setState({start7Move: true}) 
      }
      else if  (event.layerX >= bottomRange8x && event.layerX <= topRange8x && event.layerY >= bottomRange8y && event.layerY <= topRange8y) {
        this.setState({start8Move: true}) 
      }
      else if  (event.layerX >= bottomRange9x && event.layerX <= topRange9x && event.layerY >= bottomRange9y && event.layerY <= topRange9y) {
        this.setState({start9Move: true}) 
      }
      else if  (event.layerX >= bottomRange10x && event.layerX <= topRange10x && event.layerY >= bottomRange10y && event.layerY <= topRange10y) {
        this.setState({start10Move: true}) 
      }
      else if  (event.layerX >= bottomRange11x && event.layerX <= topRange11x && event.layerY >= bottomRange11y && event.layerY <= topRange11y) {
        this.setState({start11Move: true}) 
      }
      else if  (event.layerX >= bottomRange12x && event.layerX <= topRange12x && event.layerY >= bottomRange12y && event.layerY <= topRange12y) {
        this.setState({start12Move: true}) 
      }
      else if  (event.layerX >= bottomRange13x && event.layerX <= topRange13x && event.layerY >= bottomRange13y && event.layerY <= topRange13y) {
        this.setState({start13Move: true}) 
      }
      else if  (event.layerX >= bottomRange14x && event.layerX <= topRange14x && event.layerY >= bottomRange14y && event.layerY <= topRange14y) {
        this.setState({start14Move: true}) 
      }
      else if  (event.layerX >= bottomRange15x && event.layerX <= topRange15x && event.layerY >= bottomRange15y && event.layerY <= topRange15y) {
        this.setState({start15Move: true}) 
      }
      else if  (event.layerX >= bottomRange16x && event.layerX <= topRange16x && event.layerY >= bottomRange16y && event.layerY <= topRange16y) {
        this.setState({start16Move: true}) 
      }
      else if  (event.layerX >= bottomRange17x && event.layerX <= topRange17x && event.layerY >= bottomRange17y && event.layerY <= topRange17y) {
        this.setState({start17Move: true}) 
      }
      else if  (event.layerX >= bottomRange18x && event.layerX <= topRange18x && event.layerY >= bottomRange18y && event.layerY <= topRange18y) {
        this.setState({start18Move: true}) 
      }
      else if  (event.layerX >= bottomRange19x && event.layerX <= topRange19x && event.layerY >= bottomRange19y && event.layerY <= topRange19y) {
        this.setState({start19Move: true}) 
      }
      else if  (event.layerX >= bottomRange20x && event.layerX <= topRange20x && event.layerY >= bottomRange20y && event.layerY <= topRange20y) {
        this.setState({start20Move: true}) 
      }
      else {
        this.setState({
          start1Move: false,
          start2Move: false,
          start3Move: false,
          start4Move: false,
          start5Move: false,
          start6Move: false,
          start7Move: false,
          start8Move: false,
          start9Move: false,
          start10Move: false,
          start11Move: false,
          start12Move: false,
          start13Move: false,
          start14Move: false,
          start15Move: false,
          start16Move: false,
          start17Move: false,
          start18Move: false,
          start19Move: false,
          start20Move: false,
        })
      }

      this.updateCanvas();
    }
   
    //   points.find(point => { if (event.layerX && event.layerY === point + -5 || point + 5) {
    //     console.log(point)
    //     //  points.filter(clickedPoint => { if (clickedPoint[0] === point[0] + -5 || point[0] + 5) {
    //       this.setState({
    //         startMove: true,
    //       })
    //     })
    //   }
    

    handleMouseEvent(event) {
      let points = [this.state.circle1Pos, this.state.circle2Pos, this.state.circle3Pos, this.state.circle4Pos]
      this.ctx.canvas.onmousemove = event => {
        event.preventDefault();
        points[0] = [event.layerX, event.layerY];
        this.updateCanvas();
      }

      if (this.state.start1Move) {
        console.log(this.state)
        this.state.prevCircle1Pos = this.state.circle1Pos;
        let square1distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square1Pos[0]) * (this.state.circle1Pos[0] - this.state.square1Pos[0])) + ((this.state.circle1Pos[1] - this.state.square1Pos[1]) * (this.state.circle1Pos[1] - this.state.square1Pos[1])))
        let square2distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square2Pos[0]) * (this.state.circle1Pos[0] - this.state.square2Pos[0])) + ((this.state.circle1Pos[1] - this.state.square2Pos[1]) * (this.state.circle1Pos[1] - this.state.square2Pos[1])))
        let square3distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square3Pos[0]) * (this.state.circle1Pos[0] - this.state.square3Pos[0])) + ((this.state.circle1Pos[1] - this.state.square3Pos[1]) * (this.state.circle1Pos[1] - this.state.square3Pos[1])))
        let square4distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square4Pos[0]) * (this.state.circle1Pos[0] - this.state.square4Pos[0])) + ((this.state.circle1Pos[1] - this.state.square4Pos[1]) * (this.state.circle1Pos[1] - this.state.square4Pos[1])))
        let square5distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square5Pos[0]) * (this.state.circle1Pos[0] - this.state.square5Pos[0])) + ((this.state.circle1Pos[1] - this.state.square5Pos[1]) * (this.state.circle1Pos[1] - this.state.square5Pos[1])))
        let square6distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square6Pos[0]) * (this.state.circle1Pos[0] - this.state.square6Pos[0])) + ((this.state.circle1Pos[1] - this.state.square6Pos[1]) * (this.state.circle1Pos[1] - this.state.square6Pos[1])))
        let square7distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square7Pos[0]) * (this.state.circle1Pos[0] - this.state.square7Pos[0])) + ((this.state.circle1Pos[1] - this.state.square7Pos[1]) * (this.state.circle1Pos[1] - this.state.square7Pos[1])))
        let square8distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square8Pos[0]) * (this.state.circle1Pos[0] - this.state.square8Pos[0])) + ((this.state.circle1Pos[1] - this.state.square8Pos[1]) * (this.state.circle1Pos[1] - this.state.square8Pos[1])))
        let square9distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square9Pos[0]) * (this.state.circle1Pos[0] - this.state.square9Pos[0])) + ((this.state.circle1Pos[1] - this.state.square9Pos[1]) * (this.state.circle1Pos[1] - this.state.square9Pos[1])))
        let square10distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square10Pos[0]) * (this.state.circle1Pos[0] - this.state.square10Pos[0])) + ((this.state.circle1Pos[1] - this.state.square10Pos[1]) * (this.state.circle1Pos[1] - this.state.square10Pos[1])))
        let square11distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square11Pos[0]) * (this.state.circle1Pos[0] - this.state.square11Pos[0])) + ((this.state.circle1Pos[1] - this.state.square11Pos[1]) * (this.state.circle1Pos[1] - this.state.square11Pos[1])))
        let square12distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square12Pos[0]) * (this.state.circle1Pos[0] - this.state.square12Pos[0])) + ((this.state.circle1Pos[1] - this.state.square12Pos[1]) * (this.state.circle1Pos[1] - this.state.square12Pos[1])))
        let square13distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square13Pos[0]) * (this.state.circle1Pos[0] - this.state.square13Pos[0])) + ((this.state.circle1Pos[1] - this.state.square13Pos[1]) * (this.state.circle1Pos[1] - this.state.square13Pos[1])))
        let square14distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square14Pos[0]) * (this.state.circle1Pos[0] - this.state.square14Pos[0])) + ((this.state.circle1Pos[1] - this.state.square14Pos[1]) * (this.state.circle1Pos[1] - this.state.square14Pos[1])))
        let square15distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square15Pos[0]) * (this.state.circle1Pos[0] - this.state.square15Pos[0])) + ((this.state.circle1Pos[1] - this.state.square15Pos[1]) * (this.state.circle1Pos[1] - this.state.square15Pos[1])))
        let square16distanceFromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square15Pos[0]) * (this.state.circle1Pos[0] - this.state.square16Pos[0])) + ((this.state.circle1Pos[1] - this.state.square16Pos[1]) * (this.state.circle1Pos[1] - this.state.square16Pos[1])))
        console.log(square1distanceFromOsc1)
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          circle1Pos: [posX, posY],
          square1distanceFromOsc1: square1distanceFromOsc1,
          square2distanceFromOsc1: square2distanceFromOsc1,
          square3distanceFromOsc1: square3distanceFromOsc1,
          square4distanceFromOsc1: square4distanceFromOsc1,
          square5distanceFromOsc1: square5distanceFromOsc1,
          square6distanceFromOsc1: square6distanceFromOsc1,
          square7distanceFromOsc1: square7distanceFromOsc1,
          square8distanceFromOsc1: square8distanceFromOsc1,
          square9distanceFromOsc1: square9distanceFromOsc1,
          square10distanceFromOsc1: square10distanceFromOsc1,
          square11distanceFromOsc1: square11distanceFromOsc1,
          square12distanceFromOsc1: square12distanceFromOsc1,
          square13distanceFromOsc1: square13distanceFromOsc1,
          square14distanceFromOsc1: square14distanceFromOsc1,
          square15distanceFromOsc1: square15distanceFromOsc1,
          square16distanceFromOsc1: square16distanceFromOsc1,
        });
        console.log(this.state)
        this.updateCanvas();
        this.updateFrequencyOSC(posY)
      }

      if (this.state.start2Move) {
        console.log('heyyyyyyyyyyyyyyy')
        this.state.prevCircle2Pos = this.state.circle2Pos;
        let square1distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square1Pos[0]) * (this.state.circle2Pos[0] - this.state.square1Pos[0])) + ((this.state.circle2Pos[1] - this.state.square1Pos[1]) * (this.state.circle2Pos[1] - this.state.square1Pos[1])))
        let square2distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square2Pos[0]) * (this.state.circle2Pos[0] - this.state.square2Pos[0])) + ((this.state.circle2Pos[1] - this.state.square2Pos[1]) * (this.state.circle2Pos[1] - this.state.square2Pos[1])))
        let square3distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square3Pos[0]) * (this.state.circle2Pos[0] - this.state.square3Pos[0])) + ((this.state.circle2Pos[1] - this.state.square3Pos[1]) * (this.state.circle2Pos[1] - this.state.square3Pos[1])))
        let square4distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square4Pos[0]) * (this.state.circle2Pos[0] - this.state.square4Pos[0])) + ((this.state.circle2Pos[1] - this.state.square4Pos[1]) * (this.state.circle2Pos[1] - this.state.square4Pos[1])))
        let square5distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square5Pos[0]) * (this.state.circle2Pos[0] - this.state.square5Pos[0])) + ((this.state.circle2Pos[1] - this.state.square5Pos[1]) * (this.state.circle2Pos[1] - this.state.square5Pos[1])))
        let square6distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square6Pos[0]) * (this.state.circle2Pos[0] - this.state.square6Pos[0])) + ((this.state.circle2Pos[1] - this.state.square6Pos[1]) * (this.state.circle2Pos[1] - this.state.square6Pos[1])))
        let square7distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square7Pos[0]) * (this.state.circle2Pos[0] - this.state.square7Pos[0])) + ((this.state.circle2Pos[1] - this.state.square7Pos[1]) * (this.state.circle2Pos[1] - this.state.square7Pos[1])))
        let square8distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square8Pos[0]) * (this.state.circle2Pos[0] - this.state.square8Pos[0])) + ((this.state.circle2Pos[1] - this.state.square8Pos[1]) * (this.state.circle2Pos[1] - this.state.square8Pos[1])))
        let square9distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square9Pos[0]) * (this.state.circle2Pos[0] - this.state.square9Pos[0])) + ((this.state.circle2Pos[1] - this.state.square9Pos[1]) * (this.state.circle2Pos[1] - this.state.square9Pos[1])))
        let square10distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square10Pos[0]) * (this.state.circle2Pos[0] - this.state.square10Pos[0])) + ((this.state.circle2Pos[1] - this.state.square10Pos[1]) * (this.state.circle2Pos[1] - this.state.square10Pos[1])))
        let square11distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square11Pos[0]) * (this.state.circle2Pos[0] - this.state.square11Pos[0])) + ((this.state.circle2Pos[1] - this.state.square11Pos[1]) * (this.state.circle2Pos[1] - this.state.square11Pos[1])))
        let square12distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square12Pos[0]) * (this.state.circle2Pos[0] - this.state.square12Pos[0])) + ((this.state.circle2Pos[1] - this.state.square12Pos[1]) * (this.state.circle2Pos[1] - this.state.square12Pos[1])))
        let square13distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square13Pos[0]) * (this.state.circle2Pos[0] - this.state.square13Pos[0])) + ((this.state.circle2Pos[1] - this.state.square13Pos[1]) * (this.state.circle2Pos[1] - this.state.square13Pos[1])))
        let square14distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square14Pos[0]) * (this.state.circle2Pos[0] - this.state.square14Pos[0])) + ((this.state.circle2Pos[1] - this.state.square14Pos[1]) * (this.state.circle2Pos[1] - this.state.square14Pos[1])))
        let square15distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square15Pos[0]) * (this.state.circle2Pos[0] - this.state.square15Pos[0])) + ((this.state.circle2Pos[1] - this.state.square15Pos[1]) * (this.state.circle2Pos[1] - this.state.square15Pos[1])))
        let square16distanceFromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square15Pos[0]) * (this.state.circle2Pos[0] - this.state.square16Pos[0])) + ((this.state.circle2Pos[1] - this.state.square16Pos[1]) * (this.state.circle2Pos[1] - this.state.square16Pos[1])))
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          circle2Pos: [posX, posY],
          square1distanceFromOsc2: square1distanceFromOsc2,
          square2distanceFromOsc2: square2distanceFromOsc2,
          square3distanceFromOsc2: square3distanceFromOsc2,
          square4distanceFromOsc2: square4distanceFromOsc2,
          square5distanceFromOsc2: square5distanceFromOsc2,
          square6distanceFromOsc2: square6distanceFromOsc2,
          square7distanceFromOsc2: square7distanceFromOsc2,
          square8distanceFromOsc2: square8distanceFromOsc2,
          square9distanceFromOsc2: square9distanceFromOsc2,
          square10distanceFromOsc2: square10distanceFromOsc2,
          square11distanceFromOsc2: square11distanceFromOsc2,
          square12distanceFromOsc2: square12distanceFromOsc2,
          square13distanceFromOsc2: square13distanceFromOsc2,
          square14distanceFromOsc2: square14distanceFromOsc2,
          square15distanceFromOsc2: square15distanceFromOsc2,
          square16distanceFromOsc2: square16distanceFromOsc2,

        });
        console.log(this.state)
        this.updateCanvas();
        this.updateFrequencyOSC2(posY)
      }

      if (this.state.start3Move) {
        this.state.prevCircle3Pos = this.state.circle3Pos;
        let square1distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square1Pos[0]) * (this.state.circle3Pos[0] - this.state.square1Pos[0])) + ((this.state.circle3Pos[1] - this.state.square1Pos[1]) * (this.state.circle3Pos[1] - this.state.square1Pos[1])))
        let square2distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square2Pos[0]) * (this.state.circle3Pos[0] - this.state.square2Pos[0])) + ((this.state.circle3Pos[1] - this.state.square2Pos[1]) * (this.state.circle3Pos[1] - this.state.square2Pos[1])))
        let square3distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square3Pos[0]) * (this.state.circle3Pos[0] - this.state.square3Pos[0])) + ((this.state.circle3Pos[1] - this.state.square3Pos[1]) * (this.state.circle3Pos[1] - this.state.square3Pos[1])))
        let square4distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square4Pos[0]) * (this.state.circle3Pos[0] - this.state.square4Pos[0])) + ((this.state.circle3Pos[1] - this.state.square4Pos[1]) * (this.state.circle3Pos[1] - this.state.square4Pos[1])))
        let square5distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square5Pos[0]) * (this.state.circle3Pos[0] - this.state.square5Pos[0])) + ((this.state.circle3Pos[1] - this.state.square5Pos[1]) * (this.state.circle3Pos[1] - this.state.square5Pos[1])))
        let square6distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square6Pos[0]) * (this.state.circle3Pos[0] - this.state.square6Pos[0])) + ((this.state.circle3Pos[1] - this.state.square6Pos[1]) * (this.state.circle3Pos[1] - this.state.square6Pos[1])))
        let square7distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square7Pos[0]) * (this.state.circle3Pos[0] - this.state.square7Pos[0])) + ((this.state.circle3Pos[1] - this.state.square7Pos[1]) * (this.state.circle3Pos[1] - this.state.square7Pos[1])))
        let square8distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square8Pos[0]) * (this.state.circle3Pos[0] - this.state.square8Pos[0])) + ((this.state.circle3Pos[1] - this.state.square8Pos[1]) * (this.state.circle3Pos[1] - this.state.square8Pos[1])))
        let square9distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square9Pos[0]) * (this.state.circle3Pos[0] - this.state.square9Pos[0])) + ((this.state.circle3Pos[1] - this.state.square9Pos[1]) * (this.state.circle3Pos[1] - this.state.square9Pos[1])))
        let square10distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square10Pos[0]) * (this.state.circle3Pos[0] - this.state.square10Pos[0])) + ((this.state.circle3Pos[1] - this.state.square10Pos[1]) * (this.state.circle3Pos[1] - this.state.square10Pos[1])))
        let square11distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square11Pos[0]) * (this.state.circle3Pos[0] - this.state.square11Pos[0])) + ((this.state.circle3Pos[1] - this.state.square11Pos[1]) * (this.state.circle3Pos[1] - this.state.square11Pos[1])))
        let square12distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square12Pos[0]) * (this.state.circle3Pos[0] - this.state.square12Pos[0])) + ((this.state.circle3Pos[1] - this.state.square12Pos[1]) * (this.state.circle3Pos[1] - this.state.square12Pos[1])))
        let square13distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square13Pos[0]) * (this.state.circle3Pos[0] - this.state.square13Pos[0])) + ((this.state.circle3Pos[1] - this.state.square13Pos[1]) * (this.state.circle3Pos[1] - this.state.square13Pos[1])))
        let square14distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square14Pos[0]) * (this.state.circle3Pos[0] - this.state.square14Pos[0])) + ((this.state.circle3Pos[1] - this.state.square14Pos[1]) * (this.state.circle3Pos[1] - this.state.square14Pos[1])))
        let square15distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square15Pos[0]) * (this.state.circle3Pos[0] - this.state.square15Pos[0])) + ((this.state.circle3Pos[1] - this.state.square15Pos[1]) * (this.state.circle3Pos[1] - this.state.square15Pos[1])))
        let square16distanceFromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square15Pos[0]) * (this.state.circle3Pos[0] - this.state.square16Pos[0])) + ((this.state.circle3Pos[1] - this.state.square16Pos[1]) * (this.state.circle3Pos[1] - this.state.square16Pos[1])))
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          circle3Pos: [posX, posY],
          square1distanceFromOsc3: square1distanceFromOsc3,
          square2distanceFromOsc3: square2distanceFromOsc3,
          square3distanceFromOsc3: square3distanceFromOsc3,
          square4distanceFromOsc3: square4distanceFromOsc3,
          square5distanceFromOsc3: square5distanceFromOsc3,
          square6distanceFromOsc3: square6distanceFromOsc3,
          square7distanceFromOsc3: square7distanceFromOsc3,
          square8distanceFromOsc3: square8distanceFromOsc3,
          square9distanceFromOsc3: square9distanceFromOsc3,
          square10distanceFromOsc3: square10distanceFromOsc3,
          square11distanceFromOsc3: square11distanceFromOsc3,
          square12distanceFromOsc3: square12distanceFromOsc3,
          square13distanceFromOsc3: square13distanceFromOsc3,
          square14distanceFromOsc3: square14distanceFromOsc3,
          square15distanceFromOsc3: square15distanceFromOsc3,
          square16distanceFromOsc3: square16distanceFromOsc3,

        });
        console.log(this.state)
        this.updateCanvas();
        this.updateFrequencyOSC3(posY)
      }

      if (this.state.start4Move) {
        this.state.prevCircle4Pos = this.state.circle4Pos;
        let square1distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square1Pos[0]) * (this.state.circle4Pos[0] - this.state.square1Pos[0])) + ((this.state.circle4Pos[1] - this.state.square1Pos[1]) * (this.state.circle4Pos[1] - this.state.square1Pos[1])))
        let square2distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square2Pos[0]) * (this.state.circle4Pos[0] - this.state.square2Pos[0])) + ((this.state.circle4Pos[1] - this.state.square2Pos[1]) * (this.state.circle4Pos[1] - this.state.square2Pos[1])))
        let square3distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square3Pos[0]) * (this.state.circle4Pos[0] - this.state.square3Pos[0])) + ((this.state.circle4Pos[1] - this.state.square3Pos[1]) * (this.state.circle4Pos[1] - this.state.square3Pos[1])))
        let square4distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square4Pos[0]) * (this.state.circle4Pos[0] - this.state.square4Pos[0])) + ((this.state.circle4Pos[1] - this.state.square4Pos[1]) * (this.state.circle4Pos[1] - this.state.square4Pos[1])))
        let square5distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square5Pos[0]) * (this.state.circle4Pos[0] - this.state.square5Pos[0])) + ((this.state.circle4Pos[1] - this.state.square5Pos[1]) * (this.state.circle4Pos[1] - this.state.square5Pos[1])))
        let square6distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square6Pos[0]) * (this.state.circle4Pos[0] - this.state.square6Pos[0])) + ((this.state.circle4Pos[1] - this.state.square6Pos[1]) * (this.state.circle4Pos[1] - this.state.square6Pos[1])))
        let square7distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square7Pos[0]) * (this.state.circle4Pos[0] - this.state.square7Pos[0])) + ((this.state.circle4Pos[1] - this.state.square7Pos[1]) * (this.state.circle4Pos[1] - this.state.square7Pos[1])))
        let square8distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square8Pos[0]) * (this.state.circle4Pos[0] - this.state.square8Pos[0])) + ((this.state.circle4Pos[1] - this.state.square8Pos[1]) * (this.state.circle4Pos[1] - this.state.square8Pos[1])))
        let square9distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square9Pos[0]) * (this.state.circle4Pos[0] - this.state.square9Pos[0])) + ((this.state.circle4Pos[1] - this.state.square9Pos[1]) * (this.state.circle4Pos[1] - this.state.square9Pos[1])))
        let square10distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square10Pos[0]) * (this.state.circle4Pos[0] - this.state.square10Pos[0])) + ((this.state.circle4Pos[1] - this.state.square10Pos[1]) * (this.state.circle4Pos[1] - this.state.square10Pos[1])))
        let square11distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square11Pos[0]) * (this.state.circle4Pos[0] - this.state.square11Pos[0])) + ((this.state.circle4Pos[1] - this.state.square11Pos[1]) * (this.state.circle4Pos[1] - this.state.square11Pos[1])))
        let square12distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square12Pos[0]) * (this.state.circle4Pos[0] - this.state.square12Pos[0])) + ((this.state.circle4Pos[1] - this.state.square12Pos[1]) * (this.state.circle4Pos[1] - this.state.square12Pos[1])))
        let square13distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square13Pos[0]) * (this.state.circle4Pos[0] - this.state.square13Pos[0])) + ((this.state.circle4Pos[1] - this.state.square13Pos[1]) * (this.state.circle4Pos[1] - this.state.square13Pos[1])))
        let square14distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square14Pos[0]) * (this.state.circle4Pos[0] - this.state.square14Pos[0])) + ((this.state.circle4Pos[1] - this.state.square14Pos[1]) * (this.state.circle4Pos[1] - this.state.square14Pos[1])))
        let square15distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square15Pos[0]) * (this.state.circle4Pos[0] - this.state.square15Pos[0])) + ((this.state.circle4Pos[1] - this.state.square15Pos[1]) * (this.state.circle4Pos[1] - this.state.square15Pos[1])))
        let square16distanceFromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square15Pos[0]) * (this.state.circle4Pos[0] - this.state.square16Pos[0])) + ((this.state.circle4Pos[1] - this.state.square16Pos[1]) * (this.state.circle4Pos[1] - this.state.square16Pos[1])))
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          circle4Pos: [posX, posY],
          square1distanceFromOsc4: square1distanceFromOsc4,
          square2distanceFromOsc4: square2distanceFromOsc4,
          square3distanceFromOsc4: square3distanceFromOsc4,
          square4distanceFromOsc4: square4distanceFromOsc4,
          square5distanceFromOsc4: square5distanceFromOsc4,
          square6distanceFromOsc4: square6distanceFromOsc4,
          square7distanceFromOsc4: square7distanceFromOsc4,
          square8distanceFromOsc4: square8distanceFromOsc4,
          square9distanceFromOsc4: square9distanceFromOsc4,
          square10distanceFromOsc4: square10distanceFromOsc4,
          square11distanceFromOsc4: square11distanceFromOsc4,
          square12distanceFromOsc4: square12distanceFromOsc4,
          square13distanceFromOsc4: square13distanceFromOsc4,
          square14distanceFromOsc4: square14distanceFromOsc4,
          square15distanceFromOsc4: square15distanceFromOsc4,
          square16distanceFromOsc4: square16distanceFromOsc4,
        });
        console.log(this.state)
        this.updateCanvas();
        this.updateFrequencyOSC4(posY)
      }

      if (this.state.start5Move) {
        this.state.prevSquare1Pos = this.state.square1Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square1Pos: [posX, posY],
        });
        console.log(this.state)
        this.updateCanvas();
        this.changeLFOType();
        this.changeLFOFreq();
        this.changeLFO2Type();
        this.changeLFO2Freq();
        // this.changeLFO3Type();
        // this.changeLFO3Freq();
        // this.changeLFO4Type();
        // this.changeLFO4Freq();
      }

      if (this.state.start6Move) {
        this.state.prevSquare2Pos = this.state.square2Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square2Pos: [posX, posY],

        });
        
        this.updateCanvas();
      }

      if (this.state.start7Move) {
        this.state.prevSquare3Pos = this.state.square3Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square3Pos: [posX, posY],
        });

        this.updateCanvas();
      }  

      if (this.state.start7Move) {
        this.state.prevSquare4Pos = this.state.square4Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square4Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      if (this.state.start8Move) {
        this.state.prevSquare4Pos = this.state.square4Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square4Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      if (this.state.start9Move) {
        this.state.prevSquare5Pos = this.state.square5Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square5Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      if (this.state.start10Move) {
        this.state.prevSquare6Pos = this.state.square6Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square6Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      if (this.state.start11Move) {
        this.state.prevSquare7Pos = this.state.square7Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square7Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      if (this.state.start12Move) {
        this.state.prevSquare8Pos = this.state.square8Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square8Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      if (this.state.start13Move) {
        this.state.prevSquare9Pos = this.state.square9Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square9Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      if (this.state.start14Move) {
        this.state.prevSquare10Pos = this.state.square10Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square10Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      if (this.state.start15Move) {
        this.state.prevSquare11Pos = this.state.square11Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square11Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      if (this.state.start16Move) {
        this.state.prevSquare12Pos = this.state.square12Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square12Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      if (this.state.start17Move) {
        this.state.prevSquare13Pos = this.state.square13Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square13Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      if (this.state.start18Move) {
        this.state.prevSquare14Pos = this.state.square14Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square14Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      if (this.state.start19Move) {
        this.state.prevSquare15Pos = this.state.square15Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square15Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      if (this.state.start20Move) {
        this.state.prevSquare16Pos = this.state.square16Pos;
        var posX = event.layerX;
        var posY = event.layerY;
         if (posX < 0) {
          posX = 0;
        }

        if (posY < 0) {
          posY = 0;
        }

        if (posX > this.props.width) {
          posX = this.props.width;
        }

        if (posY > this.props.height) {
          posY = this.props.height;
        }

        this.setState({
          square16Pos: [posX, posY],
        });

        this.updateCanvas();
      }

      this.updateCanvas();
    }

    //////GET DISTANCE FUNCTION/////////
   


/////////OSC1 FUNCTIONS/////////////
      
    updateFrequencyOSC(posY) {
      console.log(this.state.oscFreq, this.state.circle1Pos)
      let oscFreq = posY * Math.floor(Math.random() * (7) - 1 + 1) + 20
      this.setState({oscFreq: oscFreq})
      this.props.changeOSCFreq(oscFreq);
      console.log(oscFreq)
    }

    turnOnLFO() {
      if (this.props.isLFOOn) {
        if (!this.state.isLFOstarted) {
          this.lfo.start(0);
          this.state.isLFOstarted = true;
        }
      }
      else {
        if (this.state.isLFOstarted) {
          this.lfo.stop(0);
          this.state.isLFOstarted = false;
        }
      }
    }

    changeLFOType() {
      let lfoWaveTypes = ['sine', 'square', 'triangle', 'sawtooth']
      let randomType = Math.floor(Math.random()*lfoWaveTypes.length)
      this.props.changeLFOType(randomType)
    }

    changeLFOFreq() {
      let lfoFreq = Math.floor((this.state.square1distanceFromOsc1 * .002) * Math.floor(Math.random() * (12) - 1 + 1) + 1)
      this.props.changeLFOFreq(lfoFreq)
    }

    toggleOSC1chorusBypass(){

    }

    changeOSC1chorusDepth(value) {

    }

    changeOSC1chorusRate(value) {

    }

    toggleOSC1filterBypass() {

    }

    changeOSC1filterDepth(value) {

    }

    changeOSC1filterRate(value) {

    }

    toggleOSC1filter2Bypass() {

    }

    changeOSC1filter2Depth(value) {

    }

    changeOSC1filter2Rate(value) {

    }

    toggleOSC1tremoloBypass() {

    }

    changeOSC1tremoloIntensity(value) {

    }

    changeOSC1tremoloRate(value) {

    }

    toggleOSC1bitcrusherBypass() {

    }

    changeOSC1bitcrusherBits(value) {

    }

    changeOSC1bitcrusherBufferSize(value) {

    }

    toggleOSC1moogFilterBypass() {

    }

    changeOSC1moogFilterCutoff(value) {

    }

    changeOSC1moogFilterBufferSize(value) {

    }

    changeOSC1moogFilterResonance(value) {

    }

    toggleOSC1moogFilter2Bypass() {

    }

    changeOSC1moogFilter2Cutoff(value) {

    }

    changeOSC1moogFilter2BufferSize(value) {

    }

    changeOSC1moogFilter2Resonance(value) {
      
    }

    toggleOSC1reverbBypass() {

    }

    changeOSC1reverbLevel(value) {

    }

    toggleOSC1pannerBypass() {

    }

    changeOSC1pannerPan(value) {

    }

    toggleOSC1phaserBypass() {

    }

    changeOSC1phaserRate(value) {

    }

    changeOSC1phaserDepth(value) {

    }

    changeOSC1phaserFeedback(value) {

    }

    toggleOSC1overdriveBypass() {

    }

    changeOSC1overdriveDrive(value) {

    }

    changeOSC1overdriveGain(value) {

    }

/////////OSC2 FUNCTIONS/////////////
    updateFrequencyOSC2(posY) {
      let osc2Freq = posY * Math.floor(Math.random() * (7) - 1 + 1) + 20
      this.setState({osc2Freq: osc2Freq})
      this.props.changeOSC2Freq(osc2Freq);
      console.log(osc2Freq)
    }
    


    turnOnLFO2() {
      console.log( this.props.isLFO2On)
      console.log(this.state.isLFOstarted)
      this.props.turnOnLFO2(!this.props.isLFO2On);
      console.log(this.props.isLFO2On)
    }

    changeLFO2Type() {
      let lfoWaveTypes = ['sine', 'square', 'triangle', 'sawtooth']
      let randomType = Math.floor(Math.random()*lfoWaveTypes.length)
      console.log(randomType)
      this.props.changeLFO2Type(randomType)
    }

    changeLFO2Freq() {
      let lfo2Freq = Math.floor((this.state.square1distanceFromOsc1 * .002) * Math.floor(Math.random() * (12) - 1 + 1) + 1)
      this.props.changeLFO2Freq(lfo2Freq)
      console.log(lfo2Freq)
    }

    toggleOSC2chorusBypass(){
      console.log(this.state)
      this.props.toggleOSC2chorusBypass(!this.props.osc2chorusBypass)
      console.log(this.props.osc2chorusBypass)
    }

    changeOSC2chorusDepth(posY) {
      // let osc2Freq = posY * Math.floor(Math.random() * (7) - 1 + 1) + 20
      // this.setState({osc2Freq: osc2Freq})
      // this.props.changeOSC2Freq(osc2Freq);
      // console.log(osc2Freq)
    }

    changeOSC2chorusRate(value) {

    }

    toggleOSC2filterBypass() {
      console.log(this.props.osc2filterBypass)
      this.props.toggleOSC2filterBypass(!this.props.osc2filterBypass)
      console.log(this.props.osc2filterBypass)
    }

    changeOSC2filterDepth(value) {

    }

    changeOSC2filterRate(value) {

    }

    toggleOSC2filter2Bypass() {
      console.log(this.props.osc2filter2Bypass)
      this.props.toggleOSC2filter2Bypass(!this.props.osc2filter2Bypass)
      console.log(this.props.osc2filter2Bypass)
    }
    

    changeOSC2filter2Depth(value) {

    }

    changeOSC2filter2Rate(value) {

    }

    toggleOSC2tremoloBypass() {
      console.log(this.props.osc2tremoloBypass)
      this.props.toggleOSC2tremoloBypass(!this.props.osc2tremoloBypass)
      console.log(this.props.osc2tremoloBypass)
    }

    changeOSC2tremoloIntensity(value) {

    }

    changeOSC2tremoloRate(value) {

    }

    toggleOSC2bitcrusherBypass() {
      console.log(this.props.osc2bitcrusherBypass)
      this.props.toggleOSC2bitcrusherBypass(!this.props.osc2bitcrusherBypass)
      console.log(this.props.osc2bitcrusherBypass)
    }

    changeOSC2bitcrusherBits(value) {

    }

    changeOSC2bitcrusherBufferSize(value) {

    }

    toggleOSC2moogFilterBypass() {
      console.log(this.props.osc2moogFilterBypass)
      this.props.toggleOSC2moogFilterBypass(!this.props.osc2moogFilterBypass)
      console.log(this.props.osc2moogFilterBypass)
    }

    changeOSC2moogFilterCutoff(value) {

    }

    changeOSC2moogFilterBufferSize(value) {

    }

    changeOSC2moogFilterResonance(value) {

    }

    toggleOSC2moogFilter2Bypass() {
      console.log(this.props.osc2moogFilter2Bypass)
      this.props.toggleOSC2moogFilter2Bypass(!this.props.osc2moogFilter2Bypass)
      console.log(this.props.osc2moogFilter2Bypass)
    }

    changeOSC2moogFilter2Cutoff(value) {

    }

    changeOSC2moogFilter2BufferSize(value) {

    }

    changeOSC2moogFilter2Resonance(value) {
      
    }

    toggleOSC2reverbBypass() {
      console.log(this.props.osc2reverbBypass)
      this.props.toggleOSC2reverbBypass(!this.props.osc2reverbBypass)
      console.log(this.props.osc2reverbBypass)
    }

    changeOSC2reverbLevel(value) {

    }

    toggleOSC2pannerBypass() {
      console.log(this.props.osc2pannerBypass)
      this.props.toggleOSC2pannerBypass(!this.props.osc2pannerBypass)
      console.log(this.props.osc2pannerBypass)
    }

    changeOSC2pannerPan(value) {

    }

    toggleOSC2phaserBypass() {
      console.log(this.props.osc2phaserBypass)
      this.props.toggleOSC2phaserBypass(!this.props.osc2phaserBypass)
      console.log(this.props.osc2phaserBypass)
    }

    changeOSC2phaserRate(value) {

    }

    changeOSC2phaserDepth(value) {

    }

    changeOSC2phaserFeedback(value) {

    }

    toggleOSC2overdriveBypass() {
      console.log(this.props.osc2overdriveBypass)
      this.props.toggleOSC2overdriveBypass(!this.props.osc2overdriveBypass)
      console.log(this.props.osc2overdriveBypass)
    }

    changeOSC2overdriveDrive(value) {

    }

    changeOSC2overdriveGain(value) {

    }



/////////OSC3 FUNCTIONS/////////////
    updateFrequencyOSC3(posY) {
      console.log(this.state.osc3Freq)
      let osc3Freq = (1000 - posY * .1)
      this.props.changeOSC3Freq(osc3Freq);
    }


    turnOnLFO3() {
      this.props.turnOnLFO(this.props.isLFOOn)
    }

    changeLFO3Type(wave) {

    }

    changeLFOFreq3(value) {
      
    }

    toggleOSC3chorusBypass(){

    }

    changeOSC3chorusDepth(value) {

    }

    changeOSC3chorusRate(value) {

    }

    toggleOSC3filterBypass() {

    }

    changeOSC3filterDepth(value) {

    }

    changeOSC3filterRate(value) {

    }

    toggleOSC3filter2Bypass() {

    }

    changeOSC3filter2Depth(value) {

    }

    changeOSC3filter2Rate(value) {

    }

    toggleOSC3tremoloBypass() {

    }

    changeOSC3tremoloIntensity(value) {

    }

    changeOSC3tremoloRate(value) {

    }

    toggleOSC3bitcrusherBypass() {

    }

    changeOSC3bitcrusherBits(value) {

    }

    changeOSC3bitcrusherBufferSize(value) {

    }

    toggleOSC3moogFilterBypass() {

    }

    changeOSC3moogFilterCutoff(value) {

    }

    changeOSC3moogFilterBufferSize(value) {

    }

    changeOSC3moogFilterResonance(value) {

    }

    toggleOSC3moogFilter2Bypass() {

    }

    changeOSC3moogFilter2Cutoff(value) {

    }

    changeOSC3moogFilter2BufferSize(value) {

    }

    changeOSC3moogFilter2Resonance(value) {
      
    }

    toggleOSC3reverbBypass() {

    }

    changeOSC3reverbLevel(value) {

    }

    toggleOSC3pannerBypass() {

    }

    changeOSC3pannerPan(value) {

    }

    toggleOSC3phaserBypass() {

    }

    changeOSC3phaserRate(value) {

    }

    changeOSC3phaserDepth(value) {

    }

    changeOSC3phaserFeedback(value) {

    }

    toggleOSC3overdriveBypass() {

    }

    changeOSC3overdriveDrive(value) {

    }

    changeOSC3overdriveGain(value) {

    }


/////////OSC4 FUNCTIONS/////////////
    updateFrequencyOSC4() {
    
      let osc4Freq = this.state.circle4Pos[1] * Math.floor(Math.random() * (7) - 1 + 1) + 20
      this.props.changeOSC4Freq(osc4Freq);
    }



    turnOnLFO4() {
      this.props.turnOnLFO4(this.props.isLFOOn)
    }

    changeLFO4Type(wave) {

    }

    changeLFO4Freq(value) {
      
    }

    toggleOSC4chorusBypass(){

    }

    changeOSC4chorusDepth(value) {

    }

    changeOSC4chorusRate(value) {

    }

    toggleOSC4filterBypass() {

    }

    changeOSC4filterDepth(value) {

    }

    changeOSC4filterRate(value) {

    }

    toggleOSC4filter2Bypass() {

    }

    changeOSC4filter2Depth(value) {

    }

    changeOSC4filter2Rate(value) {

    }

    toggleOSC4tremoloBypass() {

    }

    changeOSC4tremoloIntensity(value) {

    }

    changeOSC4tremoloRate(value) {

    }

    toggleOSC4bitcrusherBypass() {

    }

    changeOSC4bitcrusherBits(value) {

    }

    changeOSC4bitcrusherBufferSize(value) {

    }

    toggleOSC4moogFilterBypass() {

    }

    changeOSC4moogFilterCutoff(value) {

    }

    changeOSC4moogFilterBufferSize(value) {

    }

    changeOSC4moogFilterResonance(value) {

    }

    toggleOSC4moogFilter2Bypass() {

    }

    changeOSC4moogFilter2Cutoff(value) {

    }

    changeOSC4moogFilter2BufferSize(value) {

    }

    changeOSC4moogFilter2Resonance(value) {
      
    }

    toggleOSC4reverbBypass() {

    }

    changeOSC4reverbLevel(value) {

    }

    toggleOSC4pannerBypass() {

    }

    changeOSC4pannerPan(value) {

    }

    toggleOSC4phaserBypass() {

    }

    changeOSC4phaserRate(value) {

    }

    changeOSC4phaserDepth(value) {

    }

    changeOSC4phaserFeedback(value) {

    }

    toggleOSC4overdriveBypass() {

    }

    changeOSC4overdriveDrive(value) {

    }

    changeOSC4overdriveGain(value) {

    }

    

    // updateOsc1Overdrive() {
      // let Osc1Overdrive = this.state.
    

    render() {
        const { color, width, height} = this.props;

        return (
          <div>
          {/* {this.props.oscFreq} */}
          <canvas ref="canvas" width={ width } height={ height }></canvas>   
            

          </div>        
        );
    }

}

function mapStateToProps(state){
  console.log(state.oscFreq, state.osc2Freq)
  return {
    oscFreq: state.oscFreq,

    isLFOOn: state.isLFOOn,
		lfoFreq: state.lfoFreq,
		lfoType: state.lfoType,

    osc1chorusBypass: state.osc1chorusBypass,
		osc1chorusDepth: state.osc1chorusDepth,
		osc1chorusRate: state.osc1chorusRate,

		osc1filterBypass: state.osc1filterBypass,
		osc1filterRate: state.osc1filterRate,
		osc1filterDepth: state.osc1filterDepth,

		osc1filter2Bypass: state.osc1filter2Bypass,
		osc1filter2Rate: state.osc1filter2Rate,
		osc1filter2Depth: state.osc1filter2Depth,

		osc1tremoloBypass: state.osc1tremoloBypass,
		osc1tremoloIntensity: state.osc1tremoloIntensity,
		osc1tremoloRate: state.osc1tremoloRate,

		osc1bitcrusherBypass: state.osc1bitcrusherBypass,
		osc1bitcrusherBits: state.osc1bitcrusherBits,
		osc1bitcrusherBufferSize: state.osc1bitcrusherBufferSize,

		osc1moogFilterBypass: state.osc1moogFilterBypass,
		osc1moogFilterBufferSize: state.osc1moogFilterBufferSize,
		osc1moogFilterCutoff: state.osc1moogFilterCutoff,
		osc1moogFilterResonance: state.osc1moogFilterResonance,

		osc1moogFilter2Bypass: state.osc1moogFilter2Bypass,
		osc1moogFilter2BufferSize: state.osc1moogFilter2BufferSize,
		osc1moogFilter2Cutoff: state.osc1moogFilter2Cutoff,
		osc1moogFilter2Resonance: state.osc1moogFilter2Resonance,

		osc1reverbBypass: state.osc1reverbBypass,
		osc1reverbLevel: state.osc1reverbLevel,

		osc1pannerBypass: state.osc1pannerBypass,
		osc1pannerPan: state.osc1pannerPan,

		osc1phaserBypass: state.osc1phaserBypass,
		osc1phaserRate: state.osc1phaserRate,
		osc1phaserDepth: state.osc1phaserDepth,
		osc1phaserFeedback: state.osc1phaserFeedback,

		osc1overdriveBypass: state.osc1overdriveBypass,
		osc1overdriveDrive: state.osc1overdriveDrive,
		osc1overdriveGain: state.osc1overdriveGain,




    osc2Freq: state.osc2Freq,

    isLFO2On: state.isLFO2On,
		lfo2Freq: state.lfo2Freq,
		lfo2Type: state.lfo2Type,

    osc2chorusBypass: state.osc2chorusBypass,
		osc2chorusDepth: state.osc2chorusDepth,
		osc2chorusRate: state.osc2chorusRate,

		osc2filterBypass: state.osc2filterBypass,
		osc2filterRate: state.osc2filterRate,
		osc2filterDepth: state.osc2filterDepth,

		osc2filter2Bypass: state.osc2filter2Bypass,
		osc2filter2Rate: state.osc2filter2Rate,
		osc2filter2Depth: state.osc2filter2Depth,

		osc2tremoloBypass: state.osc2tremoloBypass,
		osc2tremoloIntensity: state.osc2tremoloIntensity,
		osc2tremoloRate: state.osc2tremoloRate,

		osc2bitcrusherBypass: state.osc2bitcrusherBypass,
		osc2bitcrusherBits: state.osc2bitcrusherBits,
		osc2bitcrusherBufferSize: state.osc2bitcrusherBufferSize,

		osc2moogFilterBypass: state.osc2moogFilterBypass,
		osc2moogFilterBufferSize: state.osc2moogFilterBufferSize,
		osc2moogFilterCutoff: state.osc2moogFilterCutoff,
		osc2moogFilterResonance: state.osc2moogFilterResonance,

		osc2moogFilter2Bypass: state.osc2moogFilter2Bypass,
		osc2moogFilter2BufferSize: state.osc2moogFilter2BufferSize,
		osc2moogFilter2Cutoff: state.osc2moogFilter2Cutoff,
		osc2moogFilter2Resonance: state.osc2moogFilter2Resonance,

		osc2reverbBypass: state.osc2reverbBypass,
		osc2reverbLevel: state.osc2reverbLevel,

		osc2pannerBypass: state.osc2pannerBypass,
		osc2pannerPan: state.osc2pannerPan,

		osc2phaserBypass: state.osc2phaserBypass,
		osc2phaserRate: state.osc2phaserRate,
		osc2phaserDepth: state.osc2phaserDepth,
		osc2phaserFeedback: state.osc2phaserFeedback,

		osc2overdriveBypass: state.osc2overdriveBypass,
		osc2overdriveDrive: state.osc2overdriveDrive,
		osc2overdriveGain: state.osc2overdriveGain,

    osc3Freq: state.osc3Freq,

    isLFO3On: state.isLFO3On,
		lfo3Freq: state.lfo3Freq,
		lfo3Type: state.lfo3Type,

    osc3chorusBypass: state.osc3chorusBypass,
		osc3chorusDepth: state.osc3chorusDepth,
		osc3chorusRate: state.osc3chorusRate,

		osc3filterBypass: state.osc3filterBypass,
		osc3filterRate: state.osc3filterRate,
		osc3filterDepth: state.osc3filterDepth,

		osc3filter2Bypass: state.osc3filter2Bypass,
		osc3filter2Rate: state.osc3filter2Rate,
		osc3filter2Depth: state.osc3filter2Depth,

		osc3tremoloBypass: state.osc3tremoloBypass,
		osc3tremoloIntensity: state.osc3tremoloIntensity,
		osc3tremoloRate: state.osc3tremoloRate,

		osc3bitcrusherBypass: state.osc3bitcrusherBypass,
		osc3bitcrusherBits: state.osc3bitcrusherBits,
		osc3bitcrusherBufferSize: state.osc3bitcrusherBufferSize,

		osc3moogFilterBypass: state.osc3moogFilterBypass,
		osc3moogFilterBufferSize: state.osc3moogFilterBufferSize,
		osc3moogFilterCutoff: state.osc3moogFilterCutoff,
		osc3moogFilterResonance: state.osc3moogFilterResonance,

		osc3moogFilter2Bypass: state.osc3moogFilter2Bypass,
		osc3moogFilter2BufferSize: state.osc3moogFilter2BufferSize,
		osc3moogFilter2Cutoff: state.osc3moogFilter2Cutoff,
		osc3moogFilter2Resonance: state.osc3moogFilter2Resonance,

		osc3reverbBypass: state.osc3reverbBypass,
		osc3reverbLevel: state.osc3reverbLevel,

		osc3pannerBypass: state.osc3pannerBypass,
		osc3pannerPan: state.osc3pannerPan,

		osc3phaserBypass: state.osc3phaserBypass,
		osc3phaserRate: state.osc3phaserRate,
		osc3phaserDepth: state.osc3phaserDepth,
		osc3phaserFeedback: state.osc3phaserFeedback,

		osc3overdriveBypass: state.osc3overdriveBypass,
		osc3overdriveDrive: state.osc3overdriveDrive,
		osc3overdriveGain: state.osc3overdriveGain,

    osc4Freq: state.osc4Freq,

    isLFO4On: state.isLFO4On,
		lfo4Freq: state.lfo4Freq,
		lfo4Type: state.lfo4Type,

    osc4chorusBypass: state.osc4chorusBypass,
		osc4chorusDepth: state.osc4chorusDepth,
		osc4chorusRate: state.osc4chorusRate,

		osc4filterBypass: state.osc4filterBypass,
		osc4filterRate: state.osc4filterRate,
		osc4filterDepth: state.osc4filterDepth,

		osc4filter2Bypass: state.osc4filter2Bypass,
		osc4filter2Rate: state.osc4filter2Rate,
		osc4filter2Depth: state.osc4filter2Depth,

		osc4tremoloBypass: state.osc4tremoloBypass,
		osc4tremoloIntensity: state.osc4tremoloIntensity,
		osc4tremoloRate: state.osc4tremoloRate,

		osc4bitcrusherBypass: state.osc4bitcrusherBypass,
		osc4bitcrusherBits: state.osc4bitcrusherBits,
		osc4bitcrusherBufferSize: state.osc4bitcrusherBufferSize,

		osc4moogFilterBypass: state.osc4moogFilterBypass,
		osc4moogFilterBufferSize: state.osc4moogFilterBufferSize,
		osc4moogFilterCutoff: state.osc4moogFilterCutoff,
		osc4moogFilterResonance: state.osc4moogFilterResonance,

		osc4moogFilter2Bypass: state.osc4moogFilter2Bypass,
		osc4moogFilter2BufferSize: state.osc4moogFilter2BufferSize,
		osc4moogFilter2Cutoff: state.osc4moogFilter2Cutoff,
		osc4moogFilter2Resonance: state.osc4moogFilter2Resonance,

		osc4reverbBypass: state.osc4reverbBypass,
		osc4reverbLevel: state.osc4reverbLevel,

		osc4pannerBypass: state.osc4pannerBypass,
		osc4pannerPan: state.osc4pannerPan,

		osc4phaserBypass: state.osc4phaserBypass,
		osc4phaserRate: state.osc4phaserRate,
		osc4phaserDepth: state.osc4phaserDepth,
		osc4phaserFeedback: state.osc4phaserFeedback,

		osc4overdriveBypass: state.osc4overdriveBypass,
		osc4overdriveDrive: state.osc4overdriveDrive,
		osc4overdriveGain: state.osc4overdriveGain,
  }
}

function mapDispatchToProps(dispatch){
  console.log(dispatch)
  return {
    changeOSCFreq: (value) => dispatch(changeOSCFreq(value)),

    turnOnLFO: () => dispatch(turnOnLFO()),
    changeLFOType: (wave) => dispatch(changeLFOType(wave)),
    changeLFOFreq: (value) => dispatch(changeLFOFreq(value)),

    toggleOSC1chorusBypass: () => dispatch(toggleOSC1chorusBypass()),
    changeOSC1chorusDepth: (value) => dispatch(changeOSC1chorusDepth(value)),
    changeOSC1chorusRate: (value) => dispatch(changeOSC1chorusRate(value)),

    toggleOSC1filterBypass: () => dispatch(toggleOSC1filterBypass()),
    changeOSC1filterDepth: (value) => dispatch(changeOSC1filterDepth(value)),
    changeOSC1filterRate: (value) => dispatch(changeOSC1filterRate(value)),

    toggleOSC1filter2Bypass: () => dispatch(toggleOSC1filter2Bypass()),
    changeOSC1filter2Depth: (value) => dispatch(changeOSC1filter2Depth(value)),
    changeOSC1filter2Rate: (value) => dispatch(changeOSC1filter2Rate(value)),

    toggleOSC1tremoloBypass: () => dispatch(toggleOSC1tremoloBypass()),
    changeOSC1tremoloIntensity: (value) => dispatch(changeOSC1tremoloIntensity(value)),
    changeOSC1tremoloRate: (value) => dispatch(changeOSC1tremoloRate(value)),

    toggleOSC1bitcrusherBypass: () => dispatch(toggleOSC1bitcrusherBypass()),
    changeOSC1bitcrusherBits: (value) => dispatch(changeOSC1bitcrusherBits(value)),
    changeOSC1bitcrusherBufferSize: (value) => dispatch(changeOSC1bitcrusherBufferSize(value)),

    toggleOSC1moogFilterBypass: () => dispatch(toggleOSC1moogFilterBypass()),
    changeOSC1moogFilterCutoff: (value) => dispatch(changeOSC1moogFilterCutoff(value)),
    changeOSC1moogFilterBufferSize: (value) => dispatch(changeOSC1moogFilterBufferSize(value)),
    changeOSC1moogFilterResonance: (value) => dispatch(changeOSC1moogFilterResonance(value)),

    toggleOSC1moogFilter2Bypass: () => dispatch(toggleOSC1moogFilter2Bypass()),
    changeOSC1moogFilter2Cutoff: (value) => dispatch(changeOSC1moogFilter2Cutoff(value)),
    changeOSC1moogFilter2BufferSize: (value) => dispatch(changeOSC1moogFilter2BufferSize(value)),
    changeOSC1moogFilter2Resonance: (value) => dispatch(changeOSC1moogFilter2Resonance(value)),

    toggleOSC1reverbBypass: () => dispatch(toggleOSC1reverbBypass()),
    changeOSC1reverbLevel: (value) => dispatch(changeOSC1reverbLevel(value)),

    toggleOSC1pannerBypass: () => dispatch(toggleOSC1pannerBypass()),
    changeOSC1pannerPan: (value) => dispatch(changeOSC1pannerPan(value)),

    toggleOSC1phaserBypass: () => dispatch(toggleOSC1phaserBypass()),
    changeOSC1phaserRate: (value) => dispatch(changeOSC1phaserRate(value)),
    changeOSC1phaserDepth: (value) => dispatch(changeOSC1phaserDepth(value)),
    changeOSC1phaserFeedback: (value) => dispatch(changeOSC1phaserFeedback(value)),

    toggleOSC1overdriveBypass: () => dispatch(toggleOSC1overdriveBypass()),
    changeOSC1overdriveDrive: (value) => dispatch(changeOSC1overdriveDrive(value)),
    changeOSC1overdriveGain: (value) => dispatch(changeOSC1overdriveGain(value)),




    changeOSC2Freq: (value) => dispatch(changeOSC2Freq(value)),

    turnOnLFO2: () => dispatch(turnOnLFO2()),
    changeLFO2Type: (wave) => dispatch(changeLFO2Type(wave)),
    changeLFO2Freq: (value) => dispatch(changeLFO2Freq(value)),

    toggleOSC2chorusBypass: () => dispatch(toggleOSC2chorusBypass()),
    changeOSC2chorusDepth: (value) => dispatch(changeOSC2chorusDepth(value)),
    changeOSC2chorusRate: (value) => dispatch(changeOSC2chorusRate(value)),

    toggleOSC2filterBypass: () => dispatch(toggleOSC2filterBypass()),
    changeOSC2filterDepth: (value) => dispatch(changeOSC2filterDepth(value)),
    changeOSC2filterRate: (value) => dispatch(changeOSC2filterRate(value)),

    toggleOSC2filter2Bypass: () => dispatch(toggleOSC2filter2Bypass()),
    changeOSC2filter2Depth: (value) => dispatch(changeOSC2filter2Depth(value)),
    changeOSC2filter2Rate: (value) => dispatch(changeOSC2filter2Rate(value)),

    toggleOSC2tremoloBypass: () => dispatch(toggleOSC2tremoloBypass()),
    changeOSC2tremoloIntensity: (value) => dispatch(changeOSC2tremoloIntensity(value)),
    changeOSC2tremoloRate: (value) => dispatch(changeOSC2tremoloRate(value)),

    toggleOSC2bitcrusherBypass: () => dispatch(toggleOSC2bitcrusherBypass()),
    changeOSC2bitcrusherBits: (value) => dispatch(changeOSC2bitcrusherBits(value)),
    changeOSC2bitcrusherBufferSize: (value) => dispatch(changeOSC2bitcrusherBufferSize(value)),

    toggleOSC2moogFilterBypass: () => dispatch(toggleOSC2moogFilterBypass()),
    changeOSC2moogFilterCutoff: (value) => dispatch(changeOSC2moogFilterCutoff(value)),
    changeOSC2moogFilterBufferSize: (value) => dispatch(changeOSC2moogFilterBufferSize(value)),
    changeOSC2moogFilterResonance: (value) => dispatch(changeOSC2moogFilterResonance(value)),

    toggleOSC2moogFilter2Bypass: () => dispatch(toggleOSC2moogFilter2Bypass()),
    changeOSC2moogFilter2Cutoff: (value) => dispatch(changeOSC2moogFilter2Cutoff(value)),
    changeOSC2moogFilter2BufferSize: (value) => dispatch(changeOSC2moogFilter2BufferSize(value)),
    changeOSC2moogFilter2Resonance: (value) => dispatch(changeOSC2moogFilter2Resonance(value)),

    toggleOSC2reverbBypass: () => dispatch(toggleOSC2reverbBypass()),
    changeOSC2reverbLevel: (value) => dispatch(changeOSC2reverbLevel(value)),

    toggleOSC2pannerBypass: () => dispatch(toggleOSC2pannerBypass()),
    changeOSC2pannerPan: (value) => dispatch(changeOSC2pannerPan(value)),

    toggleOSC2phaserBypass: () => dispatch(toggleOSC2phaserBypass()),
    changeOSC2phaserRate: (value) => dispatch(changeOSC2phaserRate(value)),
    changeOSC2phaserDepth: (value) => dispatch(changeOSC2phaserDepth(value)),
    changeOSC2phaserFeedback: (value) => dispatch(changeOSC2phaserFeedback(value)),

    toggleOSC2overdriveBypass: () => dispatch(toggleOSC2overdriveBypass()),
    changeOSC2overdriveDrive: (value) => dispatch(changeOSC2overdriveDrive(value)),
    changeOSC2overdriveGain: (value) => dispatch(changeOSC2overdriveGain(value)),



    changeOSC3Freq: (value) => dispatch(changeOSC3Freq(value)),

    turnOnLFO3: () => dispatch(turnOnLFO3()),
    changeLFO3Type: (wave) => dispatch(changeLFO3Type(wave)),
    changeLFO3Freq: (value) => dispatch(changeLFO3Freq(value)),

    toggleOSC3chorusBypass: () => dispatch(toggleOSC3chorusBypass()),
    changeOSC3chorusDepth: (value) => dispatch(changeOSC3chorusDepth(value)),
    changeOSC3chorusRate: (value) => dispatch(changeOSC3chorusRate(value)),

    toggleOSC3filterBypass: () => dispatch(toggleOSC3filterBypass()),
    changeOSC3filterDepth: (value) => dispatch(changeOSC3filterDepth(value)),
    changeOSC3filterRate: (value) => dispatch(changeOSC3filterRate(value)),

    toggleOSC3filter2Bypass: () => dispatch(toggleOSC3filter2Bypass()),
    changeOSC3filter2Depth: (value) => dispatch(changeOSC3filter2Depth(value)),
    changeOSC3filter2Rate: (value) => dispatch(changeOSC3filter2Rate(value)),

    toggleOSC3tremoloBypass: () => dispatch(toggleOSC3tremoloBypass()),
    changeOSC3tremoloIntensity: (value) => dispatch(changeOSC3tremoloIntensity(value)),
    changeOSC3tremoloRate: (value) => dispatch(changeOSC3tremoloRate(value)),

    toggleOSC3bitcrusherBypass: () => dispatch(toggleOSC3bitcrusherBypass()),
    changeOSC3bitcrusherBits: (value) => dispatch(changeOSC3bitcrusherBits(value)),
    changeOSC3bitcrusherBufferSize: (value) => dispatch(changeOSC3bitcrusherBufferSize(value)),

    toggleOSC3moogFilterBypass: () => dispatch(toggleOSC3moogFilterBypass()),
    changeOSC3moogFilterCutoff: (value) => dispatch(changeOSC3moogFilterCutoff(value)),
    changeOSC3moogFilterBufferSize: (value) => dispatch(changeOSC3moogFilterBufferSize(value)),
    changeOSC3moogFilterResonance: (value) => dispatch(changeOSC3moogFilterResonance(value)),

    toggleOSC3moogFilter2Bypass: () => dispatch(toggleOSC3moogFilter2Bypass()),
    changeOSC3moogFilter2Cutoff: (value) => dispatch(changeOSC3moogFilter2Cutoff(value)),
    changeOSC3moogFilter2BufferSize: (value) => dispatch(changeOSC3moogFilter2BufferSize(value)),
    changeOSC3moogFilter2Resonance: (value) => dispatch(changeOSC3moogFilter2Resonance(value)),

    toggleOSC3reverbBypass: () => dispatch(toggleOSC3reverbBypass()),
    changeOSC3reverbLevel: (value) => dispatch(changeOSC3reverbLevel(value)),

    toggleOSC3pannerBypass: () => dispatch(toggleOSC3pannerBypass()),
    changeOSC3pannerPan: (value) => dispatch(changeOSC3pannerPan(value)),

    toggleOSC3phaserBypass: () => dispatch(toggleOSC3phaserBypass()),
    changeOSC3phaserRate: (value) => dispatch(changeOSC3phaserRate(value)),
    changeOSC3phaserDepth: (value) => dispatch(changeOSC3phaserDepth(value)),
    changeOSC3phaserFeedback: (value) => dispatch(changeOSC3phaserFeedback(value)),

    toggleOSC3overdriveBypass: () => dispatch(toggleOSC3overdriveBypass()),
    changeOSC3overdriveDrive: (value) => dispatch(changeOSC3overdriveDrive(value)),
    changeOSC3overdriveGain: (value) => dispatch(changeOSC3overdriveGain(value)),

    changeOSC4Freq: (value) => dispatch(changeOSC4Freq(value)),

    turnOnLFO4: () => dispatch(turnOnLFO4()),
    changeLFO4Type: (wave) => dispatch(changeLFO4Type(wave)),
    changeLFO4Freq: (value) => dispatch(changeLFO4Freq(value)),

    toggleOSC4chorusBypass: () => dispatch(toggleOSC4chorusBypass()),
    changeOSC4chorusDepth: (value) => dispatch(changeOSC4chorusDepth(value)),
    changeOSC4chorusRate: (value) => dispatch(changeOSC4chorusRate(value)),

    toggleOSC4filterBypass: () => dispatch(toggleOSC4filterBypass()),
    changeOSC4filterDepth: (value) => dispatch(changeOSC4filterDepth(value)),
    changeOSC4filterRate: (value) => dispatch(changeOSC4filterRate(value)),

    toggleOSC4filter2Bypass: () => dispatch(toggleOSC4filter2Bypass()),
    changeOSC4filter2Depth: (value) => dispatch(changeOSC4filter2Depth(value)),
    changeOSC4filter2Rate: (value) => dispatch(changeOSC4filter2Rate(value)),

    toggleOSC4tremoloBypass: () => dispatch(toggleOSC4tremoloBypass()),
    changeOSC4tremoloIntensity: (value) => dispatch(changeOSC4tremoloIntensity(value)),
    changeOSC4tremoloRate: (value) => dispatch(changeOSC4tremoloRate(value)),

    toggleOSC4bitcrusherBypass: () => dispatch(toggleOSC4bitcrusherBypass()),
    changeOSC4bitcrusherBits: (value) => dispatch(changeOSC4bitcrusherBits(value)),
    changeOSC4bitcrusherBufferSize: (value) => dispatch(changeOSC4bitcrusherBufferSize(value)),

    toggleOSC4moogFilterBypass: () => dispatch(toggleOSC4moogFilterBypass()),
    changeOSC4moogFilterCutoff: (value) => dispatch(changeOSC4moogFilterCutoff(value)),
    changeOSC4moogFilterBufferSize: (value) => dispatch(changeOSC4moogFilterBufferSize(value)),
    changeOSC4moogFilterResonance: (value) => dispatch(changeOSC4moogFilterResonance(value)),

    toggleOSC4moogFilter2Bypass: () => dispatch(toggleOSC4moogFilter2Bypass()),
    changeOSC4moogFilter2Cutoff: (value) => dispatch(changeOSC4moogFilter2Cutoff(value)),
    changeOSC4moogFilter2BufferSize: (value) => dispatch(changeOSC4moogFilter2BufferSize(value)),
    changeOSC4moogFilter2Resonance: (value) => dispatch(changeOSC4moogFilter2Resonance(value)),

    toggleOSC4reverbBypass: () => dispatch(toggleOSC4reverbBypass()),
    changeOSC4reverbLevel: (value) => dispatch(changeOSC4reverbLevel(value)),

    toggleOSC4pannerBypass: () => dispatch(toggleOSC4pannerBypass()),
    changeOSC4pannerPan: (value) => dispatch(changeOSC4pannerPan(value)),

    toggleOSC4phaserBypass: () => dispatch(toggleOSC4phaserBypass()),
    changeOSC4phaserRate: (value) => dispatch(changeOSC4phaserRate(value)),
    changeOSC4phaserDepth: (value) => dispatch(changeOSC4phaserDepth(value)),
    changeOSC4phaserFeedback: (value) => dispatch(changeOSC4phaserFeedback(value)),

    toggleOSC4overdriveBypass: () => dispatch(toggleOSC4overdriveBypass()),
    changeOSC4overdriveDrive: (value) => dispatch(changeOSC4overdriveDrive(value)),
    changeOSC4overdriveGain: (value) => dispatch(changeOSC4overdriveGain(value)),

  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(XYPad);

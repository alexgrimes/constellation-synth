import React from 'react';
import { connect } from 'react-redux';
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

  toggleOSC1filter2Bypass,
  changeOSC1filter2Depth,

  toggleOSC1tremoloBypass,
  changeOSC1tremoloRate,

  changeOSC1delay2WetLevel,
  changeOSC1delay2Time,
  toggleOSC1delay2Bypass,

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

  toggleOSC2filter2Bypass,
  changeOSC2filter2Depth,

  toggleOSC2tremoloBypass,
  changeOSC2tremoloRate,

  changeOSC2delay2WetLevel,
  changeOSC2delay2Time,

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

  toggleOSC3filter2Bypass,
  changeOSC3filter2Depth,

  toggleOSC3tremoloBypass,
  changeOSC3tremoloRate,

  changeOSC3delay2WetLevel,
  changeOSC3delay2Time,

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

  toggleOSC4filter2Bypass,
  changeOSC4filter2Depth,

  toggleOSC4tremoloBypass,
  changeOSC4tremoloRate,

  changeOSC4delay2WetLevel,
  changeOSC4delay2Time,

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
  
    
    let circlePos1 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let circlePos2 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let circlePos3 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let circlePos4 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let squarePos1 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let squarePos2 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let squarePos3 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let squarePos4 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let squarePos5 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let squarePos6 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let squarePos7 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let squarePos8 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let squarePos9 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let squarePos10 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let squarePos11 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];
    let squarePos12 = [Math.floor(Math.random() * (this.props.width - 5) - 1 + 1) + 1, Math.floor(Math.random() * (this.props.height - 5) - 1 + 1) + 10];

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
    

  let lfoWaveTypes = ['sine', 'square', 'triangle', 'sawtooth']
  let randomType = Math.floor(Math.random()*lfoWaveTypes.length)

/////OSC 1 SETTINGS/////////////////////
    let oscFreq = circlePos1[1] * Math.floor(Math.random() * (7) - 1 + 1) + 1

    let lfoFreq = Math.floor((square1distanceFromOsc1 * .002) * Math.floor(Math.random() * (12) - 1 + 1) + 1)
    let lfoType = lfoWaveTypes[randomType]
  
    
    let osc1chorusDepth = (1000 - square2distanceFromOsc1) * .001
    let osc1chorusRate = Math.floor(square2distanceFromOsc1 * .008)
    
    let osc1filterDepth = (1000 - square3distanceFromOsc1) * 4

    let osc1filter2Depth = (1000 - square4distanceFromOsc1) * 4

    let osc1tremoloRate = square5distanceFromOsc1 * .011

    let osc1delay2WetLevel = (1000 - square6distanceFromOsc1) * .001
    let osc1delay2Time = (1000 - square6distanceFromOsc1) * .001

    let osc1reverbLevel = (1000 - square9distanceFromOsc1) * .001

    let osc1pannerPan = 1 - ((1000 - square10distanceFromOsc1) * .002)

    let osc1phaserDepth = (1000 - square11distanceFromOsc1) * .001
    let osc1phaserRate = Math.floor(square11distanceFromOsc1 * .008) + 1
    let osc1phaserFeedback = square11distanceFromOsc1 * .001

    let osc1overdriveDrive = (1000 - square12distanceFromOsc1) * .001
    let osc1overdriveGain = Math.floor(46 - ((1000 - square12distanceFromOsc1) * .046)) * -1
    
    
    


    



/////OSC 2 SETTINGS/////////////////////
    let osc2Freq = circlePos2[1] * Math.floor(Math.random() * (7.5) - 1 + 1) + 1

    let lfo2Freq = Math.floor((square1distanceFromOsc2 * .002) * Math.floor(Math.random() * (12) - 1 + 1) + 1)
    let lfo2Type = lfoWaveTypes[randomType]
    let osc2chorusDepth = (1000 - square2distanceFromOsc2) * .001
    let osc2chorusRate = Math.floor(square2distanceFromOsc2 * .008)
    let osc2filterDepth = (1000 - square3distanceFromOsc2) * .001
    let osc2filter2Depth = Math.floor((1000 - square4distanceFromOsc2) * .008)
    let osc2tremoloRate = square5distanceFromOsc2 * .011
    let osc2delay2Time = 1000 - square6distanceFromOsc2
    let osc2delay2WetLevel = (1000 - square6distanceFromOsc2) * .001
    let osc2reverbLevel = (1000 - square9distanceFromOsc2) * .001
    let osc2pannerPan = 1 - ((1000 - square10distanceFromOsc2) * .002)
    let osc2phaserDepth = (1000 - square11distanceFromOsc2) * .001
    let osc2phaserRate = Math.floor(square11distanceFromOsc2 * .008)
    let osc2phaserFeedback = square11distanceFromOsc2 * .001
    let osc2overdriveDrive = (1000 - square12distanceFromOsc2) * .001
    let osc2overdriveGain = Math.floor(46 - ((1000 - square12distanceFromOsc2) * .046)) * -1
    



/////OSC 3 SETTINGS/////////////////////
    let osc3Freq = circlePos3[1] * Math.floor(Math.random() * (8) - 1 + 1) + 1
    let lfo3Freq = Math.floor((square1distanceFromOsc3 * .002) * Math.floor(Math.random() * (12) - 1 + 1) + 1)
    let lfo3Type = lfoWaveTypes[randomType]  
    let osc3chorusDepth = (1000 - square2distanceFromOsc3) * .001
    let osc3chorusRate = Math.floor(square2distanceFromOsc3 * .008)   
    let osc3filterDepth = (1000 - square3distanceFromOsc3) * .001
    let osc3filter2Depth = Math.floor((1000 - square4distanceFromOsc3) * .008)
    let osc3tremoloRate = square5distanceFromOsc3 * .011
    let osc3delay2WetLevel = (1000 - square6distanceFromOsc3) * .001
    let osc3delay2Time = square6distanceFromOsc3
    let osc3reverbLevel = (1000 - square9distanceFromOsc3) * .001
    let osc3pannerPan = 1 - ((1000 - square10distanceFromOsc3) * .002)
    let osc3phaserDepth = (1000 - square11distanceFromOsc3) * .001
    let osc3phaserRate = Math.floor(square11distanceFromOsc3 * .008)
    let osc3phaserFeedback = square11distanceFromOsc3 * .001
    let osc3overdriveDrive = (1000 - square12distanceFromOsc3) * .001
    let osc3overdriveGain = Math.floor(46 - ((1000 - square12distanceFromOsc3) * .046)) * -1

/////OSC 4 SETTINGS/////////////////////
    let osc4Freq = circlePos4[1] * Math.floor(Math.random() * (9.5) - 1 + 1) + 1
    
    let lfo4Freq = Math.floor((square1distanceFromOsc4 * .002) * Math.floor(Math.random() * (20) - 1 + 1) + 1)
    let lfo4Type = lfoWaveTypes[randomType]
  
    
    let osc4chorusDepth = (1000 - square2distanceFromOsc4) * .001
    let osc4chorusRate = Math.floor(square2distanceFromOsc4 * .008)
    
    let osc4filterDepth = (1000 - square3distanceFromOsc4) * 4
    let osc4filter2Depth = (1000 - square3distanceFromOsc4) * 4
    let osc4tremoloRate = (square5distanceFromOsc4 * .011)

    let osc4delay2WetLevel = (1000 - square6distanceFromOsc4) * .001
    let osc4delay2Time = 1000 - square6distanceFromOsc4
    let osc4reverbLevel = (1000 - square9distanceFromOsc4) * .001

    let osc4pannerPan = 1 - ((1000 - square10distanceFromOsc4) * .002)

    let osc4phaserDepth = (1000 - square11distanceFromOsc4) * .001
    let osc4phaserRate = Math.floor(square11distanceFromOsc4 * .008) + 1
    let osc4phaserFeedback = square11distanceFromOsc4 * .001

    let osc4overdriveDrive = (1000 - square12distanceFromOsc4) * .001
    let osc4overdriveGain = Math.floor(46 - ((1000 - square12distanceFromOsc4) * .046)) * -1
    


/////////////////////////////////////////////////////////////////////////////////
///////////////////SETTING STATE NOW////////////////////////////////////////////
  
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

      isLFO2started: false,
      lfo2Type: lfo2Type,

      isLFO3started: false,
      lfo3Type: lfo3Type,

      isLFO4started: false,
      lfo4Type: lfo4Type,

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

      isOSC2filterStarted: false,
      osc2filterDepth: osc2filterDepth,

      isOSC3filterStarted: false,
      osc3filterDepth: osc3filterDepth,

      isOSC4filterStarted: false,
      osc4filterDepth: osc4filterDepth,


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

      isOSC2filter2Started: false,
      osc2filter2Depth: osc2filter2Depth,

      isOSC3filter2Started: false,
      osc3filter2Depth: osc3filter2Depth,

      isOSC4filter2Started: false,
      osc4filter2Depth: osc4filter2Depth,


/////EFFECT NODE 5////////////////////// 
      square5Pos: squarePos5,
      prevSquare5Pos: squarePos5,
      start9Move: false,
      square5distanceFromOsc1: square5distanceFromOsc1,
      square5distanceFromOsc2: square5distanceFromOsc2,
      square5distanceFromOsc3: square5distanceFromOsc3,
      square5distanceFromOsc4: square5distanceFromOsc4,


      isOSC1tremoloStarted: false,
      osc1tremoloRate: osc1tremoloRate,

      isOSC2tremoloStarted: false,
      osc2tremoloRate: osc2tremoloRate,

      isOSC3tremoloStarted: false,
      osc3tremoloRate:  osc3tremoloRate,

      isOSC4tremoloStarted: false,
      osc4tremoloRate: osc4tremoloRate,


/////EFFECT NODE 6////////////////////// 
      square6Pos: squarePos6,
      prevSquare6Pos: squarePos6,
      start10Move: false,
      square6distanceFromOsc1: square6distanceFromOsc1,
      square6distanceFromOsc2: square6distanceFromOsc2,
      square6distanceFromOsc3: square6distanceFromOsc3,
      square6distanceFromOsc4: square6distanceFromOsc4,

      isOSC1delay2Started: false,
      osc1delay2WetLevel: osc1delay2WetLevel,
      osc1delay2Time: osc1delay2Time,

      isOSC2delay2Started: false,
      osc2delay2WetLevel: osc2delay2WetLevel,
      osc2delay2Time: osc2delay2Time,

      isOSC3delay2Started: false,
      osc3delay2WetLevel: osc3delay2WetLevel,
      osc3delay2Time: osc3delay2Time,

      isOSC4delay2Started: false,
      osc4delay2WetLevel: osc4delay2WetLevel,
      osc4delay2Time: osc4delay2Time,


/////EFFECT NODE 7////////////////////// 
      square7Pos: squarePos7,
      prevSquare7Pos: squarePos7,
      start11Move: false,
      square7distanceFromOsc1: square7distanceFromOsc1,
      square7distanceFromOsc2: square7distanceFromOsc2,
      square7distanceFromOsc3: square7distanceFromOsc3,
      square7distanceFromOsc4: square7distanceFromOsc4,

      isOSC1reverbStarted: false,
      osc1reverbLevel: osc1reverbLevel,

      isOSC2reverbStarted: false,
      osc2reverbLevel: osc2reverbLevel,

      isOSC3reverbStarted: false,
      osc3reverbLevel: osc3reverbLevel,

      isOSC4reverbStarted: false,
      osc4reverbLevel: osc4reverbLevel,


/////EFFECT NODE 8////////////////////// 
      square8Pos: squarePos8,
      prevSquare8Pos: squarePos8,
      start12Move: false,
      square8distanceFromOsc1: square8distanceFromOsc1,
      square8distanceFromOsc2: square8distanceFromOsc2,
      square8distanceFromOsc3: square8distanceFromOsc3,
      square8distanceFromOsc4: square8distanceFromOsc4,

      isOSC1pannerStarted: false,
      osc1pannerPan: osc1pannerPan,

      isOSC2pannerStarted: false,
      osc2pannerPan: osc2pannerPan,

      isOSC3pannerStarted: false,
      osc3pannerPan: osc3pannerPan,

      isOSC4pannerStarted: false,
      osc4pannerPan: osc4pannerPan,

/////EFFECT NODE 9////////////////////// 
      square9Pos: squarePos9,
      prevSquare9Pos: squarePos9,
      start13Move: false,
      square9distanceFromOsc1: square9distanceFromOsc1,
      square9distanceFromOsc2: square9distanceFromOsc2,
      square9distanceFromOsc3: square9distanceFromOsc3,
      square9distanceFromOsc4: square9distanceFromOsc4,

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

      

/////EFFECT NODE 10////////////////////// 
      square10Pos: squarePos10,
      prevSquare10Pos: squarePos10,
      start14Move: false,
      square10distanceFromOsc1: square10distanceFromOsc1,
      square10distanceFromOsc2: square10distanceFromOsc2,
      square10distanceFromOsc3: square10distanceFromOsc3,
      square10distanceFromOsc4: square10distanceFromOsc4,

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

      

  
/////EFFECT NODE 11////////////////////// 
      square11Pos: squarePos11,
      prevSquare11Pos: squarePos11,
      start15Move: false,
      square11distanceFromOsc1: square11distanceFromOsc1,
      square11distanceFromOsc2: square11distanceFromOsc2,
      square11distanceFromOsc3: square11distanceFromOsc3,
      square11distanceFromOsc4: square11distanceFromOsc4,

      

      


/////EFFECT NODE 12////////////////////// 
      square12Pos: squarePos12,
      prevSquare12Pos: squarePos12,
      start16Move: false,
      square12distanceFromOsc1: square12distanceFromOsc1,
      square12distanceFromOsc2: square12distanceFromOsc2,
      square12distanceFromOsc3: square12distanceFromOsc3,
      square12distanceFromOsc4: square12distanceFromOsc4,

      

    };
   
    
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
        
        this.updateFrequencyOSC(this.props.oscFreq);
        this.updateLFOFreq(this.props.lfoFreq);

        // this.updateOSC1chorusBypass();
        // this.updateOSC1chorusDepth(this.props.osc1chorusDepth);

        // this.updateOSC1filterBypass();
        // this.updateOSC1filterDepth(this.props.osc1filterDepth);

        // this.updateOSC1filter2Bypass();
        // this.updateOSC1filter2Depth(this.props.osc1filter2Depth);

        // this.updateOSC1tremoloBypass();
        // this.updateOSC1tremoloRate(this.props.osc1tremoloRate);

        // this.updateOSC1delay2Bypass();
        // this.udpateOSC1delay2WetLevel(this.props.osc1delay2WetLevel);
        // this.udpateOSC1delay2Time(this.props.osc1delay2Time);

        // this.updateOSC1reverbBypass();
        // this.updateOSC1reverbLevel(this.props.osc1reverbLevel);

        // this.updateOSC1pannerBypass();
        // this.updateOSC1pannerPan(this.props.osc1pannerPan);

        // this.updateOSC1phaserBypass();
        // this.updateOSC1phaserDepth(this.props.osc1phaserDepth);
        // this.updateOSC1phaserRate(this.props.osc1phaserRate);
        // this.updateOSC1phaserFeedback(this.props.osc1phaserFeedback);

        // this.updateOSC1overdriveBypass();
        // this.updateOSC1overdriveDrive(this.props.osc1overdriveDrive);
        // this.updateOSC1overdriveGain(this.props.osc1overdriveGain);

        this.updateFrequencyOSC2(this.props.osc2Freq);
        this.updateFrequencyOSC3(this.props.osc3Freq);
        this.updateFrequencyOSC4(this.props.osc4Freq);
        
        
        this.updateCanvas();
        
        
        console.log(this.state.osc4phaserRate)
        console.log(Math.floor(46 - ((1000 - this.state.square12distanceFromOsc1) * .046)) * -1)
        
    }

    updateCanvas() {
     
      this.ctx.beginPath();
      this.ctx.arc(this.state.prevCircle1Pos[0], this.state.prevCircle1Pos[1], 7, false, Math.PI * 2, false);
      this.ctx.arc(this.state.prevCircle2Pos[0], this.state.prevCircle2Pos[1], 7, false, Math.PI * 2, false);
      this.ctx.arc(this.state.prevCircle3Pos[0], this.state.prevCircle3Pos[1], 7, false, Math.PI * 2, false);
      this.ctx.arc(this.state.prevCircle4Pos[0], this.state.prevCircle4Pos[1], 7, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = this.props.color;
    
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
        this.state.square10Pos
      ]

      // console.log(points)
      const delaunay = d3.Delaunay.from(points);
      
      const voronoi = delaunay.voronoi([0.5, 0.5, this.props.width - 0.5, this.props.height])
      this.ctx.fillStyle = this.props.color;
      this.ctx.fillRect(0, 0, this.props.width, this.props.height)
      this.ctx.beginPath();
      delaunay.render(this.ctx);
      this.ctx.strokeStyle = "#C0392B";
      this.ctx.lineWidth = 1.25
      this.ctx.stroke();
      this.ctx.closePath();
      // console.log(voronoi.neighbors(), delaunay.neighbors())
      this.ctx.beginPath();
      voronoi.render(this.ctx);
      voronoi.renderBounds(this.ctx);
      this.ctx.strokeStyle = "#ABABAB";
      this.ctx.lineWidth = 1.7
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.beginPath();
      delaunay.renderPoints(this.ctx);
      console.log(delaunay)
      this.ctx.fill();

      //turn effects on of neighboring oscillators with this
      const osc1Neighbors = [...delaunay.neighbors(0)]
      this.setState({osc1Neighbors: osc1Neighbors});
      const osc2Neighbors = [...delaunay.neighbors(1)]
      this.setState({osc2Neighbors: osc2Neighbors});
      const osc3Neighbors = [...delaunay.neighbors(2)]
      this.setState({osc3Neighbors: osc3Neighbors});
      const osc4Neighbors = [...delaunay.neighbors(3)]
      this.setState({osc4Neighbors: osc4Neighbors});

      console.log(this.state.osc1Neighbors)
      console.log(this.state.square9Pos)
      
      // if (this.state.osc1Neighbors.includes(4)) {
      //   this.setState({isLFOstarted: true})
      //   this.turnOnLFO();
      //   console.log('lfo')
      // }
      // if (this.state.osc1Neighbors.includes(5)) {
      //   this.setState({isOSC1chorusStarted: true})
      //   this.updateOSC1chorusBypass();
      //   console.log(this.state.isOSC1chorusStarted)
      //   console.log('chorus')
      //   console.log(this.state.osc1Neighbors.includes(5))
      // }
      // if (this.state.osc1Neighbors.includes(6)) {
      //   this.setState({isOSC1filterStarted: true})
      //   this.updateOSC1filterBypass();
      //   console.log('filter')
      // }  
      // if (this.state.osc1Neighbors.includes(7)) {
      //   this.setState({isOSC1filter2Started: true})
      //   this.updateOSC1filter2Bypass();
      //   console.log('filter2')
      // } 
      // if (this.state.osc1Neighbors.includes(8)) {
      //   this.setState({isOSC1tremoloStarted: true})
      //   this.updateOSC1tremoloBypass();
      //   console.log('tremolo')
      // }   
      // if (this.state.osc1Neighbors.includes(9)) {
      //   this.setState({isOSC1reverbStarted: true})
      //   this.updateOSC1reverbBypass();
      //   console.log('reverb')
      // } 
      // if (this.state.osc1Neighbors.includes(10)) {
      //   this.setState({isOSC1pannerStarted: true})
      //   this.updateOSC1pannerBypass();
      //   console.log('pan')
      // }   
      // if (this.state.osc1Neighbors.includes(11)) {
      //   this.setState({isOSC1phaserStarted: true})
      //   this.updateOSC1phaserBypass();
      //   console.log('phase')
      // }
      // if (this.state.osc1Neighbors.includes(12)) {
      //   this.setState({isOSC1overdriveStarted: true})
      //   this.updateOSC1overdriveBypass();
      //   console.log('ovd')
      // }
      // else {
      //   this.setState({
      //     isLFOstarted: false,
      //     isOSC1chorusStarted: false,
      //     isOSC1filterStarted: false,
      //     isOSC1filter2Started: false,
      //     isOSC1tremoloStarted: false,
      //     isOSC1reverbStarted: false,
      //     isOSC1pannerStarted: false,
      //     isOSC1phaserStarted: false,
      //     isOSC1overdriveStarted: false
      //   })
      // }

      if (this.state.osc2Neighbors.includes(5)) {
        this.setState({isLFO2started: true})
        this.turnOnLFO2();
      }
      if (this.state.osc2Neighbors.includes(6)) {
        this.setState({isOSC2chorusStarted: true})
        this.updateOSC2chorusBypass();
      }
      if (this.state.osc2Neighbors.includes(7)) {
        this.setState({isOSC2filterStarted: true})
        this.updateOSC2filterBypass();
      }  
      if (this.state.osc2Neighbors.includes(8)) {
        this.setState({isOSC2filter2Started: true})
        this.updateOSC2filter2Bypass();
      } 
      if (this.state.osc2Neighbors.includes(9)) {
        this.setState({isOSC2tremoloStarted: true})
        this.updateOSC2tremoloBypass();
      }   
      if (this.state.osc2Neighbors.includes(13)) {
        this.setState({isOSC2reverbStarted: true})
        this.updateOSC2reverbBypass();
      } 
      if (this.state.osc2Neighbors.includes(14)) {
        this.setState({isOSC2pannerStarted: true})
        this.updateOSC2pannerBypass();
      }   
      if (this.state.osc2Neighbors.includes(15)) {
        this.setState({isOSC2phaserStarted: true})
        this.updateOSC2phaserBypass();
      }
      if (this.state.osc2Neighbors.includes(16)) {
        this.setState({isOSC2overdriveStarted: true})
        this.updateOSC2overdriveBypass();
      }
      else {
        this.setState({
          isLFO2started: false,
          isOSC2chorusStarted: false,
          isOSC2filterStarted: false,
          isOSC2filter2Started: false,
          isOSC2tremoloStarted: false,
          isOSC2reverbStarted: false,
          isOSC2pannerStarted: false,
          isOSC2phaserStarted: false,
          isOSC2overdriveStarted: false
        })
      }

      if (this.state.osc3Neighbors.includes(5)) {
        this.setState({isLFO3started: true})
        this.turnOnLFO3();
      }
      if (this.state.osc3Neighbors.includes(6)) {
        this.setState({isOSC3chorusStarted: true})
        this.updateOSC3chorusBypass();
      }
      if (this.state.osc3Neighbors.includes(7)) {
        this.setState({isOSC3filterStarted: true})
        this.updateOSC3filterBypass();
      }  
      if (this.state.osc3Neighbors.includes(8)) {
        this.setState({isOSC3filter2Started: true})
        this.updateOSC3filter2Bypass();
      } 
      if (this.state.osc3Neighbors.includes(9)) {
        this.setState({isOSC3tremoloStarted: true})
        this.updateOSC3tremoloBypass();
      }
      if (this.state.osc3Neighbors.includes(13)) {
        this.setState({isOSC3reverbStarted: true})
        this.updateOSC3reverbBypass();
      } 
      if (this.state.osc3Neighbors.includes(14)) {
        this.setState({isOSC3pannerStarted: true})
        this.updateOSC3pannerBypass();
      }   
      if (this.state.osc3Neighbors.includes(15)) {
        this.setState({isOSC3phaserStarted: true})
        this.updateOSC3phaserBypass();
      }
      if (this.state.osc3Neighbors.includes(16)) {
        this.setState({isOSC3overdriveStarted: true})
        this.updateOSC3overdriveBypass();
      }
      else {
        this.setState({
          isLFO3started: false,
          isOSC3chorusStarted: false,
          isOSC3filterStarted: false,
          isOSC3filter2Started: false,
          isOSC3tremoloStarted: false,
          isOSC3reverbStarted: false,
          isOSC3pannerStarted: false,
          isOSC3phaserStarted: false,
          isOSC3overdriveStarted: false
        })
      }

      if (this.state.osc4Neighbors.includes(5)) {
        this.setState({isLFO4started: true})
        this.turnOnLFO4();
      }
      if (this.state.osc4Neighbors.includes(6)) {
        this.setState({isOSC4chorusStarted: true})
        this.updateOSC4chorusBypass();
      }
      if (this.state.osc4Neighbors.includes(7)) {
        this.setState({isOSC4filterStarted: true})
        this.updateOSC4filterBypass();
      }  
      if (this.state.osc4Neighbors.includes(8)) {
        this.setState({isOSC4filter2Started: true})
        this.updateOSC4filter2Bypass();
      } 
      if (this.state.osc4Neighbors.includes(9)) {
        this.setState({isOSC4tremoloStarted: true})
        this.updateOSC4tremoloBypass();
      }   
      if (this.state.osc4Neighbors.includes(13)) {
        this.setState({isOSC4reverbStarted: true})
        this.updateOSC4reverbBypass();
      } 
      if (this.state.osc4Neighbors.includes(14)) {
        this.setState({isOSC4pannerStarted: true})
        this.updateOSC4pannerBypass();
      }   
      if (this.state.osc4Neighbors.includes(15)) {
        this.setState({isOSC4phaserStarted: true})
        this.updateOSC4phaserBypass();
      }
      if (this.state.osc4Neighbors.includes(16)) {
        this.setState({isOSC4overdriveStarted: true})
        this.updateOSC4overdriveBypass();
      }
      else {
        this.setState({
          isLFO4started: false,
          isOSC4chorusStarted: false,
          isOSC4filterStarted: false,
          isOSC4filter2Started: false,
          isOSC4tremoloStarted: false,
          isOSC4reverbStarted: false,
          isOSC4pannerStarted: false,
          isOSC4phaserStarted: false,
          isOSC4overdriveStarted: false
        })
      }
      
      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle1Pos[0], this.state.circle1Pos[1], 9, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = 'rgba(204, 7, 33, 0.897)';
      this.ctx.fill();


      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle2Pos[0], this.state.circle2Pos[1], 9, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = 'rgba(7, 204, 7, 0.897)';
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.arc(this.state.circle3Pos[0], this.state.circle3Pos[1], 9, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = 'rgba(197, 7, 204, 0.897)';
      this.ctx.fill();

      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle4Pos[0], this.state.circle4Pos[1], 9, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = 'rgba(94, 66, 255, 0.897)';
      this.ctx.fill();


      //square 1
      this.ctx.beginPath();
      this.ctx.arc(this.state.square1Pos[0], this.state.square1Pos[1], 3.33, false, Math.PI * 2, false);
      this.ctx.fillStyle = "#ffffff";
      if (this.state.start1Move || 
          this.state.start2Move ||
          this.state.start3Move ||
          this.state.start4Move ||
          this.state.start5Move
          )
      {
        this.ctx.fillText('LFO', this.state.square1Pos[0] + 5 , this.state.square1Pos[1] + 5 );
      }
      
      this.ctx.closePath();
      this.ctx.fill();

      this.ctx.arc(this.state.square2Pos[0], this.state.square2Pos[1], 3.33, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#ffffff";
      if (this.state.start1Move || 
          this.state.start2Move ||
          this.state.start3Move ||
          this.state.start4Move ||
          this.state.start6Move
          )
      {
        this.ctx.fillText('Chorus', this.state.square2Pos[0] + 5 , this.state.square2Pos[1] + 5 );
      }
      this.ctx.fill();

      this.ctx.arc(this.state.square3Pos[0], this.state.square3Pos[1], 3.33, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#ffffff";
      if (this.state.start1Move || 
          this.state.start2Move ||
          this.state.start3Move ||
          this.state.start4Move ||
          this.state.start7Move
          )
      {
        this.ctx.fillText('Low Pass Filter', this.state.square3Pos[0] + 5 , this.state.square3Pos[1] + 5 );
      }
      this.ctx.fill();

      this.ctx.arc(this.state.square4Pos[0], this.state.square4Pos[1], 3.33, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#ffffff";
      if (this.state.start1Move || 
          this.state.start2Move ||
          this.state.start3Move ||
          this.state.start4Move ||
          this.state.start8Move
          )
      {
        this.ctx.fillText('Bandpass Filter', this.state.square4Pos[0] + 5 , this.state.square4Pos[1] + 5 );
      }
      this.ctx.fill();

      this.ctx.arc(this.state.square5Pos[0], this.state.square5Pos[1], 3.33, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#ffffff";
      if (this.state.start1Move || 
          this.state.start2Move ||
          this.state.start3Move ||
          this.state.start4Move ||
          this.state.start9Move
          )
      {
        this.ctx.fillText('Tremolo', this.state.square5Pos[0] + 5 , this.state.square5Pos[1] + 5 );
      }
      this.ctx.fill();

      this.ctx.arc(this.state.square6Pos[0], this.state.square6Pos[1], 3.33, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#ffffff";
      if (this.state.start1Move || 
          this.state.start2Move ||
          this.state.start3Move ||
          this.state.start4Move ||
          this.state.start10Move
          )
      {
        this.ctx.fillText('Delay', this.state.square6Pos[0] + 5 , this.state.square6Pos[1] + 5 );
      }
      this.ctx.fill();

      this.ctx.arc(this.state.square7Pos[0], this.state.square7Pos[1], 3.33, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#ffffff";
      if (this.state.start1Move || 
          this.state.start2Move ||
          this.state.start3Move ||
          this.state.start4Move ||
          this.state.start11Move
          )
      {
        this.ctx.fillText('Reverb', this.state.square7Pos[0] + 5 , this.state.square7Pos[1] + 5 );
      }
      this.ctx.fill();

      this.ctx.arc(this.state.square8Pos[0], this.state.square8Pos[1], 3.33, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#ffffff";
      if (this.state.start1Move || 
          this.state.start2Move ||
          this.state.start3Move ||
          this.state.start4Move ||
          this.state.start12Move
          )
      {
        this.ctx.fillText('Pan', this.state.square8Pos[0] + 5 , this.state.square8Pos[1] + 5 );
      }
      this.ctx.fill();

      this.ctx.arc(this.state.square9Pos[0], this.state.square9Pos[1], 3.33, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#ffffff";
      if (this.state.start1Move || 
          this.state.start2Move ||
          this.state.start3Move ||
          this.state.start4Move ||
          this.state.start13Move
          )
      {
        this.ctx.fillText('Phaser', this.state.square9Pos[0] + 5 , this.state.square9Pos[1] + 5 );
      }
      this.ctx.fill();

      this.ctx.arc(this.state.square10Pos[0], this.state.square10Pos[1], 3.33, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#ffffff";
      if (this.state.start1Move || 
          this.state.start2Move ||
          this.state.start3Move ||
          this.state.start4Move ||
          this.state.start14Move
          )
      {
        this.ctx.fillText('Drive', this.state.square10Pos[0] + 5 , this.state.square10Pos[1] + 5 );
      }
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
      this.handleMouseEvent(event);
    }

    handleMouseEvent(event) {
      let points = [this.state.circle1Pos, this.state.circle2Pos, this.state.circle3Pos, this.state.circle4Pos]
      this.ctx.canvas.onmousemove = event => {
        event.preventDefault();
        points[0] = [event.layerX, event.layerY];
        this.updateCanvas();
      }

      if (this.state.start1Move) {
       
        this.state.prevCircle1Pos = this.state.circle1Pos;
        let square1distance1FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square1Pos[0]) * (this.state.circle1Pos[0] - this.state.square1Pos[0])) + ((this.state.circle1Pos[1] - this.state.square1Pos[1]) * (this.state.circle1Pos[1] - this.state.square1Pos[1])))
        let square2distance1FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square2Pos[0]) * (this.state.circle1Pos[0] - this.state.square2Pos[0])) + ((this.state.circle1Pos[1] - this.state.square2Pos[1]) * (this.state.circle1Pos[1] - this.state.square2Pos[1])))
        let square3distance1FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square3Pos[0]) * (this.state.circle1Pos[0] - this.state.square3Pos[0])) + ((this.state.circle1Pos[1] - this.state.square3Pos[1]) * (this.state.circle1Pos[1] - this.state.square3Pos[1])))
        let square4distance1FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square4Pos[0]) * (this.state.circle1Pos[0] - this.state.square4Pos[0])) + ((this.state.circle1Pos[1] - this.state.square4Pos[1]) * (this.state.circle1Pos[1] - this.state.square4Pos[1])))
        let square5distance1FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square5Pos[0]) * (this.state.circle1Pos[0] - this.state.square5Pos[0])) + ((this.state.circle1Pos[1] - this.state.square5Pos[1]) * (this.state.circle1Pos[1] - this.state.square5Pos[1])))
        let square6distance1FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square6Pos[0]) * (this.state.circle1Pos[0] - this.state.square6Pos[0])) + ((this.state.circle1Pos[1] - this.state.square6Pos[1]) * (this.state.circle1Pos[1] - this.state.square6Pos[1])))
        let square7distance1FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square7Pos[0]) * (this.state.circle1Pos[0] - this.state.square7Pos[0])) + ((this.state.circle1Pos[1] - this.state.square7Pos[1]) * (this.state.circle1Pos[1] - this.state.square7Pos[1])))
        let square8distance1FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square8Pos[0]) * (this.state.circle1Pos[0] - this.state.square8Pos[0])) + ((this.state.circle1Pos[1] - this.state.square8Pos[1]) * (this.state.circle1Pos[1] - this.state.square8Pos[1])))
        let square9distance1FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square9Pos[0]) * (this.state.circle1Pos[0] - this.state.square9Pos[0])) + ((this.state.circle1Pos[1] - this.state.square9Pos[1]) * (this.state.circle1Pos[1] - this.state.square9Pos[1])))
        let square10distance1FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square10Pos[0]) * (this.state.circle1Pos[0] - this.state.square10Pos[0])) + ((this.state.circle1Pos[1] - this.state.square10Pos[1]) * (this.state.circle1Pos[1] - this.state.square10Pos[1])))
        let square11distance1FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square11Pos[0]) * (this.state.circle1Pos[0] - this.state.square11Pos[0])) + ((this.state.circle1Pos[1] - this.state.square11Pos[1]) * (this.state.circle1Pos[1] - this.state.square11Pos[1])))
        let square12distance1FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square12Pos[0]) * (this.state.circle1Pos[0] - this.state.square12Pos[0])) + ((this.state.circle1Pos[1] - this.state.square12Pos[1]) * (this.state.circle1Pos[1] - this.state.square12Pos[1])))
    
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
          square1distanceFromOsc1: square1distance1FromOsc1,
          square2distanceFromOsc1: square2distance1FromOsc1,
          square3distanceFromOsc1: square3distance1FromOsc1,
          square4distanceFromOsc1: square4distance1FromOsc1,
          square5distanceFromOsc1: square5distance1FromOsc1,
          square6distanceFromOsc1: square6distance1FromOsc1,
          square7distanceFromOsc1: square7distance1FromOsc1,
          square8distanceFromOsc1: square8distance1FromOsc1,
          square9distanceFromOsc1: square9distance1FromOsc1,
          square10distanceFromOsc1: square10distance1FromOsc1,
          square11distanceFromOsc1: square11distance1FromOsc1,
          square12distanceFromOsc1: square12distance1FromOsc1,
        });
        
        this.updateCanvas();
        this.updateFrequencyOSC(posY)
        console.log(this.state.osc1Neighbors)
        console.log(this.state.square1distanceFromOsc1)
        this.updateLFOFreq(square1distance1FromOsc1);
        this.updateOSC1chorusDepth(square2distance1FromOsc1);
        this.updateOSC1filterDepth(square3distance1FromOsc1);
        this.updateOSC1filter2Depth(square4distance1FromOsc1);
        this.updateOSC1tremoloRate(square5distance1FromOsc1);
        this.udpateOSC1delay2WetLevel(square6distance1FromOsc1);
        this.udpateOSC1delay2Time(square6distance1FromOsc1);
        this.updateOSC1reverbLevel(square7distance1FromOsc1);
        this.updateOSC1pannerPan(square8distance1FromOsc1);
        this.updateOSC1phaserDepth(square9distance1FromOsc1);
        this.updateOSC1phaserRate(square9distance1FromOsc1);
        this.updateOSC1phaserFeedback(square9distance1FromOsc1);
        this.updateOSC1overdriveDrive(square10distance1FromOsc1);
        this.updateOSC1overdriveGain(square10distance1FromOsc1);

        if (this.state.osc1Neighbors.includes(4)) {
          this.setState({isLFOstarted: true})
          this.turnOnLFO();
          this.updateLFOType();
          console.log('lfo', this.state.isLFOstarted)
        }
        if (this.state.osc1Neighbors.includes(5)) {
          this.setState({isOSC1chorusStarted: true})
          this.updateOSC1chorusBypass();
          
          console.log(this.state.isOSC1chorusStarted)
          console.log('chorus')
          console.log(this.state.osc1Neighbors.includes(5))
        }
        if (this.state.osc1Neighbors.includes(6)) {
          this.setState({isOSC1filterStarted: true})
          this.updateOSC1filterBypass();
          
          console.log('filter')
        }  
        if (this.state.osc1Neighbors.includes(7)) {
          this.setState({isOSC1filter2Started: true})
          this.updateOSC1filter2Bypass();
          
          console.log('filter2')
        } 
        if (this.state.osc1Neighbors.includes(8)) {
          this.setState({isOSC1tremoloStarted: true})
          this.updateOSC1tremoloBypass();
          
          console.log('tremolo')
        }
        if (this.state.osc1Neighbors.includes(9)) {
          this.setState({isOSC1delayStarted: true})
          // this.updateOSC1delay2Bypass();
          
          console.log('delay')
        }    
        if (this.state.osc1Neighbors.includes(10)) {
          this.setState({isOSC1reverbStarted: true})
          this.updateOSC1reverbBypass();
          
          console.log('reverb')
        } 
        if (this.state.osc1Neighbors.includes(11)) {
          this.setState({isOSC1pannerStarted: true})
          this.updateOSC1pannerBypass();
          
          console.log('pan')
        }   
        if (this.state.osc1Neighbors.includes(12)) {
          this.setState({isOSC1phaserStarted: true})
          this.updateOSC1phaserBypass();
          
          console.log('phase')
        }
        if (this.state.osc1Neighbors.includes(13)) {
          this.setState({isOSC1overdriveStarted: true})
          this.updateOSC1overdriveBypass();
          
          console.log('ovd')
        }
      }

      if (this.state.start2Move) {
        
        this.state.prevCircle2Pos = this.state.circle2Pos;
        let square1distance2FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square1Pos[0]) * (this.state.circle2Pos[0] - this.state.square1Pos[0])) + ((this.state.circle2Pos[1] - this.state.square1Pos[1]) * (this.state.circle2Pos[1] - this.state.square1Pos[1])))
        let square2distance2FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square2Pos[0]) * (this.state.circle2Pos[0] - this.state.square2Pos[0])) + ((this.state.circle2Pos[1] - this.state.square2Pos[1]) * (this.state.circle2Pos[1] - this.state.square2Pos[1])))
        let square3distance2FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square3Pos[0]) * (this.state.circle2Pos[0] - this.state.square3Pos[0])) + ((this.state.circle2Pos[1] - this.state.square3Pos[1]) * (this.state.circle2Pos[1] - this.state.square3Pos[1])))
        let square4distance2FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square4Pos[0]) * (this.state.circle2Pos[0] - this.state.square4Pos[0])) + ((this.state.circle2Pos[1] - this.state.square4Pos[1]) * (this.state.circle2Pos[1] - this.state.square4Pos[1])))
        let square5distance2FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square5Pos[0]) * (this.state.circle2Pos[0] - this.state.square5Pos[0])) + ((this.state.circle2Pos[1] - this.state.square5Pos[1]) * (this.state.circle2Pos[1] - this.state.square5Pos[1])))
        let square6distance2FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square6Pos[0]) * (this.state.circle2Pos[0] - this.state.square6Pos[0])) + ((this.state.circle2Pos[1] - this.state.square6Pos[1]) * (this.state.circle2Pos[1] - this.state.square6Pos[1])))
        let square7distance2FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square7Pos[0]) * (this.state.circle2Pos[0] - this.state.square7Pos[0])) + ((this.state.circle2Pos[1] - this.state.square7Pos[1]) * (this.state.circle2Pos[1] - this.state.square7Pos[1])))
        let square8distance2FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square8Pos[0]) * (this.state.circle2Pos[0] - this.state.square8Pos[0])) + ((this.state.circle2Pos[1] - this.state.square8Pos[1]) * (this.state.circle2Pos[1] - this.state.square8Pos[1])))
        let square9distance2FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square9Pos[0]) * (this.state.circle2Pos[0] - this.state.square9Pos[0])) + ((this.state.circle2Pos[1] - this.state.square9Pos[1]) * (this.state.circle2Pos[1] - this.state.square9Pos[1])))
        let square10distance2FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square10Pos[0]) * (this.state.circle2Pos[0] - this.state.square10Pos[0])) + ((this.state.circle2Pos[1] - this.state.square10Pos[1]) * (this.state.circle2Pos[1] - this.state.square10Pos[1])))
        let square11distance2FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square11Pos[0]) * (this.state.circle2Pos[0] - this.state.square11Pos[0])) + ((this.state.circle2Pos[1] - this.state.square11Pos[1]) * (this.state.circle2Pos[1] - this.state.square11Pos[1])))
        let square12distance2FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square12Pos[0]) * (this.state.circle2Pos[0] - this.state.square12Pos[0])) + ((this.state.circle2Pos[1] - this.state.square12Pos[1]) * (this.state.circle2Pos[1] - this.state.square12Pos[1])))
        
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
          square1distanceFromOsc2: square1distance2FromOsc2,
          square2distanceFromOsc2: square2distance2FromOsc2,
          square3distanceFromOsc2: square3distance2FromOsc2,
          square4distanceFromOsc2: square4distance2FromOsc2,
          square5distanceFromOsc2: square5distance2FromOsc2,
          square6distanceFromOsc2: square6distance2FromOsc2,
          square7distanceFromOsc2: square7distance2FromOsc2,
          square8distanceFromOsc2: square8distance2FromOsc2,
          square9distanceFromOsc2: square9distance2FromOsc2,
          square10distanceFromOsc2: square10distance2FromOsc2,
          square11distanceFromOsc2: square11distance2FromOsc2,
          square12distanceFromOsc2: square12distance2FromOsc2,
        });
        
        this.updateCanvas();
        this.updateFrequencyOSC2(posY)
        this.updateLFO2Type();
        this.updateLFO2Freq(square1distance2FromOsc2);
        this.updateOSC2chorusDepth(square2distance2FromOsc2);
        this.updateOSC2chorusRate(square2distance2FromOsc2);
        this.updateOSC2filterDepth(square3distance2FromOsc2);
        this.updateOSC2filter2Depth(square4distance2FromOsc2);
        this.updateOSC2tremoloRate(square5distance2FromOsc2)
        this.udpateOSC2delay2WetLevel(square6distance2FromOsc2);
        this.udpateOSC2delay2Time(square6distance2FromOsc2);
        this.updateOSC2reverbLevel(square7distance2FromOsc2)
        this.updateOSC2pannerPan(square8distance2FromOsc2)
        this.updateOSC2phaserDepth(square9distance2FromOsc2)
        this.updateOSC2phaserRate(square9distance2FromOsc2)
        this.updateOSC2phaserFeedback(square9distance2FromOsc2)
        this.updateOSC2overdriveDrive(square10distance2FromOsc2)
        this.updateOSC2overdriveGain(square10distance2FromOsc2)

      //   if (this.state.osc2Neighbors.includes(5)) {
      //     this.setState({isLFOstarted: true})
      //     this.turnOnLFO();
      //     this.updateLFOType();
      //     this.updateLFOFreq(square1distance2FromOsc2);
      //     console.log('lfo')
      //   }
      //   if (this.state.osc2Neighbors.includes(6)) {
      //     this.setState({isOSC2chorusStarted: true})
      //     this.updateOSC2chorusBypass();
      //     this.updateOSC2chorusDepth(square2distance2FromOsc2);
      //     console.log(this.state.isOSC2chorusStarted)
      //     console.log('chorus')
      //     console.log(this.state.osc2Neighbors.includes(5))
      //   }
      //   if (this.state.osc2Neighbors.includes(7)) {
      //     this.setState({isOSC2filterStarted: true})
      //     this.updateOSC2filterBypass();
      //     this.updateOSC2filterDepth(square3distance2FromOsc2);
      //     console.log('filter')
      //   }  
      //   if (this.state.osc2Neighbors.includes(8)) {
      //     this.setState({isOSC2filter2Started: true})
      //     this.updateOSC2filter2Bypass();
      //     this.updateOSC2filter2Depth(square4distance2FromOsc2);
      //     console.log('filter2')
      //   } 
      //   if (this.state.osc2Neighbors.includes(9)) {
      //     this.setState({isOSC2tremoloStarted: true})
      //     this.updateOSC2tremoloBypass();
      //     this.updateOSC2tremoloRate(square5distance2FromOsc2);
      //     console.log('tremolo')
      //   }
      //   if (this.state.osc2Neighbors.includes(10)) {
      //     this.setState({isOSC2delayStarted: true})
      //     this.updateOSC2delay2Bypass();
      //     this.udpateOSC2delay2WetLevel(square6distance2FromOsc2);
      //     this.udpateOSC2delay2Time(square6distance2FromOsc2);
      //     console.log('delay')
      //   }    
      //   if (this.state.osc2Neighbors.includes(11)) {
      //     this.setState({isOSC2reverbStarted: true})
      //     this.updateOSC2reverbBypass();
      //     this.updateOSC2reverbLevel(square7distance2FromOsc2)
      //     console.log('reverb')
      //   } 
      //   if (this.state.osc2Neighbors.includes(12)) {
      //     this.setState({isOSC2pannerStarted: true})
      //     this.updateOSC2pannerBypass();
      //     this.updateOSC2pannerPan(square8distance2FromOsc2)
      //     console.log('pan')
      //   }   
      //   if (this.state.osc2Neighbors.includes(13)) {
      //     this.setState({isOSC2phaserStarted: true})
      //     this.updateOSC2phaserBypass();
      //     this.updateOSC2phaserDepth(square9distance2FromOsc2)
      //     this.updateOSC2phaserRate(square9distance2FromOsc2)
      //     this.updateOSC2phaserFeedback(square9distance2FromOsc2)
      //     console.log('phase')
      //   }
      //   if (this.state.osc2Neighbors.includes(13)) {
      //     this.setState({isOSC2overdriveStarted: true})
      //     this.updateOSC2overdriveBypass();
      //     this.updateOSC2overdriveDrive(square10distance2FromOsc2)
      //     this.updateOSC2overdriveGain(square10distance2FromOsc2)
      //     console.log('ovd')
      //   }
      }

      if (this.state.start3Move) {
        this.state.prevCircle3Pos = this.state.circle3Pos;
        let square1distance3FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square1Pos[0]) * (this.state.circle3Pos[0] - this.state.square1Pos[0])) + ((this.state.circle3Pos[1] - this.state.square1Pos[1]) * (this.state.circle3Pos[1] - this.state.square1Pos[1])))
        let square2distance3FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square2Pos[0]) * (this.state.circle3Pos[0] - this.state.square2Pos[0])) + ((this.state.circle3Pos[1] - this.state.square2Pos[1]) * (this.state.circle3Pos[1] - this.state.square2Pos[1])))
        let square3distance3FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square3Pos[0]) * (this.state.circle3Pos[0] - this.state.square3Pos[0])) + ((this.state.circle3Pos[1] - this.state.square3Pos[1]) * (this.state.circle3Pos[1] - this.state.square3Pos[1])))
        let square4distance3FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square4Pos[0]) * (this.state.circle3Pos[0] - this.state.square4Pos[0])) + ((this.state.circle3Pos[1] - this.state.square4Pos[1]) * (this.state.circle3Pos[1] - this.state.square4Pos[1])))
        let square5distance3FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square5Pos[0]) * (this.state.circle3Pos[0] - this.state.square5Pos[0])) + ((this.state.circle3Pos[1] - this.state.square5Pos[1]) * (this.state.circle3Pos[1] - this.state.square5Pos[1])))
        let square6distance3FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square6Pos[0]) * (this.state.circle3Pos[0] - this.state.square6Pos[0])) + ((this.state.circle3Pos[1] - this.state.square6Pos[1]) * (this.state.circle3Pos[1] - this.state.square6Pos[1])))
        let square7distance3FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square7Pos[0]) * (this.state.circle3Pos[0] - this.state.square7Pos[0])) + ((this.state.circle3Pos[1] - this.state.square7Pos[1]) * (this.state.circle3Pos[1] - this.state.square7Pos[1])))
        let square8distance3FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square8Pos[0]) * (this.state.circle3Pos[0] - this.state.square8Pos[0])) + ((this.state.circle3Pos[1] - this.state.square8Pos[1]) * (this.state.circle3Pos[1] - this.state.square8Pos[1])))
        let square9distance3FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square9Pos[0]) * (this.state.circle3Pos[0] - this.state.square9Pos[0])) + ((this.state.circle3Pos[1] - this.state.square9Pos[1]) * (this.state.circle3Pos[1] - this.state.square9Pos[1])))
        let square10distance3FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square10Pos[0]) * (this.state.circle3Pos[0] - this.state.square10Pos[0])) + ((this.state.circle3Pos[1] - this.state.square10Pos[1]) * (this.state.circle3Pos[1] - this.state.square10Pos[1])))
        let square11distance3FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square11Pos[0]) * (this.state.circle3Pos[0] - this.state.square11Pos[0])) + ((this.state.circle3Pos[1] - this.state.square11Pos[1]) * (this.state.circle3Pos[1] - this.state.square11Pos[1])))
        let square12distance3FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square12Pos[0]) * (this.state.circle3Pos[0] - this.state.square12Pos[0])) + ((this.state.circle3Pos[1] - this.state.square12Pos[1]) * (this.state.circle3Pos[1] - this.state.square12Pos[1])))
      
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
          square1distanceFromOsc3: square1distance3FromOsc3,
          square2distanceFromOsc3: square2distance3FromOsc3,
          square3distanceFromOsc3: square3distance3FromOsc3,
          square4distanceFromOsc3: square4distance3FromOsc3,
          square5distanceFromOsc3: square5distance3FromOsc3,
          square6distanceFromOsc3: square6distance3FromOsc3,
          square7distanceFromOsc3: square7distance3FromOsc3,
          square8distanceFromOsc3: square8distance3FromOsc3,
          square9distanceFromOsc3: square9distance3FromOsc3,
          square10distanceFromOsc3: square10distance3FromOsc3,
          square11distanceFromOsc3: square11distance3FromOsc3,
          square12distanceFromOsc3: square12distance3FromOsc3,

        });
        
        this.updateCanvas();
        this.updateFrequencyOSC3(posY)

      
      

        this.updateLFO3Type();
        this.updateLFO3Freq(square1distance3FromOsc3);

        this.updateOSC3chorusDepth(square2distance3FromOsc3);
        this.updateOSC3chorusRate(square2distance3FromOsc3);

        this.updateOSC3filterDepth(square3distance3FromOsc3);
        this.updateOSC3filter2Depth(square4distance3FromOsc3);
        this.updateOSC3tremoloRate(square5distance3FromOsc3)

        this.udpateOSC3delay2WetLevel(square6distance3FromOsc3);
        this.udpateOSC3delay2Time(square6distance3FromOsc3);

        this.updateOSC3reverbLevel(square9distance3FromOsc3)

        this.updateOSC3pannerPan(square10distance3FromOsc3)

        this.updateOSC3phaserDepth(square11distance3FromOsc3)
        this.updateOSC3phaserRate(square11distance3FromOsc3)
        this.updateOSC3phaserFeedback(square11distance3FromOsc3)

        this.updateOSC3overdriveDrive(square12distance3FromOsc3)
        this.updateOSC3overdriveGain(square12distance3FromOsc3)
        }

        if (this.state.osc3Neighbors.includes(4)) {
          this.setState({isLFOstarted: true})
          this.turnOnLFO3();
          this.updateLFO3Type();
          console.log('lfo', this.state.isLFOstarted)
        }
        if (this.state.osc3Neighbors.includes(5)) {
          this.setState({isOSC3chorusStarted: true})
          this.updateOSC3chorusBypass();
          
          console.log(this.state.isOSC3chorusStarted)
          console.log('chorus')
          console.log(this.state.osc3Neighbors.includes(5))
        }
        if (this.state.osc3Neighbors.includes(6)) {
          this.setState({isOSC3filterStarted: true})
          this.updateOSC3filterBypass();
          
          console.log('filter')
        }  
        if (this.state.osc3Neighbors.includes(7)) {
          this.setState({isOSC3filter2Started: true})
          this.updateOSC3filter2Bypass();
          
          console.log('filter2')
        } 
        if (this.state.osc3Neighbors.includes(8)) {
          this.setState({isOSC3tremoloStarted: true})
          this.updateOSC3tremoloBypass();
          
          console.log('tremolo')
        }
        if (this.state.osc3Neighbors.includes(9)) {
          this.setState({isOSC3delayStarted: true})
          // this.updateOSC3delay2Bypass();
          
          console.log('delay')
        }    
        if (this.state.osc3Neighbors.includes(10)) {
          this.setState({isOSC3reverbStarted: true})
          this.updateOSC3reverbBypass();
          
          console.log('reverb')
        } 
        if (this.state.osc3Neighbors.includes(11)) {
          this.setState({isOSC3pannerStarted: true})
          this.updateOSC3pannerBypass();
          
          console.log('pan')
        }   
        if (this.state.osc3Neighbors.includes(12)) {
          this.setState({isOSC3phaserStarted: true})
          this.updateOSC3phaserBypass();
          
          console.log('phase')
        }
        if (this.state.osc3Neighbors.includes(13)) {
          this.setState({isOSC3overdriveStarted: true})
          this.updateOSC3overdriveBypass();
          
          console.log('ovd')
        }
      
      

      if (this.state.start4Move) {
        
        this.state.prevCircle4Pos = this.state.circle4Pos;
        let square1distance4FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square1Pos[0]) * (this.state.circle4Pos[0] - this.state.square1Pos[0])) + ((this.state.circle4Pos[1] - this.state.square1Pos[1]) * (this.state.circle4Pos[1] - this.state.square1Pos[1])))
        let square2distance4FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square2Pos[0]) * (this.state.circle4Pos[0] - this.state.square2Pos[0])) + ((this.state.circle4Pos[1] - this.state.square2Pos[1]) * (this.state.circle4Pos[1] - this.state.square2Pos[1])))
        let square3distance4FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square3Pos[0]) * (this.state.circle4Pos[0] - this.state.square3Pos[0])) + ((this.state.circle4Pos[1] - this.state.square3Pos[1]) * (this.state.circle4Pos[1] - this.state.square3Pos[1])))
        let square4distance4FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square4Pos[0]) * (this.state.circle4Pos[0] - this.state.square4Pos[0])) + ((this.state.circle4Pos[1] - this.state.square4Pos[1]) * (this.state.circle4Pos[1] - this.state.square4Pos[1])))
        let square5distance4FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square5Pos[0]) * (this.state.circle4Pos[0] - this.state.square5Pos[0])) + ((this.state.circle4Pos[1] - this.state.square5Pos[1]) * (this.state.circle4Pos[1] - this.state.square5Pos[1])))
        let square6distance4FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square6Pos[0]) * (this.state.circle4Pos[0] - this.state.square6Pos[0])) + ((this.state.circle4Pos[1] - this.state.square6Pos[1]) * (this.state.circle4Pos[1] - this.state.square6Pos[1])))
        let square7distance4FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square7Pos[0]) * (this.state.circle4Pos[0] - this.state.square7Pos[0])) + ((this.state.circle4Pos[1] - this.state.square7Pos[1]) * (this.state.circle4Pos[1] - this.state.square7Pos[1])))
        let square8distance4FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square8Pos[0]) * (this.state.circle4Pos[0] - this.state.square8Pos[0])) + ((this.state.circle4Pos[1] - this.state.square8Pos[1]) * (this.state.circle4Pos[1] - this.state.square8Pos[1])))
        let square9distance4FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square9Pos[0]) * (this.state.circle4Pos[0] - this.state.square9Pos[0])) + ((this.state.circle4Pos[1] - this.state.square9Pos[1]) * (this.state.circle4Pos[1] - this.state.square9Pos[1])))
        let square10distance4FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square10Pos[0]) * (this.state.circle4Pos[0] - this.state.square10Pos[0])) + ((this.state.circle4Pos[1] - this.state.square10Pos[1]) * (this.state.circle4Pos[1] - this.state.square10Pos[1])))
        let square11distance4FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square11Pos[0]) * (this.state.circle4Pos[0] - this.state.square11Pos[0])) + ((this.state.circle4Pos[1] - this.state.square11Pos[1]) * (this.state.circle4Pos[1] - this.state.square11Pos[1])))
        let square12distance4FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square12Pos[0]) * (this.state.circle4Pos[0] - this.state.square12Pos[0])) + ((this.state.circle4Pos[1] - this.state.square12Pos[1]) * (this.state.circle4Pos[1] - this.state.square12Pos[1])))
        
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
          square1distanceFromOsc4: square1distance4FromOsc4,
          square2distanceFromOsc4: square2distance4FromOsc4,
          square3distanceFromOsc4: square3distance4FromOsc4,
          square4distanceFromOsc4: square4distance4FromOsc4,
          square5distanceFromOsc4: square5distance4FromOsc4,
          square6distanceFromOsc4: square6distance4FromOsc4,
          square7distanceFromOsc4: square7distance4FromOsc4,
          square8distanceFromOsc4: square8distance4FromOsc4,
          square9distanceFromOsc4: square9distance4FromOsc4,
          square10distanceFromOsc4: square10distance4FromOsc4,
          square11distanceFromOsc4: square11distance4FromOsc4,
          square12distanceFromOsc4: square12distance4FromOsc4,
        });
        
        this.updateCanvas();
        this.updateFrequencyOSC4(posY)
        
        this.updateLFO4Type();
        this.updateLFO4Freq(square1distance4FromOsc4);

        this.updateOSC4chorusDepth(square2distance4FromOsc4);
        this.updateOSC4chorusRate(square2distance4FromOsc4);

        this.updateOSC4filterDepth(square3distance4FromOsc4);
   

        this.updateOSC4filter2Depth(square4distance4FromOsc4);
  
        this.updateOSC4tremoloRate(square5distance4FromOsc4)

        this.udpateOSC4delay2WetLevel(square6distance4FromOsc4);
        this.udpateOSC4delay2Time(square6distance4FromOsc4);

        this.updateOSC4reverbLevel(square9distance4FromOsc4)

        this.updateOSC4pannerPan(square10distance4FromOsc4)

        this.updateOSC4phaserDepth(square11distance4FromOsc4)
        this.updateOSC4phaserRate(square11distance4FromOsc4)
        this.updateOSC4phaserFeedback(square11distance4FromOsc4)

        this.updateOSC4overdriveDrive(square12distance4FromOsc4)
        this.updateOSC4overdriveGain(square12distance4FromOsc4)
      }

      if (this.state.start5Move) {
        this.state.prevSquare1Pos = this.state.square1Pos;
        
        
        let square1distance5FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square1Pos[0]) * (this.state.circle1Pos[0] - this.state.square1Pos[0])) + ((this.state.circle1Pos[1] - this.state.square1Pos[1]) * (this.state.circle1Pos[1] - this.state.square1Pos[1])))
        let square1distance5FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square1Pos[0]) * (this.state.circle2Pos[0] - this.state.square1Pos[0])) + ((this.state.circle2Pos[1] - this.state.square1Pos[1]) * (this.state.circle2Pos[1] - this.state.square1Pos[1])))
        let square1distance5FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square1Pos[0]) * (this.state.circle3Pos[0] - this.state.square1Pos[0])) + ((this.state.circle3Pos[1] - this.state.square1Pos[1]) * (this.state.circle3Pos[1] - this.state.square1Pos[1])))
        let square1distance5FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square1Pos[0]) * (this.state.circle4Pos[0] - this.state.square1Pos[0])) + ((this.state.circle4Pos[1] - this.state.square1Pos[1]) * (this.state.circle4Pos[1] - this.state.square1Pos[1])))
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
          square1distanceFromOsc1: square1distance5FromOsc1,
          square1distanceFromOsc2: square1distance5FromOsc2,
          square1distanceFromOsc3: square1distance5FromOsc3,
          square1distanceFromOsc4: square1distance5FromOsc4,
        });
 
      }

      if (this.state.start6Move) {
        this.state.prevSquare2Pos = this.state.square2Pos;
        
        let square2distance6FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square2Pos[0]) * (this.state.circle1Pos[0] - this.state.square2Pos[0])) + ((this.state.circle1Pos[1] - this.state.square2Pos[1]) * (this.state.circle1Pos[1] - this.state.square2Pos[1])))
        let square2distance6FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square2Pos[0]) * (this.state.circle2Pos[0] - this.state.square2Pos[0])) + ((this.state.circle2Pos[1] - this.state.square2Pos[1]) * (this.state.circle2Pos[1] - this.state.square2Pos[1])))
        let square2distance6FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square2Pos[0]) * (this.state.circle3Pos[0] - this.state.square2Pos[0])) + ((this.state.circle3Pos[1] - this.state.square2Pos[1]) * (this.state.circle3Pos[1] - this.state.square2Pos[1])))
        let square2distance6FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square2Pos[0]) * (this.state.circle4Pos[0] - this.state.square2Pos[0])) + ((this.state.circle4Pos[1] - this.state.square2Pos[1]) * (this.state.circle4Pos[1] - this.state.square2Pos[1])))
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
          square2distanceFromOsc1: square2distance6FromOsc1,
          square2distanceFromOsc2: square2distance6FromOsc2,
          square2distanceFromOsc3: square2distance6FromOsc3,
          square2distanceFromOsc4: square2distance6FromOsc4,
        });
        this.updateCanvas();
      }

      if (this.state.start7Move) {
        this.state.prevSquare3Pos = this.state.square3Pos;
        
        let square3distance7FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square3Pos[0]) * (this.state.circle1Pos[0] - this.state.square3Pos[0])) + ((this.state.circle1Pos[1] - this.state.square3Pos[1]) * (this.state.circle1Pos[1] - this.state.square3Pos[1])))
        let square3distance7FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square3Pos[0]) * (this.state.circle2Pos[0] - this.state.square3Pos[0])) + ((this.state.circle2Pos[1] - this.state.square3Pos[1]) * (this.state.circle2Pos[1] - this.state.square3Pos[1])))
        let square3distance7FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square3Pos[0]) * (this.state.circle3Pos[0] - this.state.square3Pos[0])) + ((this.state.circle3Pos[1] - this.state.square3Pos[1]) * (this.state.circle3Pos[1] - this.state.square3Pos[1])))
        let square3distance7FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square3Pos[0]) * (this.state.circle4Pos[0] - this.state.square3Pos[0])) + ((this.state.circle4Pos[1] - this.state.square3Pos[1]) * (this.state.circle4Pos[1] - this.state.square3Pos[1])))
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
          square3distanceFromOsc1: square3distance7FromOsc1,
          square3distanceFromOsc2: square3distance7FromOsc2,
          square3distanceFromOsc3: square3distance7FromOsc3,
          square3distanceFromOsc4: square3distance7FromOsc4,
        });
        this.updateCanvas();
      }  

      if (this.state.start8Move) {
        this.state.prevSquare4Pos = this.state.square4Pos;
        
        let square4distance8FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square4Pos[0]) * (this.state.circle1Pos[0] - this.state.square4Pos[0])) + ((this.state.circle1Pos[1] - this.state.square4Pos[1]) * (this.state.circle1Pos[1] - this.state.square4Pos[1])))
        let square4distance8FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square4Pos[0]) * (this.state.circle2Pos[0] - this.state.square4Pos[0])) + ((this.state.circle2Pos[1] - this.state.square4Pos[1]) * (this.state.circle2Pos[1] - this.state.square4Pos[1])))
        let square4distance8FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square4Pos[0]) * (this.state.circle3Pos[0] - this.state.square4Pos[0])) + ((this.state.circle3Pos[1] - this.state.square4Pos[1]) * (this.state.circle3Pos[1] - this.state.square4Pos[1])))
        let square4distance8FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square4Pos[0]) * (this.state.circle4Pos[0] - this.state.square4Pos[0])) + ((this.state.circle4Pos[1] - this.state.square4Pos[1]) * (this.state.circle4Pos[1] - this.state.square4Pos[1])))
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
          square4distanceFromOsc1: square4distance8FromOsc1,
          square4distanceFromOsc2: square4distance8FromOsc2,
          square4distanceFromOsc3: square4distance8FromOsc3,
          square4distanceFromOsc4: square4distance8FromOsc4,
        });

        this.updateCanvas();
      }

      if (this.state.start9Move) {
        this.state.prevSquare5Pos = this.state.square5Pos
        let square5distance9FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square5Pos[0]) * (this.state.circle1Pos[0] - this.state.square5Pos[0])) + ((this.state.circle1Pos[1] - this.state.square5Pos[1]) * (this.state.circle1Pos[1] - this.state.square5Pos[1])))
        let square5distance9FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square5Pos[0]) * (this.state.circle2Pos[0] - this.state.square5Pos[0])) + ((this.state.circle2Pos[1] - this.state.square5Pos[1]) * (this.state.circle2Pos[1] - this.state.square5Pos[1])))
        let square5distance9FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square5Pos[0]) * (this.state.circle3Pos[0] - this.state.square5Pos[0])) + ((this.state.circle3Pos[1] - this.state.square5Pos[1]) * (this.state.circle3Pos[1] - this.state.square5Pos[1])))
        let square5distance9FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square5Pos[0]) * (this.state.circle4Pos[0] - this.state.square5Pos[0])) + ((this.state.circle4Pos[1] - this.state.square5Pos[1]) * (this.state.circle4Pos[1] - this.state.square5Pos[1])))
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
          square5distanceFromOsc1: square5distance9FromOsc1,
          square5distanceFromOsc2: square5distance9FromOsc2,
          square5distanceFromOsc3: square5distance9FromOsc3,
          square5distanceFromOsc4: square5distance9FromOsc4,
        });
        
        this.updateCanvas();
      }

      if (this.state.start10Move) {
        this.state.prevSquare6Pos = this.state.square6Pos;
        let square6distance10FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square6Pos[0]) * (this.state.circle1Pos[0] - this.state.square6Pos[0])) + ((this.state.circle1Pos[1] - this.state.square6Pos[1]) * (this.state.circle1Pos[1] - this.state.square6Pos[1])))
        let square6distance10FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square6Pos[0]) * (this.state.circle2Pos[0] - this.state.square6Pos[0])) + ((this.state.circle2Pos[1] - this.state.square6Pos[1]) * (this.state.circle2Pos[1] - this.state.square6Pos[1])))
        let square6distance10FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square6Pos[0]) * (this.state.circle3Pos[0] - this.state.square6Pos[0])) + ((this.state.circle3Pos[1] - this.state.square6Pos[1]) * (this.state.circle3Pos[1] - this.state.square6Pos[1])))
        let square6distance10FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square6Pos[0]) * (this.state.circle4Pos[0] - this.state.square6Pos[0])) + ((this.state.circle4Pos[1] - this.state.square6Pos[1]) * (this.state.circle4Pos[1] - this.state.square6Pos[1])))
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
          square6distanceFromOsc1: square6distance10FromOsc1,
          square6distanceFromOsc2: square6distance10FromOsc2,
          square6distanceFromOsc3: square6distance10FromOsc3,
          square6distanceFromOsc4: square6distance10FromOsc4,
        });
      }

      if (this.state.start11Move) {
        this.state.prevSquare7Pos = this.state.square7Pos;
        let square7distance11FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square7Pos[0]) * (this.state.circle1Pos[0] - this.state.square7Pos[0])) + ((this.state.circle1Pos[1] - this.state.square7Pos[1]) * (this.state.circle1Pos[1] - this.state.square7Pos[1])))
        let square7distance11FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square7Pos[0]) * (this.state.circle2Pos[0] - this.state.square7Pos[0])) + ((this.state.circle2Pos[1] - this.state.square7Pos[1]) * (this.state.circle2Pos[1] - this.state.square7Pos[1])))
        let square7distance11FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square7Pos[0]) * (this.state.circle3Pos[0] - this.state.square7Pos[0])) + ((this.state.circle3Pos[1] - this.state.square7Pos[1]) * (this.state.circle3Pos[1] - this.state.square7Pos[1])))
        let square7distance11FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square7Pos[0]) * (this.state.circle4Pos[0] - this.state.square7Pos[0])) + ((this.state.circle4Pos[1] - this.state.square7Pos[1]) * (this.state.circle4Pos[1] - this.state.square7Pos[1])))
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
          square7distanceFromOsc1: square7distance11FromOsc1,
          square7distanceFromOsc2: square7distance11FromOsc2,
          square7distanceFromOsc3: square7distance11FromOsc3,
          square7distanceFromOsc4: square7distance11FromOsc4,
        });

        this.updateCanvas();

      }

      if (this.state.start12Move) {
        this.state.prevSquare8Pos = this.state.square8Pos;
        let square8distance12FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square8Pos[0]) * (this.state.circle1Pos[0] - this.state.square8Pos[0])) + ((this.state.circle1Pos[1] - this.state.square8Pos[1]) * (this.state.circle1Pos[1] - this.state.square8Pos[1])))
        let square8distance12FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square8Pos[0]) * (this.state.circle2Pos[0] - this.state.square8Pos[0])) + ((this.state.circle2Pos[1] - this.state.square8Pos[1]) * (this.state.circle2Pos[1] - this.state.square8Pos[1])))
        let square8distance12FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square8Pos[0]) * (this.state.circle3Pos[0] - this.state.square8Pos[0])) + ((this.state.circle3Pos[1] - this.state.square8Pos[1]) * (this.state.circle3Pos[1] - this.state.square8Pos[1])))
        let square8distance12FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square8Pos[0]) * (this.state.circle4Pos[0] - this.state.square8Pos[0])) + ((this.state.circle4Pos[1] - this.state.square8Pos[1]) * (this.state.circle4Pos[1] - this.state.square8Pos[1])))
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
          square8distanceFromOsc1: square8distance12FromOsc1,
          square8distanceFromOsc2: square8distance12FromOsc2,
          square8distanceFromOsc3: square8distance12FromOsc3,
          square8distanceFromOsc4: square8distance12FromOsc4,
        });
      }

      if (this.state.start13Move) {
        this.state.prevSquare9Pos = this.state.square9Pos;
        let square9distance13FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square9Pos[0]) * (this.state.circle1Pos[0] - this.state.square9Pos[0])) + ((this.state.circle1Pos[1] - this.state.square9Pos[1]) * (this.state.circle1Pos[1] - this.state.square9Pos[1])))
        let square9distance13FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square9Pos[0]) * (this.state.circle2Pos[0] - this.state.square9Pos[0])) + ((this.state.circle2Pos[1] - this.state.square9Pos[1]) * (this.state.circle2Pos[1] - this.state.square9Pos[1])))
        let square9distance13FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square9Pos[0]) * (this.state.circle3Pos[0] - this.state.square9Pos[0])) + ((this.state.circle3Pos[1] - this.state.square9Pos[1]) * (this.state.circle3Pos[1] - this.state.square9Pos[1])))
        let square9distance13FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square9Pos[0]) * (this.state.circle4Pos[0] - this.state.square9Pos[0])) + ((this.state.circle4Pos[1] - this.state.square9Pos[1]) * (this.state.circle4Pos[1] - this.state.square9Pos[1])))
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
          square9distanceFromOsc1: square9distance13FromOsc1,
          square9distanceFromOsc2: square9distance13FromOsc2,
          square9distanceFromOsc3: square9distance13FromOsc3,
          square9distanceFromOsc4: square9distance13FromOsc4,
        });
        this.updateCanvas();
      }

      if (this.state.start14Move) {
        this.state.prevSquare10Pos = this.state.square10Pos;
        let square10distance14FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square10Pos[0]) * (this.state.circle1Pos[0] - this.state.square10Pos[0])) + ((this.state.circle1Pos[1] - this.state.square10Pos[1]) * (this.state.circle1Pos[1] - this.state.square10Pos[1])))
        let square10distance14FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square10Pos[0]) * (this.state.circle2Pos[0] - this.state.square10Pos[0])) + ((this.state.circle2Pos[1] - this.state.square10Pos[1]) * (this.state.circle2Pos[1] - this.state.square10Pos[1])))
        let square10distance14FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square10Pos[0]) * (this.state.circle3Pos[0] - this.state.square10Pos[0])) + ((this.state.circle3Pos[1] - this.state.square10Pos[1]) * (this.state.circle3Pos[1] - this.state.square10Pos[1])))
        let square10distance14FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square10Pos[0]) * (this.state.circle4Pos[0] - this.state.square10Pos[0])) + ((this.state.circle4Pos[1] - this.state.square10Pos[1]) * (this.state.circle4Pos[1] - this.state.square10Pos[1])))
        var posX = event.layerX;
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
          square10distanceFromOsc1: square10distance14FromOsc1,
          square10distanceFromOsc2: square10distance14FromOsc2,
          square10distanceFromOsc3: square10distance14FromOsc3,
          square10distanceFromOsc4: square10distance14FromOsc4,
        });
        this.updateCanvas();
      }

      if (this.state.start15Move) {
        this.state.prevSquare11Pos = this.state.square11Pos;
        let square11distance15FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square11Pos[0]) * (this.state.circle1Pos[0] - this.state.square11Pos[0])) + ((this.state.circle1Pos[1] - this.state.square11Pos[1]) * (this.state.circle1Pos[1] - this.state.square11Pos[1])))
        let square11distance15FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square11Pos[0]) * (this.state.circle2Pos[0] - this.state.square11Pos[0])) + ((this.state.circle2Pos[1] - this.state.square11Pos[1]) * (this.state.circle2Pos[1] - this.state.square11Pos[1])))
        let square11distance15FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square11Pos[0]) * (this.state.circle3Pos[0] - this.state.square11Pos[0])) + ((this.state.circle3Pos[1] - this.state.square11Pos[1]) * (this.state.circle3Pos[1] - this.state.square11Pos[1])))
        let square11distance15FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square11Pos[0]) * (this.state.circle4Pos[0] - this.state.square11Pos[0])) + ((this.state.circle4Pos[1] - this.state.square11Pos[1]) * (this.state.circle4Pos[1] - this.state.square11Pos[1])))
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
          square11distanceFromOsc1: square11distance15FromOsc1,
          square11distanceFromOsc2: square11distance15FromOsc2,
          square11distanceFromOsc3: square11distance15FromOsc3,
          square11distanceFromOsc4: square11distance15FromOsc4,
        });

        this.updateCanvas();
      }

      if (this.state.start16Move) {
        this.state.prevSquare12Pos = this.state.square12Pos;
        let square12distance16FromOsc1 = Math.sqrt(((this.state.circle1Pos[0] - this.state.square12Pos[0]) * (this.state.circle1Pos[0] - this.state.square12Pos[0])) + ((this.state.circle1Pos[1] - this.state.square12Pos[1]) * (this.state.circle1Pos[1] - this.state.square12Pos[1])))
        let square12distance16FromOsc2 = Math.sqrt(((this.state.circle2Pos[0] - this.state.square12Pos[0]) * (this.state.circle2Pos[0] - this.state.square12Pos[0])) + ((this.state.circle2Pos[1] - this.state.square12Pos[1]) * (this.state.circle2Pos[1] - this.state.square12Pos[1])))
        let square12distance16FromOsc3 = Math.sqrt(((this.state.circle3Pos[0] - this.state.square12Pos[0]) * (this.state.circle3Pos[0] - this.state.square12Pos[0])) + ((this.state.circle3Pos[1] - this.state.square12Pos[1]) * (this.state.circle3Pos[1] - this.state.square12Pos[1])))
        let square12distance16FromOsc4 = Math.sqrt(((this.state.circle4Pos[0] - this.state.square12Pos[0]) * (this.state.circle4Pos[0] - this.state.square12Pos[0])) + ((this.state.circle4Pos[1] - this.state.square12Pos[1]) * (this.state.circle4Pos[1] - this.state.square12Pos[1])))
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
          square12distanceFromOsc1: square12distance16FromOsc1,
          square12distanceFromOsc2: square12distance16FromOsc2,
          square12distanceFromOsc3: square12distance16FromOsc3,
          square12distanceFromOsc4: square12distance16FromOsc4,
        });
        // this.updateOSC1overdriveDrive(square12distance16FromOsc1)
        // this.updateOSC1overdriveGain(square12distance16FromOsc1)
        // this.updateOSC2overdriveDrive(square12distance16FromOsc2)
        // this.updateOSC2overdriveGain(square12distance16FromOsc2)
        // this.updateOSC3overdriveDrive(square12distance16FromOsc3)
        // this.updateOSC3overdriveGain(square12distance16FromOsc3)
        // this.updateOSC4overdriveDrive(square12distance16FromOsc4)
        // this.updateOSC4overdriveGain(square12distance16FromOsc4)
        this.updateCanvas();
      }
    }
    //////GET DISTANCE FUNCTION/////////
   


/////////OSC1 FUNCTIONS///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
    updateFrequencyOSC(posY) {
      let oscFreq = posY * Math.floor(Math.random() * (7) - 1 + 1) + 1
      this.setState({oscFreq: oscFreq})
      this.props.changeOSCFreq(oscFreq);
     
    }

    turnOnLFO() {
       if (this.state.isLFOstarted) {
        this.props.turnOnLFO(!this.props.turnOnLFO)
      }
      
      console.log(this.state.isLFOstarted)

    }

    updateLFOType() {
      let lfoWaveTypes = ['sine', 'square', 'triangle', 'sawtooth']
      let randomType = Math.floor(Math.random()*lfoWaveTypes.length)
      let lfoType = (lfoWaveTypes[randomType])
      this.setState({lfoType: lfoType})
      this.props.changeLFOType(lfoType)
     
    }

    updateLFOFreq(square1distance1FromOsc1) {
      
      
      let lfoFreq = (square1distance1FromOsc1 * 0.015) * Math.floor(Math.random() * (2) - 1 + 1) + 1
      this.setState({lfoFreq: lfoFreq})
      this.props.changeLFOFreq(lfoFreq)

  
      console.log(this.props.lfoFreq, 'lfofreq')
      //Math.floor((square1distanceFromOsc1 * .002) * Math.floor(Math.random() * (12) - 1 + 1) + 1)
      
    }

    updateOSC1chorusBypass(){
      if (this.state.isOSC1chorusStarted) {
        this.props.toggleOSC1chorusBypass(!this.props.osc1chorusBypass)
      }
      console.log(this.props.osc1chorusBypass)
      console.log(this.state.isOSC1chorusStarted)
    }

    updateOSC1chorusDepth(square2distance1FromOsc1) {
      let osc1chorusDepth = (1000 - square2distance1FromOsc1) * .001
      this.setState({osc1chorusDepth: osc1chorusDepth})
      this.props.changeOSC1chorusDepth(osc1chorusDepth)
  
    }

    updateOSC1filterBypass(){
      if (this.state.isOSC1filterStarted) {
        this.props.toggleOSC1filterBypass(!this.props.osc1filterBypass)
      }
      console.log(this.props.osc1filterBypass)
      console.log(this.state.isOSC1filterStarted)
    }

    updateOSC1filterDepth(square3distance1FromOsc1) {
      let osc1filterDepth = square3distance1FromOsc1 * Math.floor(Math.random() * (7) - 1 + 1) + 20
      this.setState({osc1filterDepth: osc1filterDepth})
      this.props.changeOSC1filterDepth(osc1filterDepth)
    }


    updateOSC1filter2Bypass(){
      if (this.state.isOSC1filter2Started) {
        this.props.toggleOSC1filter2Bypass(!this.props.osc1filter2Bypass)
      }
      console.log(this.props.osc1filter2Bypass)
      console.log(this.state.isOSC1filter2Started)
    }

    updateOSC1filter2Depth(square4distance1FromOsc1) {
      let osc1filter2Depth =  (1000 - square4distance1FromOsc1) * 4
      this.setState({osc1filter2Depth: osc1filter2Depth})
      this.props.changeOSC1filter2Depth(osc1filter2Depth)
    }

    updateOSC1tremoloBypass(){
      if (this.state.isOSC1tremoloStarted) {
        this.props.toggleOSC1tremoloBypass(!this.props.osc1tremoloBypass)
      }
      console.log(this.props.osc1tremoloBypass)
      console.log(this.state.isOSC1tremoloStarted)
    }

    updateOSC1tremoloRate(square5distance1FromOsc1) {
       let osc1tremoloRate = square5distance1FromOsc1 * .011
      this.setState({osc1tremoloRate: osc1tremoloRate})
      this.props.changeOSC1tremoloRate(osc1tremoloRate)
      console.log(square5distance1FromOsc1 * .011)
      console.log(osc1tremoloRate)
    }

    // updateOSC1delay2Bypass(){
    //   if (this.state.isOSC1delay2Started) {
    //     this.props.toggleOSC1delay2Bypass(!this.props.osc1delay2Bypass)
    //   }
    //   console.log(this.props.osc1delay2Bypass, 'delay')
    //   console.log(this.state.isOSC1delay2Started, 'delay')
    // }

    udpateOSC1delay2WetLevel(square6distance1FromOsc1) {
      let osc1delay2WetLevel = (1000 - square6distance1FromOsc1) * .001
      this.setState({osc1delay2WetLevel: osc1delay2WetLevel})
      this.props.changeOSC1delay2WetLevel(osc1delay2WetLevel)
    }

    udpateOSC1delay2Time(square6distance1FromOsc1) {
      let osc1delay2Time = (1000 - square6distance1FromOsc1) * .001
      this.setState({osc1delay2Time: osc1delay2Time})
      this.props.changeOSC1delay2Time(osc1delay2Time)
    }

    // updateOSC1wahBaseFrequency(square7distance1FromOsc1) {
    //   let osc1wahBaseFrequency = (1000 - square7distance1FromOsc1) * .001
    //   console.log(osc1wahBaseFrequency)
    //   this.setState({osc1wahBaseFrequency: osc1wahBaseFrequency})
    //   this.props.changeOSC1wahBaseFrequency(osc1wahBaseFrequency)
    // }

    updateOSC1reverbBypass(){
      if (this.state.isOSC1reverbStarted) {
        this.props.toggleOSC1reverbBypass(!this.props.osc1reverbBypass)
      }
      console.log(this.props.osc1reverbBypass)
      console.log(this.state.isOSC1reverbStarted)
    }

    updateOSC1reverbLevel(square7distance1FromOsc1) {
      let osc1reverbLevel = (1000 - square7distance1FromOsc1) * .001
      this.setState({osc1reverbLevel: osc1reverbLevel})
      this.props.changeOSC1reverbLevel(osc1reverbLevel)
    }

    updateOSC1pannerBypass(){
      if (this.state.isOSC1pannerStarted) {
        this.props.toggleOSC1pannerBypass(!this.props.osc1pannerBypass)
      }
      console.log(this.props.osc1pannerBypass)
      console.log(this.state.isOSC1pannerStarted)
    }

    updateOSC1pannerPan(square8distance1FromOsc1) {
      let osc1pannerPan = (square8distance1FromOsc1 * .002) - 1
    
      this.setState({osc1pannerPan: osc1pannerPan})
      this.props.changeOSC1pannerPan(osc1pannerPan)
    }

    updateOSC1phaserBypass() {
      if (this.state.isOSC1phaserStarted) {
        this.props.toggleOSC1phaserBypass(!this.props.osc1phaserBypass)
      }
      console.log(this.props.osc1phaserBypass)
      console.log(this.state.isOSC1phaserStarted)
    }

    updateOSC1phaserRate(square9distance1FromOsc1) {
      let osc1phaserRate = Math.floor(square9distance1FromOsc1 * .008) + 1
      this.setState({osc1phaserRate: osc1phaserRate})
      this.props.changeOSC1phaserRate(osc1phaserRate)
    }

    updateOSC1phaserDepth(square9distance1FromOsc1) {
      let osc1phaserDepth = square9distance1FromOsc1 * .001
      this.setState({osc1phaserDepth: osc1phaserDepth})
      this.props.changeOSC1phaserDepth(osc1phaserDepth)
    }

    updateOSC1phaserFeedback(square9distance1FromOsc1) {
       let osc1phaserFeedback = (1000 - square9distance1FromOsc1) * .001
       this.setState({osc1phaserFeedback: osc1phaserFeedback})
       this.props.changeOSC1phaserFeedback(osc1phaserFeedback)
    }

    updateOSC1overdriveBypass(){
      if (this.state.isOSC1overdriveStarted) {
        this.props.toggleOSC1overdriveBypass(!this.props.osc1overdriveBypass)
      }
      console.log(this.props.osc1overdriveBypass)
      console.log(this.state.isOSC1overdriveStarted)
    }

    updateOSC1overdriveDrive(square10distance1FromOsc1) {
      let osc1overdriveDrive = (1000 - square10distance1FromOsc1) * .001
      this.setState({osc1overdriveDrive: osc1overdriveDrive})
      this.props.changeOSC1overdriveDrive(osc1overdriveDrive)
    }

    updateOSC1overdriveGain(square10distance1FromOsc1) {
      let osc1overdriveGain = Math.floor(46 - ((1000 - square10distance1FromOsc1) * .046)) * -1
      this.setState({osc1overdriveGain: osc1overdriveGain})
      this.props.changeOSC1overdriveGain(osc1overdriveGain)
    }

/////////OSC2 FUNCTIONS/////////////
    updateFrequencyOSC2(posY) {
      let osc2Freq = posY * Math.floor(Math.random() * (7) - 1 + 1) + 1
      this.setState({osc2Freq: osc2Freq})
      this.props.changeOSC2Freq(osc2Freq);
      
    }
    


    turnOnLFO2() {
      this.props.turnOnLFO2(!this.props.isLFO2On);
      
    }

    updateLFO2Type() {
      let lfoWaveTypes = ['sine', 'square', 'triangle', 'sawtooth']
      let randomType = Math.floor(Math.random()*lfoWaveTypes.length)
      let lfo2Type = (lfoWaveTypes[randomType])
      this.setState({lfo2Type: lfo2Type})
      this.props.changeLFO2Type(lfo2Type)
    }

    updateLFO2Freq(square1distance2FromOsc2) {
      let lfo2Freq = (1000 - square1distance2FromOsc2) * .075
      this.props.changeLFO2Freq(lfo2Freq)
      
    }

    updateOSC2chorusBypass(){
      
      this.props.toggleOSC2chorusBypass(!this.props.osc2chorusBypass)
      
    }

    updateOSC2chorusDepth(square2distance2FromOsc2) {
      let osc2chorusDepth = (1000 - square2distance2FromOsc2) * .001
      this.setState({osc2chorusDepth: osc2chorusDepth})
      this.props.changeOSC2chorusDepth(osc2chorusDepth)
      
    }

    updateOSC2chorusRate(square2distance2FromOsc2) {
      let osc2chorusRate = Math.floor(square2distance2FromOsc2 * .008)
      this.setState({osc2chorusRate: osc2chorusRate})
      this.props.changeOSC2chorusRate(osc2chorusRate)
    }

    updateOSC2filterBypass() {
      this.props.toggleOSC2filterBypass(!this.props.osc2filterBypass)
      
    }

    updateOSC2filterDepth(square3distance2FromOsc2) {
      let osc2filterDepth = square3distance2FromOsc2 * Math.floor(Math.random() * (7) - 1 + 1) + 20
      this.setState({osc2filterDepth: osc2filterDepth})
      this.props.changeOSC2filterDepth(osc2filterDepth)
    }

    updateOSC2filter2Bypass() {
      
      this.props.toggleOSC2filter2Bypass(!this.props.osc2filter2Bypass)
      
    
    }

    updateOSC2filter2Depth(square4distance2FromOsc2) {
      let osc2filter2Depth =  (1000 - square4distance2FromOsc2) * 4
      this.setState({osc2filter2Depth: osc2filter2Depth})
      this.props.changeOSC2filter2Depth(osc2filter2Depth)
     
    }

    updateOSC2tremoloBypass() {
     
      this.props.toggleOSC2tremoloBypass(!this.props.osc2tremoloBypass)
     
    }

    updateOSC2tremoloRate(square5distance2FromOsc2) {
      let osc2tremoloRate = square5distance2FromOsc2 * .011
      this.setState({osc2tremoloRate: osc2tremoloRate})
      this.props.changeOSC2tremoloRate(osc2tremoloRate) 
    }

    udpateOSC2delay2WetLevel(square6distance2FromOsc2) {
      let osc2delay2WetLevel = (1000 - square6distance2FromOsc2) * .001
      this.setState({osc2delay2WetLevel: osc2delay2WetLevel})
      this.props.changeOSC2delay2WetLevel(osc2delay2WetLevel)
    }

    udpateOSC2delay2Time(square6distance2FromOsc2) {
      let osc2delay2Time = (1000 - square6distance2FromOsc2)
      this.setState({osc2delay2Time: osc2delay2Time})
      this.props.changeOSC2delay2Time(osc2delay2Time)
    }

    updateOSC2reverbBypass() {
      this.props.toggleOSC2reverbBypass(!this.props.osc2reverbBypass)
    }

    updateOSC2reverbLevel(square9distance2FromOsc2) {
      let osc2reverbLevel = (1000 - square9distance2FromOsc2) * .001
      this.setState({osc2reverbLevel: osc2reverbLevel})
      this.props.changeOSC2reverbLevel(osc2reverbLevel)
    }

    updateOSC2pannerBypass() {
      this.props.toggleOSC2pannerBypass(!this.props.osc2pannerBypass)
     
    }

    updateOSC2pannerPan(square10distance2FromOsc2) {
      let osc2pannerPan = (square10distance2FromOsc2 * .002) - 1 
      this.setState({osc2pannerPan: osc2pannerPan})
      this.props.changeOSC2pannerPan(osc2pannerPan)
    }

    updateOSC2phaserBypass() {
      this.props.toggleOSC2phaserBypass(!this.props.osc2phaserBypass)
      
    }

    updateOSC2phaserRate(square11distance2FromOsc2) {
      let osc2phaserRate = Math.floor(square11distance2FromOsc2 * .008) + 1
      this.setState({osc2phaserRate: osc2phaserRate})
      this.props.changeOSC2phaserRate(osc2phaserRate)
    }

    updateOSC2phaserDepth(square11distance2FromOsc2) {
      let osc2phaserDepth = square11distance2FromOsc2 * .001
      this.setState({osc2phaserDepth: osc2phaserDepth})
      this.props.changeOSC2phaserDepth(osc2phaserDepth)
    }

    updateOSC2phaserFeedback(square11distance2FromOsc2) {
       let osc2phaserFeedback = (1000 - square11distance2FromOsc2) * .001
       this.setState({osc2phaserFeedback: osc2phaserFeedback})
       this.props.changeOSC2phaserFeedback(osc2phaserFeedback)
    }

    updateOSC2overdriveBypass() {
      this.props.toggleOSC2overdriveBypass(!this.props.osc2overdriveBypass)
    }

    updateOSC2overdriveDrive(square12distance2FromOsc2) {
      let osc2overdriveDrive = (1000 - square12distance2FromOsc2) * .001
      this.setState({osc2overdriveDrive: osc2overdriveDrive})
      this.props.changeOSC2overdriveDrive(osc2overdriveDrive)
    }

    updateOSC2overdriveGain(square12distance2FromOsc2) {
      let osc2overdriveGain = Math.floor(46 - ((1000 - square12distance2FromOsc2) * .046)) * -1
      this.setState({osc2overdriveGain: osc2overdriveGain})
      this.props.changeOSC2overdriveGain(osc2overdriveGain)
    }



/////////OSC3 FUNCTIONS///////////////////////////
    updateFrequencyOSC3(posY) {
      let osc3Freq = posY * Math.floor(Math.random() * (7) - 1 + 1) + 1
      this.setState({osc3Freq: osc3Freq})
      this.props.changeOSC3Freq(osc3Freq);
    }


    turnOnLFO3() {
      if (this.state.isLFO3started) {
        this.props.turnOnLFO3(!this.props.isLFO3On);
      }
      console.log(this.state.isLFO3started, 'lfo')
    }

    updateLFO3Type() {
      let lfoWaveTypes = ['sine', 'square', 'triangle', 'sawtooth']
      let randomType = Math.floor(Math.random()*lfoWaveTypes.length)
      let lfo3Type = (lfoWaveTypes[randomType])
      this.setState({lfo3Type: lfo3Type})
      this.props.changeLFO3Type(lfo3Type)
    }

    updateLFO3Freq(square1distance3FromOsc3) {
      let lfo3Freq = (1000 - square1distance3FromOsc3) * .015
      this.props.changeLFO3Freq(lfo3Freq)
      
    }

    updateOSC3chorusBypass(){
      this.props.toggleOSC3chorusBypass(!this.props.osc3chorusBypass)
      
    }

    updateOSC3chorusDepth(square2distance3FromOsc3) {
      let osc3chorusDepth = (1000 - square2distance3FromOsc3) * .001
      this.setState({osc3chorusDepth: osc3chorusDepth})
      this.props.changeOSC3chorusDepth(osc3chorusDepth)
    }

    updateOSC3chorusRate(square2distance3FromOsc3) {
      
      let osc3chorusRate = Math.floor(square2distance3FromOsc3 * .008)
      this.setState({osc3chorusRate: osc3chorusRate})
      this.props.changeOSC3chorusRate(osc3chorusRate)
    }

    updateOSC3filterBypass() {
      this.props.toggleOSC3filterBypass(!this.props.osc3filterBypass)
      
    }

    updateOSC3filterDepth(square3distance3FromOsc3) {
      let osc3filterDepth = square3distance3FromOsc3 * Math.floor(Math.random() * (7) - 1 + 1) + 20
      this.setState({osc3filterDepth: osc3filterDepth})
      this.props.changeOSC3filterDepth(osc3filterDepth)
      
    }
    updateOSC3filter2Bypass() {
      this.props.toggleOSC3filter2Bypass(!this.props.osc3filter2Bypass)
      
    }

    updateOSC3filter2Depth(square4distance3FromOsc3) {
      let osc3filter2Depth = (1000 - square4distance3FromOsc3) * 4
      this.setState({osc3filter2Depth: osc3filter2Depth})
      this.props.changeOSC3filter2Depth(osc3filter2Depth)
    }

    updateOSC3tremoloBypass() {
      this.props.toggleOSC3tremoloBypass(!this.props.osc3tremoloBypass)
  
    }

    updateOSC3tremoloRate(square5distance3FromOsc3) {
      let osc3tremoloRate = square5distance3FromOsc3 * .011
      this.setState({osc3tremoloRate: osc3tremoloRate})
      this.props.changeOSC3tremoloRate(osc3tremoloRate)
    }

    udpateOSC3delay2WetLevel(square6distance3FromOsc3) {
      let osc3delay2WetLevel = (1000 - square6distance3FromOsc3) * .001
      this.setState({osc3delay2WetLevel: osc3delay2WetLevel})
      this.props.changeOSC3delay2WetLevel(osc3delay2WetLevel)
    }

    udpateOSC3delay2Time(square6distance3FromOsc3) {
      let osc3delay2Time = (1000 - square6distance3FromOsc3)
      this.setState({osc3delay2Time: osc3delay2Time})
      this.props.changeOSC3delay2Time(osc3delay2Time)
    }


    updateOSC3reverbBypass() {
      this.props.toggleOSC3reverbBypass(!this.props.osc3reverbBypass)
      
    }

    updateOSC3reverbLevel(square9distance3FromOsc3) {
      let osc3reverbLevel = (1000 - square9distance3FromOsc3) * .001
      this.setState({osc3reverbLevel: osc3reverbLevel})
      this.props.changeOSC3reverbLevel(osc3reverbLevel)
    }

    updateOSC3pannerBypass() {
      this.props.toggleOSC3pannerBypass(!this.props.osc3pannerBypass)
      
    }

    updateOSC3pannerPan(square10distance3FromOsc3) {
      let osc3pannerPan = (square10distance3FromOsc3 * .002) - 1
      this.setState({osc3pannerPan: osc3pannerPan})
      this.props.changeOSC3pannerPan(osc3pannerPan)
    }

    updateOSC3phaserBypass() {
      this.props.toggleOSC3phaserBypass(!this.props.osc3phaserBypass)
      
    }

    updateOSC3phaserRate(square11distance3FromOsc3) {
      let osc3phaserRate = Math.floor(square11distance3FromOsc3 * .008) + 1
      this.setState({osc3phaserRate: osc3phaserRate})
      this.props.changeOSC3phaserRate(osc3phaserRate)
    }

    updateOSC3phaserDepth(square11distance3FromOsc3) {
      let osc3phaserDepth = square11distance3FromOsc3 * .001
      this.setState({osc3phaserDepth: osc3phaserDepth})
      this.props.changeOSC3phaserDepth(osc3phaserDepth)
    }

    updateOSC3phaserFeedback(square11distance3FromOsc3) {
       let osc3phaserFeedback = (100 - square11distance3FromOsc3) * .001
       this.setState({osc3phaserFeedback: osc3phaserFeedback})
       this.props.changeOSC3phaserFeedback(osc3phaserFeedback)
    }

    updateOSC3overdriveBypass() {
      this.props.toggleOSC3overdriveBypass(!this.props.osc3overdriveBypass)
     
    }

    updateOSC3overdriveDrive(square12distance3FromOsc3) {
      let osc3overdriveDrive = (1000 - square12distance3FromOsc3) * .001
      this.setState({osc3overdriveDrive: osc3overdriveDrive})
      this.props.changeOSC3overdriveDrive(osc3overdriveDrive)
    }

    updateOSC3overdriveGain(square12distance3FromOsc3) {
      let osc3overdriveGain = Math.floor(46 - ((1000 - square12distance3FromOsc3) * .046)) * -1
      this.setState({osc3overdriveGain: osc3overdriveGain})
      this.props.changeOSC3overdriveGain(osc3overdriveGain)
    }


/////////OSC4 FUNCTIONS/////////////
    updateFrequencyOSC4(posY) {
    
      let osc4Freq = this.state.circle4Pos[1] * Math.floor(Math.random() * (7) - 1 + 1) + 1
      this.props.changeOSC4Freq(osc4Freq);
    }



    turnOnLFO4() {
      this.props.turnOnLFO4(!this.props.isLFO4On);
      
    }

    updateLFO4Type() {
      let lfoWaveTypes = ['sine', 'square', 'triangle', 'sawtooth']
      let randomType = Math.floor(Math.random()*lfoWaveTypes.length)
      let lfo4Type = (lfoWaveTypes[randomType])
      this.setState({lfo4Type: lfo4Type})
      this.props.changeLFO4Type(lfo4Type)
    }

    updateLFO4Freq(square1distance4FromOsc4) {
        let lfo4Freq = (Math.floor(square1distance4FromOsc4 * 0.01)) * Math.floor(Math.random() * (2) - 1 + 1) + 1
        this.props.changeLFO4Freq(lfo4Freq)
    }

    updateOSC4chorusBypass(){
      this.props.toggleOSC4chorusBypass(!this.props.osc4chorusBypass)
      
    }

    updateOSC4chorusDepth(square2distance4FromOsc4) {
      let osc4chorusDepth = (1000 - square2distance4FromOsc4) * .001
      this.setState({osc4chorusDepth: osc4chorusDepth})
      this.props.changeOSC4chorusDepth(osc4chorusDepth)
    }

    updateOSC4chorusRate(square2distance4FromOsc4) {
      
      let osc4chorusRate = Math.floor(square2distance4FromOsc4 * .008)
      this.setState({osc4chorusRate: osc4chorusRate})
      this.props.changeOSC4chorusRate(osc4chorusRate)
    }

    updateOSC4filterBypass() {
      this.props.toggleOSC4filterBypass(!this.props.osc4filterBypass)
      
    }

    updateOSC4filterDepth(square3distance4FromOsc4) {
      let osc4filterDepth = square3distance4FromOsc4 * Math.floor(Math.random() * (7) - 1 + 1) + 20
      this.setState({osc4filterDepth: osc4filterDepth})
      this.props.changeOSC4filterDepth(osc4filterDepth)
    }
    updateOSC4filter2Bypass() {
      this.props.toggleOSC4filter2Bypass(!this.props.osc4filter2Bypass)
      
    }

    updateOSC4filter2Depth(square4distance4FromOsc4) {
      let osc4filter2Depth =  (1000 - square4distance4FromOsc4) * 4
      this.setState({osc4filter2Depth: osc4filter2Depth})
      this.props.changeOSC4filter2Depth(osc4filter2Depth)
      
    }
    updateOSC4tremoloBypass() {
    
      this.props.toggleOSC4tremoloBypass(!this.props.osc4tremoloBypass)
      
    }

    updateOSC4tremoloRate(square5distance4FromOsc4) {
      let osc4tremoloRate = square5distance4FromOsc4 * .011
      this.setState({osc4tremoloRate: osc4tremoloRate})
      this.props.changeOSC4tremoloRate(osc4tremoloRate)
    }

    udpateOSC4delay2WetLevel(square6distance4FromOsc4) {
      let osc4delay2WetLevel = (1000 - square6distance4FromOsc4) * .001
      this.setState({osc4delay2WetLevel: osc4delay2WetLevel})
      this.props.changeOSC4delay2WetLevel(osc4delay2WetLevel)
    }

    udpateOSC4delay2Time(square6distance4FromOsc4) {
      let osc4delay2Time = (1000 - square6distance4FromOsc4)
      this.setState({osc4delay2Time: osc4delay2Time})
      this.props.changeOSC4delay2Time(osc4delay2Time)
    }


    updateOSC4reverbBypass() {
      this.props.toggleOSC4reverbBypass(!this.props.osc4reverbBypass)
      
    }

    updateOSC4reverbLevel(square9distance4FromOsc4) {
      let osc4reverbLevel = (1000 - square9distance4FromOsc4) * .001
      this.setState({osc4reverbLevel: osc4reverbLevel})
      this.props.changeOSC4reverbLevel(osc4reverbLevel)
    }

    updateOSC4pannerBypass() {
      this.props.toggleOSC4pannerBypass(!this.props.osc4pannerBypass)
   
    }

    updateOSC4pannerPan(square10distance4FromOsc4) {
      let osc4pannerPan = (square10distance4FromOsc4 * .002) - 1 
      this.setState({osc4pannerPan: osc4pannerPan})
      this.props.changeOSC4pannerPan(osc4pannerPan)
    }

    updateOSC4phaserBypass() {
      this.props.toggleOSC4phaserBypass(!this.props.osc4phaserBypass)
      
    }

    updateOSC4phaserRate(square11distance4FromOsc4) {
      let osc4phaserRate = Math.floor(square11distance4FromOsc4 * .008) + 1
      this.setState({osc4phaserRate: osc4phaserRate})
      this.props.changeOSC4phaserRate(osc4phaserRate)
    }

    updateOSC4phaserDepth(square11distance4FromOsc4) {
      let osc4phaserDepth = square11distance4FromOsc4 * .001
      this.setState({osc4phaserDepth: osc4phaserDepth})
      this.props.changeOSC4phaserDepth(osc4phaserDepth)
    }

    updateOSC4phaserFeedback(square11distance4FromOsc4) {
       let osc4phaserFeedback = (1000 - square11distance4FromOsc4) * .001
       this.setState({osc4phaserFeedback: osc4phaserFeedback})
       this.props.changeOSC4phaserFeedback(osc4phaserFeedback)
    }

    updateOSC4overdriveBypass() {
      this.props.toggleOSC4overdriveBypass(!this.props.osc4overdriveBypass)
      
    }

    updateOSC4overdriveDrive(square12distance4FromOsc4) {
      let osc4overdriveDrive = (1000 - square12distance4FromOsc4) * .001
      this.setState({osc4overdriveDrive: osc4overdriveDrive})
      this.props.changeOSC4overdriveDrive(osc4overdriveDrive)
    }

    updateOSC4overdriveGain(square12distance4FromOsc4) {
      let osc4overdriveGain = Math.floor(46 - ((1000 - square12distance4FromOsc4) * .046)) * -1
      this.setState({osc4overdriveGain: osc4overdriveGain})
      this.props.changeOSC4overdriveGain(osc4overdriveGain)
    }


    render() {
        // console.log(this.props.osc1delay2Time, 'delay')
        // console.log(this.state.osc1delay2Time, 'delay')
        // // console.log(this.state.lfoType)
        // // console.log(this.props.osc1wahBaseFrequency)
        // // console.log(this.state.osc1wahBaseFrequency)
        // console.log(this.props.lfo2Type, 'delay')
        // // console.log(this.state.lfo2Freq)
        // console.log(this.state.lfo2Type, 'delay')
        // console.log(this.props.lfo3Freq)
        // console.log(this.props.lfo3Type)
        // console.log(this.state.lfo3Freq)
        // console.log(this.state.lfo3Type)
        // console.log(this.props.lfo4Freq)
        // console.log(this.props.lfo4Type)
        // console.log(this.state.lfo4Freq)
        // console.log(this.state.lfo4Type)
        const { color, width, height} = this.props;

        

        return (
          
          <div>
            <canvas ref="canvas" width={ width } height={ height }></canvas> 
             
          </div>        
        )
    }
}

function mapStateToProps(state){
  
  return {
    oscFreq: state.oscFreq,

    isLFOOn: state.isLFOOn,
		lfoFreq: state.lfoFreq,
		lfoType: state.lfoType,

    osc1chorusBypass: state.osc1chorusBypass,
		osc1chorusDepth: state.osc1chorusDepth,
		osc1chorusRate: state.osc1chorusRate,

		osc1filterBypass: state.osc1filterBypass,
		osc1filterDepth: state.osc1filterDepth,

		osc1filter2Bypass: state.osc1filter2Bypass,
		osc1filter2Depth: state.osc1filter2Depth,

		osc1tremoloBypass: state.osc1tremoloBypass,
		osc1tremoloRate: state.osc1tremoloRate,

    osc1delay2WetLevel: state.osc1delay2WetLevel,
    osc1delay2Time: state.osc1delay2Time,
    osc1delay2Bypass: state.osc1delay2Bypass,

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
		osc2filterDepth: state.osc2filterDepth,

		osc2filter2Bypass: state.osc2filter2Bypass,
		osc2filter2Depth: state.osc2filter2Depth,

		osc2tremoloBypass: state.osc2tremoloBypass,
		osc2tremoloRate: state.osc2tremoloRate,

    osc2delay2WetLevel: state.osc2delay2WetLevel,
    osc2delay2Time: state.osc2delay2Time,

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
		osc3filterDepth: state.osc3filterDepth,

		osc3filter2Bypass: state.osc3filter2Bypass,
		osc3filter2Depth: state.osc3filter2Depth,

		osc3tremoloBypass: state.osc3tremoloBypass,
		osc3tremoloRate: state.osc3tremoloRate,

    osc3delay2WetLevel: state.osc3delay2WetLevel,
    osc3delay2Time: state.osc3delay2Time,

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
		osc4filterDepth: state.osc4filterDepth,

		osc4filter2Bypass: state.osc4filter2Bypass,
		osc4filter2Depth: state.osc4filter2Depth,

		osc4tremoloBypass: state.osc4tremoloBypass,
		osc4tremoloRate: state.osc4tremoloRate,

    osc4delay2WetLevel: state.osc4delay2WetLevel,
    osc4delay2Time: state.osc4delay2Time,

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

    toggleOSC1filter2Bypass: () => dispatch(toggleOSC1filter2Bypass()),
    changeOSC1filter2Depth: (value) => dispatch(changeOSC1filter2Depth(value)),

    toggleOSC1tremoloBypass: () => dispatch(toggleOSC1tremoloBypass()),
    changeOSC1tremoloRate: (value) => dispatch(changeOSC1tremoloRate(value)),

    changeOSC1delay2WetLevel: (value) => dispatch(changeOSC1delay2WetLevel(value)),
    changeOSC1delay2Time: (value) => dispatch(changeOSC1delay2Time(value)),
    toggleOSC1delay2Bypass: () => dispatch(toggleOSC1delay2Bypass()),

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

    toggleOSC2filter2Bypass: () => dispatch(toggleOSC2filter2Bypass()),
    changeOSC2filter2Depth: (value) => dispatch(changeOSC2filter2Depth(value)),

    toggleOSC2tremoloBypass: () => dispatch(toggleOSC2tremoloBypass()),
    changeOSC2tremoloRate: (value) => dispatch(changeOSC2tremoloRate(value)),

    changeOSC2delay2WetLevel: (value) => dispatch(changeOSC2delay2WetLevel(value)),
    changeOSC2delay2Time: (value) => dispatch(changeOSC2delay2Time(value)),

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

    toggleOSC3filter2Bypass: () => dispatch(toggleOSC3filter2Bypass()),
    changeOSC3filter2Depth: (value) => dispatch(changeOSC3filter2Depth(value)),

    toggleOSC3tremoloBypass: () => dispatch(toggleOSC3tremoloBypass()),
    changeOSC3tremoloRate: (value) => dispatch(changeOSC3tremoloRate(value)),

    changeOSC3delay2WetLevel: (value) => dispatch(changeOSC3delay2WetLevel(value)),
    changeOSC3delay2Time: (value) => dispatch(changeOSC3delay2Time(value)),

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

    toggleOSC4filter2Bypass: () => dispatch(toggleOSC4filter2Bypass()),
    changeOSC4filter2Depth: (value) => dispatch(changeOSC4filter2Depth(value)),

    toggleOSC4tremoloBypass: () => dispatch(toggleOSC4tremoloBypass()),
    changeOSC4tremoloRate: (value) => dispatch(changeOSC4tremoloRate(value)),

    changeOSC4delay2WetLevel: (value) => dispatch(changeOSC4delay2WetLevel(value)),
    changeOSC4delay2Time: (value) => dispatch(changeOSC4delay2Time(value)),

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

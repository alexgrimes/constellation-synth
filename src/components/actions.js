export const PLAY_SYNTH = 'PLAY_SYNTH';
export const CHANGE_OSC_TYPE = 'CHANGE_OSC_TYPE';
export const CHANGE_OSC_FREQ = 'CHANGE_OSC_FREQ';
export const TURN_ON_OSC2 = 'TURN_ON_OSC2';
export const CHANGE_OSC2_TYPE = 'CHANGE_OSC2_TYPE';
export const CHANGE_OSC2_FREQ = 'CHANGE_OSC2_FREQ';
export const TURN_ON_OSC3 = 'TURN_ON_OSC3';
export const CHANGE_OSC3_TYPE = 'CHANGE_OSC3_TYPE';
export const CHANGE_OSC3_FREQ = 'CHANGE_OSC3_FREQ';
export const TURN_ON_OSC4 = 'TURN_ON_OSC4';
export const CHANGE_OSC4_TYPE = 'CHANGE_OSC4_TYPE';
export const CHANGE_OSC4_FREQ = 'CHANGE_OSC4_FREQ';
export const TURN_ON_LFO = 'TURN_ON_LFO';
export const CHANGE_LFO_TYPE = 'CHANGE_LFO_TYPE';
export const CHANGE_LFO_FREQ = 'CHANGE_LFO_FREQ';
export const TURN_ON_DELAY = 'TURN_ON_DELAY';

export function playSynth(){
  return {	
    type: 'PLAY_SYNTH'
  }  
};

export function changeOSCType(wave){
  return {	
    type: 'CHANGE_OSC_TYPE',
    waveType: wave
  }  
};

export function changeOSCFreq(value){
  console.log(value)
  return {	  
    type: 'CHANGE_OSC_FREQ',
    freq: value
  }  
};

export function turnOnOSC2(){
  return {	
    type: 'TURN_ON_OSC2'
  }  
};

export function changeOSC2Type(wave){
  return {	
    type: 'CHANGE_OSC2_TYPE',
    waveType: wave
  }  
};

export function changeOSC2Freq(value){
  console.log(value)
  return {	
    type: 'CHANGE_OSC2_FREQ',
    freq: value
  }  
};

export function turnOnOSC3(){
  return {	
    type: 'TURN_ON_OSC3'
  }  
};

export function changeOSC3Type(wave){
  return {	
    type: 'CHANGE_OSC3_TYPE',
    waveType: wave
  }  
};

export function changeOSC3Freq(value){
  console.log(value)
  return {	
    type: 'CHANGE_OSC3_FREQ',
    freq: value
  }  
};

export function turnOnOSC4(){
  return {	
    type: 'TURN_ON_OSC4'
  }  
};

export function changeOSC4Type(wave){
  return {	
    type: 'CHANGE_OSC4_TYPE',
    waveType: wave
  }  
};

export function changeOSC4Freq(value){
  console.log(value)
  return {	
    type: 'CHANGE_OSC4_FREQ',
    freq: value
  }  
};

export function turnOnLFO(){
  console.log('lfo on action')
  return {	
    type: 'TURN_ON_LFO'
  }  
};

export function changeLFOType(wave){
  return {	
    type: 'CHANGE_LFO_TYPE',
    waveType: wave
  }  
};

export function changeLFOFreq(value){
  console.log(value)
  return {	
    type: 'CHANGE_LFO_FREQ',
    freq: value
  }  
};









export function turnOnDelay(){
  return {	
    type: 'TURN_ON_DELAY'
  }  
};
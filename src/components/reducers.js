import { 
  PLAY_SYNTH, 
  CHANGE_OSC2_TYPE,
  CHANGE_OSC3_TYPE, 
  CHANGE_OSC3_FREQ,
  CHANGE_OSC4_TYPE, 
  CHANGE_OSC4_FREQ, 
  CHANGE_OSC2_FREQ, 
  CHANGE_OSC_TYPE, 
  CHANGE_OSC_FREQ, 
  TURN_ON_LFO,
  CHANGE_LFO_TYPE,
  CHANGE_LFO_FREQ,
  TURN_ON_OSC2,
  TURN_ON_DELAY,
  TURN_ON_OSC3,
  TURN_ON_OSC4,
  } 
from './actions'

const initialState = {
  
  isSynthPlaying: false,
  isOSC2On: false,
  isOSC3On: false,
  isOSC4On: false,
  isLFOOn: false,
  isDelayOn: false,
  isFilterOn: false,
  oscFreq: 500,
  osc2Freq: 500,
  osc3Freq: 500,
  osc4Freq: 500,
  lfoFreq: 15,
  filterFreq: 100,
  oscType: 'sine',
  osc2Type: 'sine',
  osc3Type: 'sine',
  osc4Type: 'sine',
  lfoType: 'sine',
  filterType: 'lowpass',
  masterGainValue: 0.03,
};

function rootReducer(state = initialState, action){
  switch(action.type){
  	case PLAY_SYNTH:
  	  return Object.assign({}, state, {
        isSynthPlaying: !state.isSynthPlaying
      })
    case CHANGE_OSC2_TYPE:
      return Object.assign({}, state, {
        osc2Type: action.waveType
      })
    case CHANGE_OSC_TYPE:
      return Object.assign({}, state, {
        oscType: action.waveType
      })
    case CHANGE_OSC2_FREQ:
      return Object.assign({}, state, {
        osc2Freq: action.freq
      })        
    case CHANGE_OSC_FREQ:
      console.log(state, action.freq)
      return Object.assign({}, state, {
        oscFreq: action.freq
      })  
    case TURN_ON_OSC2:
      console.log(state)
  	  return Object.assign({}, state, {
        isOSC2On: !state.isOSC2On
      })
    case TURN_ON_DELAY:
      console.log(state)
  	  return Object.assign({}, state, {
        isDelayOn: !state.isDelayOn
      })
    case TURN_ON_OSC3:
      console.log(state)
  	  return Object.assign({}, state, {
        isOSC3On: !state.isOSC3On
      })
    case CHANGE_OSC3_FREQ:
      return Object.assign({}, state, {
        osc3Freq: action.freq
      }) 
    case CHANGE_OSC3_TYPE:
      return Object.assign({}, state, {
        osc3Type: action.waveType
      })
    case TURN_ON_OSC4:
      console.log(state)
  	  return Object.assign({}, state, {
        isOSC4On: !state.isOSC4On
      })
    case CHANGE_OSC4_FREQ:
      return Object.assign({}, state, {
        osc4Freq: action.freq
      }) 
    case CHANGE_OSC4_TYPE:
      return Object.assign({}, state, {
        osc4Type: action.waveType
      })
    case TURN_ON_LFO:
      console.log(state)
  	  return Object.assign({}, state, {
        isLFOOn: !state.isLFOOn
      })
    case CHANGE_LFO_FREQ:
      return Object.assign({}, state, {
        lfoFreq: action.freq
      }) 
    case CHANGE_LFO_TYPE:
      return Object.assign({}, state, {
        lfoType: action.waveType
      })
    default:
      return state
  }
}

export default rootReducer;
import { 

  PLAY_SYNTH, 
  CHANGE_OSC_TYPE,
  CHANGE_OSC_FREQ, 

  TURN_ON_OSC2,
  CHANGE_OSC2_FREQ,
  CHANGE_OSC2_TYPE,

  TURN_ON_OSC3,
  CHANGE_OSC3_TYPE, 
  CHANGE_OSC3_FREQ,

  TURN_ON_OSC4,
  CHANGE_OSC4_TYPE, 
  CHANGE_OSC4_FREQ, 
   
   
  TURN_ON_LFO,
  CHANGE_LFO_TYPE,
  CHANGE_LFO_FREQ,

  TURN_ON_LFO2,
  CHANGE_LFO2_TYPE,
  CHANGE_LFO2_FREQ,

  TURN_ON_LFO3,
  CHANGE_LFO3_TYPE,
  CHANGE_LFO3_FREQ,

  TURN_ON_LFO4,
  CHANGE_LFO4_TYPE,
  CHANGE_LFO4_FREQ,

  
  TOGGLE_OSC1CHORUS_BYPASS,
  CHANGE_OSC1CHORUS_DEPTH,
  CHANGE_OSC1CHORUS_RATE,

  TOGGLE_OSC2CHORUS_BYPASS,
  CHANGE_OSC2CHORUS_DEPTH,
  CHANGE_OSC2CHORUS_RATE,

  TOGGLE_OSC3CHORUS_BYPASS,
  CHANGE_OSC3CHORUS_DEPTH,
  CHANGE_OSC3CHORUS_RATE,

  TOGGLE_OSC4CHORUS_BYPASS,
  CHANGE_OSC4CHORUS_DEPTH,
  CHANGE_OSC4CHORUS_RATE,

  TOGGLE_OSC1FILTER_BYPASS,
  CHANGE_OSC1FILTER_DEPTH,

  TOGGLE_OSC2FILTER_BYPASS,
  CHANGE_OSC2FILTER_DEPTH,

  TOGGLE_OSC3FILTER_BYPASS,
  CHANGE_OSC3FILTER_DEPTH,

  TOGGLE_OSC4FILTER_BYPASS,
  CHANGE_OSC4FILTER_DEPTH,

  TOGGLE_OSC1FILTER2_BYPASS,
  CHANGE_OSC1FILTER2_DEPTH,

  TOGGLE_OSC2FILTER2_BYPASS,
  CHANGE_OSC2FILTER2_DEPTH,

  TOGGLE_OSC3FILTER2_BYPASS,
  CHANGE_OSC3FILTER2_DEPTH,

  TOGGLE_OSC4FILTER2_BYPASS,
  CHANGE_OSC4FILTER2_DEPTH,

  TOGGLE_OSC1TREMOLO_BYPASS,
  CHANGE_OSC1TREMOLO_RATE,

  TOGGLE_OSC2TREMOLO_BYPASS,
  CHANGE_OSC2TREMOLO_RATE,

  TOGGLE_OSC3TREMOLO_BYPASS,
  CHANGE_OSC3TREMOLO_RATE,

  TOGGLE_OSC4TREMOLO_BYPASS,
  CHANGE_OSC4TREMOLO_RATE,
  
  TOGGLE_OSC1DELAY2_BYPASS,
  CHANGE_OSC1DELAY2_WETLEVEL,
  CHANGE_OSC1DELAY2_TIME,

  TOGGLE_OSC2DELAY2_BYPASS,
  CHANGE_OSC2DELAY2_WETLEVEL,
  CHANGE_OSC2DELAY2_TIME,

  TOGGLE_OSC3DELAY2_BYPASS,
  CHANGE_OSC3DELAY2_WETLEVEL,
  CHANGE_OSC3DELAY2_TIME,

  TOGGLE_OSC4DELAY2_BYPASS,
  CHANGE_OSC4DELAY2_WETLEVEL,
  CHANGE_OSC4DELAY2_TIME,

  TOGGLE_OSC1REVERB_BYPASS,
  CHANGE_OSC1REVERB_LEVEL,

  TOGGLE_OSC2REVERB_BYPASS,
  CHANGE_OSC2REVERB_LEVEL,

  TOGGLE_OSC3REVERB_BYPASS,
  CHANGE_OSC3REVERB_LEVEL,

  TOGGLE_OSC4REVERB_BYPASS,
  CHANGE_OSC4REVERB_LEVEL,

  TOGGLE_OSC1PANNER_BYPASS,
  CHANGE_OSC1PANNER_PAN,

  TOGGLE_OSC2PANNER_BYPASS,
  CHANGE_OSC2PANNER_PAN,

  TOGGLE_OSC3PANNER_BYPASS,
  CHANGE_OSC3PANNER_PAN,

  TOGGLE_OSC4PANNER_BYPASS,
  CHANGE_OSC4PANNER_PAN,

  TOGGLE_OSC1PHASER_BYPASS,
  CHANGE_OSC1PHASER_RATE,
  CHANGE_OSC1PHASER_DEPTH,
  CHANGE_OSC1PHASER_FEEDBACK,

  TOGGLE_OSC2PHASER_BYPASS,
  CHANGE_OSC2PHASER_RATE,
  CHANGE_OSC2PHASER_DEPTH,
  CHANGE_OSC2PHASER_FEEDBACK,

  TOGGLE_OSC3PHASER_BYPASS,
  CHANGE_OSC3PHASER_RATE,
  CHANGE_OSC3PHASER_DEPTH,
  CHANGE_OSC3PHASER_FEEDBACK,

  TOGGLE_OSC4PHASER_BYPASS,
  CHANGE_OSC4PHASER_RATE,
  CHANGE_OSC4PHASER_DEPTH,
  CHANGE_OSC4PHASER_FEEDBACK,

  TOGGLE_OSC1OVERDRIVE_BYPASS,
  CHANGE_OSC1OVERDRIVE_DRIVE,
  CHANGE_OSC1OVERDRIVE_GAIN,

  TOGGLE_OSC2OVERDRIVE_BYPASS,
  CHANGE_OSC2OVERDRIVE_DRIVE,
  CHANGE_OSC2OVERDRIVE_GAIN,

  TOGGLE_OSC3OVERDRIVE_BYPASS,
  CHANGE_OSC3OVERDRIVE_DRIVE,
  CHANGE_OSC3OVERDRIVE_GAIN,

  TOGGLE_OSC4OVERDRIVE_BYPASS,
  CHANGE_OSC4OVERDRIVE_DRIVE,
  CHANGE_OSC4OVERDRIVE_GAIN,

  } 
from './actions'

const initialState = {
  
  isSynthPlaying: false,
  oscFreq: 500,
  oscType: 'sine',

  isOSC2On: false,
  osc2Freq: 500,
  osc2Type: 'sine',

  isOSC3On: false,
  osc3Freq: 500,
  osc3Type: 'sine',

  isOSC4On: false,
  osc4Freq: 500,
  osc4Type: 'sine',

  isLFOOn: false,
  lfoFreq: 5,
  lfoType: 'sine',

  isLFO2On: false,
  lfo2Freq: 5,
  lfo2Type: 'sine',

  isLFO3On: false,
  lfo3Freq: 5,
  lfo3Type: 'sine',

  isLFO4On: false,
  lfo4Freq: 5,
  lfo4Type: 'sine',

  osc1chorusBypass: true, 
  osc1chorusDepth: 0.5,
  osc1chorusRate: 4,

  osc2chorusBypass: true, 
  osc2chorusDepth: 0.5,
  osc2chorusRate: 4,

  osc3chorusBypass: true, 
  osc3chorusDepth: 0.5,
  osc3chorusRate: 4,

  osc4chorusBypass: true, 
  osc4chorusDepth: 0.5,
  osc4chorusRate: 4,

  osc1filterBypass: true,
  osc1filterRate: 4,
  osc1filterDepth: 0.5,

  osc2filterBypass: true,
  osc2filterRate: 4,
  osc2filterDepth: 0.5,

  osc3filterBypass: true,
  osc3filterRate: 4,
  osc3filterDepth: 0.5,

  osc4filterBypass: true,
  osc4filterRate: 4,
  osc4filterDepth: 0.5,

  osc1filter2Bypass: true,
  // osc1filter2Rate: 4,
  osc1filter2Depth: 0.5,

  osc2filter2Bypass: true,
  // osc2filter2Rate: 4,
  osc2filter2Depth: 0.5,

  osc3filter2Bypass: true,
  // osc3filter2Rate: 4,
  osc3filter2Depth: 0.5,

  osc4filter2Bypass: true,
  // osc4filter2Rate: 4,
  osc4filter2Depth: 0.5,

  osc1tremoloBypass: true,
  osc1tremoloRate: 1,

  osc2tremoloBypass: true,
  osc2tremoloIntensity: 0.5,
  osc2tremoloRate: 1,

  osc3tremoloBypass: true,
  osc3tremoloIntensity: 0.5,
  osc3tremoloRate: 1,

  osc4tremoloBypass: true,
  osc4tremoloIntensity: 0.5,
  osc4tremoloRate: 1,

  osc1delay2Bypass: true,
  osc1delay2WetLevel: 0.5,
  osc1delay2Time: 0.1,

  osc2delay2Bypass: true,
  osc2delay2WetLevel: 0.5,
  osc2delay2Time: 100,

  osc3delay2Bypass: true,
  osc3delay2WetLevel: 0.5,
  osc3delay2Time: 100,

  osc4delay2Bypass: true,
  osc4delay2WetLevel: 0.5,
  osc4delay2Time: 100,

  osc1reverbBypass: true,
  osc1reverbLevel: 0.5,

  osc2reverbBypass: true,
  osc2reverbLevel: 0.5,

  osc3reverbBypass: true,
  osc3reverbLevel: 0.5,

  osc4reverbBypass: true,
  osc4reverbLevel: 0.5,

  osc1pannerBypass: true,
  osc1pannerPan: 0,

  osc2pannerBypass: true,
  osc2pannerPan: 0,

  osc3pannerBypass: true,
  osc3pannerPan: 0,

  osc4pannerBypass: true,
  osc4pannerPan: 0,

  osc1phaserBypass: true,
  osc1phaserRate: 4,
  osc1phaserDepth: 0.5,
  osc1phaserFeedback: 0.5,

  osc2phaserBypass: true,
  osc2phaserRate: 4,
  osc2phaserDepth: 0.5,
  osc2phaserFeedback: 0.5,

  osc3phaserBypass: true,
  osc3phaserRate: 4,
  osc3phaserDepth: 0.5,
  osc3phaserFeedback: 0.5,

  osc4phaserBypass: true,
  osc4phaserRate: 4,
  osc4phaserDepth: 0.5,
  osc4phaserFeedback: 0.5,

  osc1overdriveBypass: true,
  osc1overdriveDrive: 0.5,
  osc1overdriveGain: -23,

  osc2overdriveBypass: true,
  osc2overdriveDrive: 0.5,
  osc2overdriveGain: -23,

  osc3overdriveBypass: true,
  osc3overdriveDrive: 0.5,
  osc3overdriveGain: -23,

  osc4overdriveBypass: true,
  osc4overdriveDrive: 0.5,
  osc4overdriveGain: -23,

  masterGainValue: 0.04,
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
      
      return Object.assign({}, state, {
        oscFreq: action.freq
      })  
    case TURN_ON_OSC2:
      
  	  return Object.assign({}, state, {
        isOSC2On: !state.isOSC2On
      })

    case TURN_ON_OSC3:
      
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

    case TURN_ON_LFO2:
      
  	  return Object.assign({}, state, {
        isLFO2On: !state.isLFO2On
      })
    case CHANGE_LFO2_FREQ:
      return Object.assign({}, state, {
        lfo2Freq: action.freq
      }) 
    case CHANGE_LFO2_TYPE:
      return Object.assign({}, state, {
        lfo2Type: action.waveType
      })

    case TURN_ON_LFO3:
      
  	  return Object.assign({}, state, {
        isLFO3On: !state.isLFO3On
      })
    case CHANGE_LFO3_FREQ:
      return Object.assign({}, state, {
        lfo3Freq: action.freq
      }) 
    case CHANGE_LFO3_TYPE:
      return Object.assign({}, state, {
        lfo3Type: action.waveType
      })

    case TURN_ON_LFO4:
      
  	  return Object.assign({}, state, {
        isLFO4On: !state.isLFO4On
      })
    case CHANGE_LFO4_FREQ:
      return Object.assign({}, state, {
        lfo4Freq: action.freq
      }) 
    case CHANGE_LFO4_TYPE:
      return Object.assign({}, state, {
        lfo4Type: action.waveType
      })

    case TOGGLE_OSC1CHORUS_BYPASS:
      
  	  return Object.assign({}, state, {
        osc1chorusBypass: !state.osc1chorusBypass
      })
    case CHANGE_OSC1CHORUS_DEPTH:
      return Object.assign({}, state, {
        osc1chorusDepth: action.depth
      }) 
    case CHANGE_OSC1CHORUS_RATE:
      return Object.assign({}, state, {
        osc1chorusRate: action.rate
      })


    case TOGGLE_OSC2CHORUS_BYPASS:
      
  	  return Object.assign({}, state, {
        osc2chorusBypass: !state.osc2chorusBypass
      })
    case CHANGE_OSC2CHORUS_DEPTH:
      return Object.assign({}, state, {
        osc2chorusDepth: action.depth
      }) 
    case CHANGE_OSC2CHORUS_RATE:
      return Object.assign({}, state, {
        osc2chorusRate: action.rate
      })


    case TOGGLE_OSC3CHORUS_BYPASS:
      
  	  return Object.assign({}, state, {
        osc3chorusBypass: !state.osc3chorusBypass
      })
    case CHANGE_OSC3CHORUS_DEPTH:
      return Object.assign({}, state, {
        osc3chorusDepth: action.depth
      }) 
    case CHANGE_OSC3CHORUS_RATE:
      return Object.assign({}, state, {
        osc3chorusRate: action.rate
      })


    case TOGGLE_OSC4CHORUS_BYPASS:
      
  	  return Object.assign({}, state, {
        osc4chorusBypass: !state.osc4chorusBypass
      })
    case CHANGE_OSC4CHORUS_DEPTH:
      return Object.assign({}, state, {
        osc4chorusDepth: action.depth
      }) 
    case CHANGE_OSC4CHORUS_RATE:
      return Object.assign({}, state, {
        osc4chorusRate: action.rate
      })

    
    case TOGGLE_OSC1FILTER_BYPASS:
      
  	  return Object.assign({}, state, {
        osc1filterBypass: !state.osc1filterBypass
      })
    case CHANGE_OSC1FILTER_DEPTH:
      return Object.assign({}, state, {
        osc1filterDepth: action.depth
      })


    case TOGGLE_OSC2FILTER_BYPASS:
      
  	  return Object.assign({}, state, {
        osc2filterBypass: !state.osc2filterBypass
      })
    case CHANGE_OSC2FILTER_DEPTH:
      return Object.assign({}, state, {
        osc2filterDepth: action.depth
      })


    case TOGGLE_OSC3FILTER_BYPASS:
  	  return Object.assign({}, state, {
        osc3filterBypass: !state.osc3filterBypass
      })
    case CHANGE_OSC3FILTER_DEPTH:
      return Object.assign({}, state, {
        osc3filterDepth: action.depth
      })


    case TOGGLE_OSC4FILTER_BYPASS:
  	  return Object.assign({}, state, {
        osc4filterBypass: !state.osc4filterBypass
      })
    case CHANGE_OSC4FILTER_DEPTH:
      return Object.assign({}, state, {
        osc4filterDepth: action.depth
      })


    case TOGGLE_OSC1FILTER2_BYPASS:
      
  	  return Object.assign({}, state, {
        osc1filter2Bypass: !state.osc1filter2Bypass
      }) 
    case CHANGE_OSC1FILTER2_DEPTH:
      return Object.assign({}, state, {
        osc1filter2Depth: action.depth
      })

    case TOGGLE_OSC2FILTER2_BYPASS:
      
  	  return Object.assign({}, state, {
        osc2filter2Bypass: !state.osc2filter2Bypass
      })
    case CHANGE_OSC2FILTER2_DEPTH:
      return Object.assign({}, state, {
        osc2filter2Depth: action.depth
      })


    case TOGGLE_OSC3FILTER2_BYPASS:
      
  	  return Object.assign({}, state, {
        osc3filter2Bypass: !state.osc3filter2Bypass
      }) 
    case CHANGE_OSC3FILTER2_DEPTH:
      return Object.assign({}, state, {
        osc3filter2Depth: action.depth
      })


    case TOGGLE_OSC4FILTER2_BYPASS:
      
  	  return Object.assign({}, state, {
        osc4filter2Bypass: !state.osc4filter2Bypass
      })
    case CHANGE_OSC4FILTER2_DEPTH:
      return Object.assign({}, state, {
        osc4filter2Depth: action.depth
      })


    case TOGGLE_OSC1TREMOLO_BYPASS:
      
  	  return Object.assign({}, state, {
        osc1tremoloBypass: !state.osc1tremoloBypass
      })
    case CHANGE_OSC1TREMOLO_RATE:
      return Object.assign({}, state, {
        osc1tremoloRate: action.rate
      })


    case TOGGLE_OSC2TREMOLO_BYPASS:
      
  	  return Object.assign({}, state, {
        osc2tremoloBypass: !state.osc2tremoloBypass
      })
    case CHANGE_OSC2TREMOLO_RATE:
      return Object.assign({}, state, {
        osc2tremoloRate: action.rate
      })


    case TOGGLE_OSC3TREMOLO_BYPASS:
      
  	  return Object.assign({}, state, {
        osc3tremoloBypass: !state.osc3tremoloBypass
      })
    case CHANGE_OSC3TREMOLO_RATE:
      return Object.assign({}, state, {
        osc3tremoloRate: action.rate
      })



    case TOGGLE_OSC4TREMOLO_BYPASS:
      
  	  return Object.assign({}, state, {
        osc4tremoloBypass: !state.osc4tremoloBypass
      })
    case CHANGE_OSC4TREMOLO_RATE:
      return Object.assign({}, state, {
        osc4tremoloRate: action.rate
      })

    case TOGGLE_OSC1DELAY2_BYPASS:
    
    return Object.assign({}, state, {
      osc1delay2Bypass: !state.osc1delay2Bypass
    })

    case CHANGE_OSC1DELAY2_WETLEVEL:
      return Object.assign({}, state, {
        osc1delay2WetLevel: action.wetLevel
      }) 

    case CHANGE_OSC1DELAY2_TIME:
      return Object.assign({}, state, {
        osc1delay2Time: action.time
      })

    case TOGGLE_OSC2DELAY2_BYPASS:
    
      return Object.assign({}, state, {
        osc2delay2Bypass: !state.osc2delay2Bypass
    })

    case CHANGE_OSC2DELAY2_WETLEVEL:
      return Object.assign({}, state, {
        osc2delay2WetLevel: action.wetLevel
      }) 

    case CHANGE_OSC2DELAY2_TIME:
      return Object.assign({}, state, {
        osc2delay2Time: action.time
      }) 

    case TOGGLE_OSC3DELAY2_BYPASS:
    
      return Object.assign({}, state, {
        osc3delay2Bypass: !state.osc3delay2Bypass
    })

    case CHANGE_OSC3DELAY2_WETLEVEL:
      return Object.assign({}, state, {
        osc3delay2WetLevel: action.wetLevel
      }) 

    case CHANGE_OSC3DELAY2_TIME:
      return Object.assign({}, state, {
        osc3delay2Time: action.time
      })

    case TOGGLE_OSC4DELAY2_BYPASS:
    
      return Object.assign({}, state, {
        osc4delay2Bypass: !state.osc4delay2Bypass
    })

    case CHANGE_OSC4DELAY2_WETLEVEL:
      return Object.assign({}, state, {
        osc4delay2WetLevel: action.wetLevel
      }) 

    case CHANGE_OSC4DELAY2_TIME:
      return Object.assign({}, state, {
        osc4delay2Time: action.time
      })




    case TOGGLE_OSC1REVERB_BYPASS:
      
  	  return Object.assign({}, state, {
        osc1reverbBypass: !state.osc1reverbBypass
      })
    case CHANGE_OSC1REVERB_LEVEL:
      return Object.assign({}, state, {
        osc1reverbLevel: action.level
      }) 


    case TOGGLE_OSC2REVERB_BYPASS:
      
  	  return Object.assign({}, state, {
        osc2reverbBypass: !state.osc2reverbBypass
      })
    case CHANGE_OSC2REVERB_LEVEL:
      return Object.assign({}, state, {
        osc2reverbLevel: action.level
      }) 


    case TOGGLE_OSC3REVERB_BYPASS:
      
  	  return Object.assign({}, state, {
        osc3reverbBypass: !state.osc3reverbBypass
      })
    case CHANGE_OSC3REVERB_LEVEL:
      return Object.assign({}, state, {
        osc3reverbLevel: action.level
      }) 


    case TOGGLE_OSC4REVERB_BYPASS:
      
  	  return Object.assign({}, state, {
        osc4reverbBypass: !state.osc4reverbBypass
      })
    case CHANGE_OSC4REVERB_LEVEL:
      return Object.assign({}, state, {
        osc4reverbLevel: action.level
      }) 




    case TOGGLE_OSC1PANNER_BYPASS:
      
  	  return Object.assign({}, state, {
        osc1pannerBypass: !state.osc1pannerBypass
      })
    case CHANGE_OSC1PANNER_PAN:
      return Object.assign({}, state, {
        osc1pannerPan: action.pan
      }) 


    case TOGGLE_OSC2PANNER_BYPASS:
      
  	  return Object.assign({}, state, {
        osc2pannerBypass: !state.osc2pannerBypass
      })
    case CHANGE_OSC2PANNER_PAN:
      return Object.assign({}, state, {
        osc2pannerPan: action.pan
      }) 


    case TOGGLE_OSC3PANNER_BYPASS:
      
  	  return Object.assign({}, state, {
        osc3pannerBypass: !state.osc3pannerBypass
      })
    case CHANGE_OSC3PANNER_PAN:
      return Object.assign({}, state, {
        osc3pannerPan: action.pan
      }) 


    case TOGGLE_OSC4PANNER_BYPASS:
      
  	  return Object.assign({}, state, {
        osc4pannerBypass: !state.osc4pannerBypass
      })
    case CHANGE_OSC4PANNER_PAN:
      return Object.assign({}, state, {
        osc4pannerPan: action.pan
      }) 



    case TOGGLE_OSC1PHASER_BYPASS:
      
  	  return Object.assign({}, state, {
        osc1phaserBypass: !state.osc1phaserBypass
      })
    case CHANGE_OSC1PHASER_RATE:
      return Object.assign({}, state, {
        osc1phaserRate: action.rate
      })

    case CHANGE_OSC1PHASER_DEPTH:
      return Object.assign({}, state, {
        osc1phaserDepth: action.depth
      })

    case CHANGE_OSC1PHASER_FEEDBACK:
      return Object.assign({}, state, {
        osc1phaserFeedback: action.feedback
      }) 


    case TOGGLE_OSC2PHASER_BYPASS:
      
  	  return Object.assign({}, state, {
        osc2phaserBypass: !state.osc2phaserBypass
      })
    case CHANGE_OSC2PHASER_RATE:
      return Object.assign({}, state, {
        osc2phaserRate: action.rate
      })

    case CHANGE_OSC2PHASER_DEPTH:
      return Object.assign({}, state, {
        osc2phaserDepth: action.depth
      })

    case CHANGE_OSC2PHASER_FEEDBACK:
      return Object.assign({}, state, {
        osc2phaserFeedback: action.feedback
      }) 


    case TOGGLE_OSC3PHASER_BYPASS:
      
  	  return Object.assign({}, state, {
        osc3phaserBypass: !state.osc3phaserBypass
      })
    case CHANGE_OSC3PHASER_RATE:
      return Object.assign({}, state, {
        osc3phaserRate: action.rate
      })

    case CHANGE_OSC3PHASER_DEPTH:
      return Object.assign({}, state, {
        osc3phaserDepth: action.depth
      })

    case CHANGE_OSC3PHASER_FEEDBACK:
      return Object.assign({}, state, {
        osc3phaserFeedback: action.feedback
      }) 



    case TOGGLE_OSC4PHASER_BYPASS:
      
  	  return Object.assign({}, state, {
        osc4phaserBypass: !state.osc4phaserBypass
      })
    case CHANGE_OSC4PHASER_RATE:
      return Object.assign({}, state, {
        osc4phaserRate: action.rate
      })

    case CHANGE_OSC4PHASER_DEPTH:
      return Object.assign({}, state, {
        osc4phaserDepth: action.depth
      })

    case CHANGE_OSC4PHASER_FEEDBACK:
      return Object.assign({}, state, {
        osc4phaserFeedback: action.feedback
      }) 


    case TOGGLE_OSC1OVERDRIVE_BYPASS:
      
  	  return Object.assign({}, state, {
        osc1overdriveBypass: !state.osc1overdriveBypass
      })
    case CHANGE_OSC1OVERDRIVE_DRIVE:
      return Object.assign({}, state, {
        osc1overdriveDrive: action.drive
      })

    case CHANGE_OSC1OVERDRIVE_GAIN:
      return Object.assign({}, state, {
        osc1overdriveGain: action.gain
      })

      case TOGGLE_OSC2OVERDRIVE_BYPASS:
      
  	  return Object.assign({}, state, {
        osc2overdriveBypass: !state.osc2overdriveBypass
      })
    case CHANGE_OSC2OVERDRIVE_DRIVE:
      return Object.assign({}, state, {
        osc2overdriveDrive: action.drive
      })

    case CHANGE_OSC2OVERDRIVE_GAIN:
      return Object.assign({}, state, {
        osc2overdriveGain: action.gain
      })

      case TOGGLE_OSC3OVERDRIVE_BYPASS:
      
  	  return Object.assign({}, state, {
        osc3overdriveBypass: !state.osc3overdriveBypass
      })
    case CHANGE_OSC3OVERDRIVE_DRIVE:
      return Object.assign({}, state, {
        osc3overdriveDrive: action.drive
      })

    case CHANGE_OSC3OVERDRIVE_GAIN:
      return Object.assign({}, state, {
        osc3overdriveGain: action.gain
      })

    case TOGGLE_OSC4OVERDRIVE_BYPASS:
      
  	  return Object.assign({}, state, {
        osc4overdriveBypass: !state.osc4overdriveBypass
      })
    case CHANGE_OSC4OVERDRIVE_DRIVE:
      return Object.assign({}, state, {
        osc4overdriveDrive: action.drive
      })

    case CHANGE_OSC4OVERDRIVE_GAIN:
      return Object.assign({}, state, {
        osc4overdriveGain: action.gain
      })

    default:
      return state
  }
}

export default rootReducer;
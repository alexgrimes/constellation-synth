import React from 'react';
import { connect } from 'react-redux';
import { changeOSCFreq, changeOSC2Freq, changeOSC3Freq, changeOSC4Freq, changeLFOFreq } from './actions';
import '../index.css';
import * as d3 from 'd3-delaunay';

class XYPad extends React.Component {
  constructor(props) {
  	super(props);
    console.log(this.props.width)

    let circlePos1 = [Math.floor(Math.random() * (500) - 1 + 1) + 1, Math.floor(Math.random() * (500) - 1 + 1) + 10];
    let circlePos2 = [Math.floor(Math.random() * (500) - 1 + 1) + 1, Math.floor(Math.random() * (500) - 1 + 1) + 10];
    let circlePos3 = [Math.floor(Math.random() * (500) - 1 + 1) + 1, Math.floor(Math.random() * (500) - 1 + 1) + 10];
    let circlePos4 = [Math.floor(Math.random() * (500) - 1 + 1) + 1, Math.floor(Math.random() * (500) - 1 + 1) + 10];

    let oscFreq = circlePos1[1] * Math.floor(Math.random() * (7) - 1 + 1) + 20
    let lfoFreq = circlePos1[0] * .06
    let osc2Freq = circlePos2[1] * Math.floor(Math.random() * (7.5) - 1 + 1) + 20
    let lfo2Freq = circlePos1[0] * .06
    let osc3Freq = circlePos3[1] * Math.floor(Math.random() * (8) - 1 + 1) + 20
    let lfo3Freq = circlePos1[0] * .06
    let osc4Freq = circlePos4[1] * Math.floor(Math.random() * (9.5) - 1 + 1) + 20
    let lfo4Freq = circlePos1[0] * .06

    console.log(oscFreq, lfoFreq, osc2Freq, osc3Freq, osc4Freq, circlePos1[0], circlePos4[0])
    this.state = {
      circle1Pos: circlePos1,
      prevCircle1Pos: circlePos1,
      oscFreq: oscFreq,
      oscFreqRange: [15, 5000],
      lfoFreq: lfoFreq,
      start1Move: false,

      circle2Pos: circlePos2,
      prevCircle2Pos: circlePos2,
      osc2Freq: osc2Freq,
      osc2FreqRange: [15, 5000],
      lfo2Freq: lfo2Freq,
      start2Move: false,

      circle3Pos: circlePos3,
      prevCircle3Pos: circlePos3,
      osc3Freq: osc3Freq,
      osc3FreqRange: [15, 5000],
      lfo3Freq: lfo3Freq,
      start3Move: false,

      circle4Pos: circlePos4,
      prevCircle4Pos: circlePos4,
      osc4Freq: osc4Freq,
      osc4FreqRange: [15, 5000],
      lfo3Freq: lfo4Freq,
      start4Move: false,
    };
    console.log(this.state)
    this.updateFrequencyOSC();
    this.updateFrequencyOSC2();
    this.updateFrequencyOSC3();
    this.updateFrequencyOSC4();
    this.updateFrequencyLFO();
    this.updateFrequencyLFO();
    this.updateFrequencyLFO();
    this.updateFrequencyLFO();
    
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
        
      
        console.log(rect)
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

      
      let points = [this.state.circle1Pos, this.state.circle2Pos, this.state.circle3Pos, this.state.circle4Pos]
      
      const delaunay = d3.Delaunay.from(points);
      
      const voronoi = delaunay.voronoi([0.5, 0.5, this.props.width - 0.5, this.props.height])
      this.ctx.fillStyle = this.props.color;
      this.ctx.fillRect(0, 0, this.props.width, this.props.height)
      this.ctx.beginPath();
      delaunay.render(this.ctx);
      this.ctx.strokeStyle = "#C0392B";
      this.ctx.stroke();
      this.ctx.closePath();

      this.ctx.beginPath();
      voronoi.render(this.ctx);
      voronoi.renderBounds(this.ctx);
      this.ctx.strokeStyle = "#C0C0C0";
      this.ctx.stroke();
      this.ctx.closePath();
      this.ctx.beginPath();
      delaunay.renderPoints(this.ctx);
      this.ctx.fill();
      

      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle1Pos[0], this.state.circle1Pos[1], 6, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#FDFEFE";
      this.ctx.stroke();
      this.ctx.fill();


      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle2Pos[0], this.state.circle2Pos[1], 6, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#C39BD3";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle3Pos[0], this.state.circle3Pos[1], 6, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#7DCEA0";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle4Pos[0], this.state.circle4Pos[1], 6, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#EB984E";
      // this.ctx.stroke();
      this.ctx.fill();

    }

    handleMouseUp() {
      this.setState({
        start1Move: false,
        start2Move: false,
        start3Move: false,
        start4Move: false,
      })
    }

    handleMouseDown(event) {
      // when this event starts check that pos X = node at pos X and you're finding the exact node you clicked
      //  filter to return the state 
      //find which node was clicked and update x and y coords
      // var posX = event.clientX - this.canvasPos[0];
      // var posY = event.clientY - this.canvasPos[1];
      console.log(event.layerX, event.layerY, '-- event layers X & Y')
      console.log(this.state.circle1Pos[0], this.state.circle1Pos[1], '--circle1pos')
      console.log(this.state.circle2Pos[0], this.state.circle2Pos[1], '--circle2pos')
      console.log(this.state.circle3Pos[0], this.state.circle3Pos[1], '--circle3pos')
      console.log(this.state.circle4Pos[0], this.state.circle4Pos[1], '--circle4pos')
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
      } else {
        this.setState({
          start1Move: false,
          start2Move: false,
          start3Move: false,
          start4Move: false,
        })
      }
      console.log(this.state.start1Move)
      console.log(this.state.start2Move)
      console.log(this.state.start3Move)
      console.log(this.state.start4Move)
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
        this.state.prevCircle1Pos = this.state.circle1Pos;
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
        });
        console.log(this.state)
        this.updateCanvas();
        this.updateFrequencyOSC(posX, posY)
      }

      if (this.state.start2Move) {
        this.state.prevCircle2Pos = this.state.circle2Pos;
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
        });
        console.log(this.state)
        this.updateCanvas();
        this.updateFrequencyOSC2(posX, posY)
      }

      if (this.state.start3Move) {
        this.state.prevCircle3Pos = this.state.circle3Pos;
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
        });
        console.log(this.state)
        this.updateCanvas();
        this.updateFrequencyOSC3(posX, posY)
      }

      if (this.state.start4Move) {
        this.state.prevCircle4Pos = this.state.circle4Pos;
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
        });
        console.log(this.state)
        this.updateCanvas();
        this.updateFrequencyOSC4(posX, posY)
      }
      this.updateCanvas();
    }
      
    updateFrequencyOSC() {
      console.log(this.state.oscFreq, this.state.circle1Pos)
      let oscFreq = this.state.circle1Pos[1] * Math.floor(Math.random() * (7) - 1 + 1) + 20
      this.props.changeOSCFreq(oscFreq);
    }

    updateFrequencyOSC2() {
      console.log(this.state.osc2Freq)
      let osc2Freq = this.state.circle2Pos[1] * Math.floor(Math.random() * (7) - 1 + 1) + 20
      this.props.changeOSC2Freq(osc2Freq);
    }

    updateFrequencyOSC3() {
    
      let osc3Freq = this.state.circle3Pos[1] * Math.floor(Math.random() * (7) - 1 + 1) + 20
      this.props.changeOSC3Freq(osc3Freq);
    }

    updateFrequencyOSC4() {
    
      let osc4Freq = this.state.circle4Pos[1] * Math.floor(Math.random() * (7) - 1 + 1) + 20
      this.props.changeOSC4Freq(osc4Freq);
    }

    updateFrequencyLFO() {
      console.log(this.props.lfoFreq)
      let lfoFreq = this.state.lfoFreq
      this.props.changeLFOFreq(lfoFreq);
    }

    // updateFrequencyOSC2(posX, posY) {
    //   console.log(this.props.width)
    //   let oscFreq = posY / this.props.width * 
    //     (this.state.oscFreqRange[1] - this.state.oscFreqRange[0]) 
    //     + this.state.oscFreqRange[0];
    //   this.props.changeOSCFreq(oscFreq);
    // }

    // updateFrequencyOSC3(posX, posY) {
    //   console.log(this.props.width)
    //   let oscFreq = posY / this.props.width * 
    //     (this.state.oscFreqRange[1] - this.state.oscFreqRange[0]) 
    //     + this.state.oscFreqRange[0];
    //   this.props.changeOSCFreq(oscFreq);
    // }

    // updateFrequencyOSC4(posX, posY) {
    //   console.log(this.props.width)
    //   let oscFreq = posY / this.props.width * 
    //     (this.state.oscFreqRange[1] - this.state.oscFreqRange[0]) 
    //     + this.state.oscFreqRange[0];
    //   this.props.changeOSCFreq(oscFreq);
    // }

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
    osc2Freq: state.osc2Freq,
    osc3Freq: state.osc3Freq,
    osc4Freq: state.osc4Freq,
    lfoFreq: state.lfoFreq,
  }
}

function mapDispatchToProps(dispatch){
  console.log(dispatch)
  return {
    changeOSCFreq: (value) => dispatch(changeOSCFreq(value)),
    changeOSC2Freq: (value) => dispatch(changeOSC2Freq(value)),
    changeOSC3Freq: (value) => dispatch(changeOSC3Freq(value)),
    changeOSC4Freq: (value) => dispatch(changeOSC4Freq(value)),
    changeLFOFreq: (value) => dispatch(changeLFOFreq(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(XYPad);

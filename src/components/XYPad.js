import React from 'react';
import { connect } from 'react-redux';
import { changeOSCFreq, changeOSC2Freq, changeOSC3Freq, changeOSC4Freq, changeLFOFreq } from './actions';
import '../index.css';
import * as d3 from 'd3-delaunay';

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

      square1Pos: squarePos1,
      prevSquare1Pos: squarePos1,
      start5Move: false,
      
      square2Pos: squarePos2,
      prevSquare2Pos: squarePos2,
      start6Move: false,

      square3Pos: squarePos3,
      prevSquare3Pos: squarePos3,
      start7Move: false,

      square4Pos: squarePos4,
      prevSquare4Pos: squarePos4,
      start8Move: false,

      square5Pos: squarePos5,
      prevSquare5Pos: squarePos5,
      start9Move: false,

      square6Pos: squarePos6,
      prevSquare6Pos: squarePos6,
      start10Move: false,

      square7Pos: squarePos7,
      prevSquare7Pos: squarePos7,
      start11Move: false,

      square8Pos: squarePos8,
      prevSquare8Pos: squarePos8,
      start12Move: false,

      square9Pos: squarePos9,
      prevSquare9Pos: squarePos9,
      start13Move: false,

      square10Pos: squarePos10,
      prevSquare10Pos: squarePos10,
      start14Move: false,

      square11Pos: squarePos11,
      prevSquare11Pos: squarePos11,
      start15Move: false,

      square12Pos: squarePos12,
      prevSquare12Pos: squarePos12,
      start16Move: false,

      square13Pos: squarePos13,
      prevSquare13Pos: squarePos13,
      start17Move: false,

      square14Pos: squarePos14,
      prevSquare14Pos: squarePos14,
      start18Move: false,

      square15Pos: squarePos15,
      prevSquare15Pos: squarePos15,
      start19Move: false,

      square16Pos: squarePos16,
      prevSquare16Pos: squarePos16,
      start20Move: false,
      
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
      console.log(this.state.square1Pos)
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
      
      this.ctx.arc(this.state.circle1Pos[0], this.state.circle1Pos[1], 7, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      this.ctx.stroke();
      this.ctx.fill();


      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle2Pos[0], this.state.circle2Pos[1], 7, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle3Pos[0], this.state.circle3Pos[1], 7, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();

      this.ctx.beginPath();
      
      this.ctx.arc(this.state.circle4Pos[0], this.state.circle4Pos[1], 7, false, Math.PI * 2, false);
      this.ctx.closePath();
      this.ctx.fillStyle = "#808080";
      // this.ctx.stroke();
      this.ctx.fill();


      //square 1

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

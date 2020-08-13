import React from 'react';
import { connect } from 'react-redux';
import { changeOSC4Freq } from './actions';
import '../index.css';

class XYPad4 extends React.Component {
  constructor(props) {
  	super(props);
    console.log(this.props.width)
    this.state = {
      circlePos: [this.props.width/2, this.props.height/2],
      prevCirclePos: [this.props.width/2, this.props.height/2],
      startMove: false,
      osc4FreqRange: [15, 5000],
    };
    console.log(this.state)
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
        this.ctx.fillRect(0,0, this.props.width, this.props.height);

      

        this.drawLabel();

        this.updateCanvas();
    }

    drawLabel() {
        this.ctx.font = '10px consolas';
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#CC0720';
        this.ctx.fillText('OSCILLATOR FREQUENCY', Math.round(this.props.width/2), 10 + 5);

        this.ctx.rotate(1.5708);
        this.ctx.fillText(
          'OSC2 FREQUENCY', 
          Math.round(this.props.width / 2), 
          -this.props.width + 10 + 5);
        this.ctx.rotate(-1.5708);
    }

    updateCanvas() {
      if (document.getElementsByClassName("canvas 4")) {
      console.log(this.ctx)
        this.ctx.beginPath();
        this.ctx.arc(this.state.prevCirclePos[0], this.state.prevCirclePos[1], 7, false, Math.PI * 2, false);
        this.ctx.closePath();
        this.ctx.fillStyle = this.props.color;
        this.ctx.fill();

        this.drawLabel();

        this.ctx.beginPath();
        this.ctx.arc(this.state.circlePos[0], this.state.circlePos[1], 6, false, Math.PI * 2, false);
        this.ctx.closePath();
        this.ctx.fillStyle = "#888888";
        this.ctx.fill();
      }
    }

    handleMouseUp() {
      this.setState({
        startMove: false
      })
    }

    handleMouseDown(event) {
      console.log(this.props.width, this.props.height)
      var posX = event.clientX - this.canvasPos[0];
      var posY = event.clientY - this.canvasPos[1];
      console.log(posX, posY)
      if (posX < this.props.width && posX > 0 && posY > 0 && posY < this.props.height) {
        this.setState({
          startMove: true
        });
      }
      console.log(this.state)
    }

    handleMouseEvent(event) {
      // console.log(this.canvasPos[1])
      if (this.state.startMove) {
        this.state.prevCirclePos = this.state.circlePos;
        var posX = event.clientX - this.canvasPos[0];
        var posY = event.clientY - this.canvasPos[1];

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

        this.setState({circlePos: [posX, posY]});
        this.updateCanvas();
        this.updateFrequency(posX, posY);
       
      }
    }

    updateFrequency(posX, posY) {
      console.log(posX, posY)
      let oscFreq = posY / this.props.width * 
        (this.state.oscFreqRange[1] - this.state.oscFreqRange[0]) 
        + this.state.oscFreqRange[0];
      
      this.props.changeOSC4Freq(oscFreq);
    
    }

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
  console.log(state)
  return {
    osc4Freq: state.osc4Freq,
  }
}

function mapDispatchToProps(dispatch){
  console.log(dispatch)
  return {
    changeOSC4Freq: (value) => dispatch(changeOSC4Freq(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(XYPad4);
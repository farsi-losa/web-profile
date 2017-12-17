import React, { Component } from 'react';
import Balls from './Balls.js';

var balls = [
        {color:'red', x:10, y:20},
        {color:'green', x:100, y:70},
        {color:'blue', x:200, y:40}
    ],
    canvas = {
        width: 400,
        height: 400,
        position: 'relative'
    }

class BounchingBalls extends Component {

    constructor(props) {
        super(props);
        this.state = {
            togglePlay : 'pause',
            ballqty : 1,
        }
        this.onPlay = this.onPlay.bind(this);
        this.addMoreBall = this.addMoreBall.bind(this);
        this.increaseSpeed = this.increaseSpeed.bind(this);
        this.decreaseSpeed = this.decreaseSpeed.bind(this);
    }
    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }

    onPlay(){
        this.setState({
            togglePlay : this.state.togglePlay == 'play' ? 'pause' : 'play',
            speed: null
        })
    }

    addMoreBall(){
        
    }

    increaseSpeed(){
        this.setState({
            speed : 'up',
        })
    }

    decreaseSpeed(){
        this.setState({
            speed : 'down',
        })
    }

    render() {
        
        return (
            <div className="bouching-balls">
                <div className="canvas" style={Style.Canvas}>
                    {
                        balls.map((ball,index) =>
                            <Balls 
                                key = {index}
                                color={ball.color}
                                togglePlay={ this.state.togglePlay } 
                                positionX={ball.x} 
                                positionY={ball.y}
                                speed={this.state.speed}
                                canvas= {canvas}
                            />
                        )
                    }
                </div>
                <button onClick={this.onPlay}>Pause/play</button>
                <button onClick={this.addMoreBall}>add ball</button>
                <button onClick={this.increaseSpeed}>+</button>
                <button onClick={this.decreaseSpeed}>-</button>
            </div>
        );
    }
}
var Style = {
    Canvas: {
        width: 400,
        height: 400,
        background: '#999',
        position: 'relative'
    }
}


export default BounchingBalls;

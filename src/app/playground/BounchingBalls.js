import React, { Component } from 'react';
import Balls from './Balls.js';

var balls = [
        {color:'red', x:10, y:20},
        {color:'green', x:100, y:70},
        {color:'blue', x:200, y:40},
        {color:'yellow', x:300, y:80},
        {color:'white', x:230, y:30},
        {color:'orange', x:160, y:100},
        {color:'magenta', x:120, y:120},
        {color:'yellow', x:110, y:190},
        {color:'cyan', x:320, y:230},
        {color:'brown', x:120, y:230},
    ],
    qty = 1,
    canvas = {
        width: 400,
        height: 400,
        position: 'relative'
    }
    let pressed = new Set();
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
        this.onkeyboardCLick = this.onkeyboardCLick.bind(this);
        this.onkeyboardPress = this.onkeyboardPress.bind(this);
    }
    
    componentWillMount() {

    }

    componentDidMount() {
        document.addEventListener('keypress', this.onkeyboardCLick, false);
        document.addEventListener('keydown', this.onkeyboardPress, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.onkeyboardCLick, false);
        document.removeEventListener('keydown', this.onkeyboardPress, false);
    }

    onPlay(){
        this.setState({
            togglePlay : this.state.togglePlay == 'play' ? 'pause' : 'play',
            speed: null
        })
    }

    addMoreBall(){
        this.setState({
            ballqty : this.state.ballqty == 10 ? this.state.ballqty : this.state.ballqty + 1
        });
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

    onkeyboardCLick(event){

        if (event.code === 'Space'){
            this.onPlay();
        } 

        if (event.keyCode == 13){
            this.addMoreBall();
        }
        
    }

    onkeyboardPress(event){
        if(event.keyCode == 38){
            this.increaseSpeed();
        } 
        
        if(event.keyCode == 40){
            this.decreaseSpeed();
        }
        
    }

    render() {
        let listBalls = []; 
            for (var i = 0; i < this.state.ballqty; i++){
                var ball = balls[i];
                listBalls.push(
                    <Balls 
                        key = {i}
                        color={ball.color}
                        togglePlay={ this.state.togglePlay } 
                        positionX={ball.x} 
                        positionY={ball.y}
                        speed={this.state.speed}
                        canvas= {canvas}
                    />
                )
            
        }
        return (
            <div className="bouching-balls">
                <div 
                    className="canvas" 
                    style={Style.Canvas}
                >
                    {
                        listBalls
                    }
                </div>
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

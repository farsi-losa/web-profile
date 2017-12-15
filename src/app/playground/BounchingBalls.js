import React, { Component } from 'react';

var ball = {
        width: 40,
        height: 40,
        color: 'red',
        step:{
            x:1,
            y:2
        },
        position : {
            x : 0,
            y : 0
        },
        max : 10,
        items : [],
        colors :['red','green', 'blue', 'yellow', 'purple','white', 'black']
    },
    balls = [
        {color:'red', x:10, y:20},
        {color:'green', x:100, y:-20},
        {color:'blue', x:90, y:40}
    ],
    canvas = {
        width: 400,
        height: 400,
        position: 'relative'
    }

class Balls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineX : ball.position.x,
            lineY : ball.position.y,
            ballStepX : ball.step.x,
            ballStepY : ball.step.y,
            pause : this.props.pause,
            ballqty : 1,
            balls : ball.items
        }
    }
    render(){
        return(
            <div style={{ ...Style.Ball, top : this.props.lineY, left : this.props.lineX}} />
        );
    }
}

class BounchingBalls extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lineX : ball.position.x,
            lineY : ball.position.y,
            ballStepX : ball.step.x,
            ballStepY : ball.step.y,
            pause : false,
            ballqty : 1,
            balls : ball.items
        }
        this.onPlay = this.onPlay.bind(this);
        this.addMoreBall = this.addMoreBall.bind(this);
    }
    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }

    onPlay() {
        this.setState({
            pause : !this.state.pause
        })

        if (!this.state.pause){
            this.ballStart();
        } else {
            this.ballPause(this.state.lineX,this.state.lineY);
        }
    }

    ballStart() {
        let myInterval = setInterval(function() {
            this.changeDirection(this.state.ballStepX,this.state.ballStepY);
            this.ballMove(this.state.lineX,this.state.lineY);
            this.setState({
                myInterval : myInterval
            })
            console.log(this.state.lineX)
        }.bind(this), 1000/40);
    }

    ballMove( x , y ) {
        this.setState({
            lineX : x + this.state.ballStepX,
            lineY : y + this.state.ballStepY
        })
    }

    ballPause( x , y ) {
        this.setState({
            lineX : this.state.lineX,
            lineY : this.state.lineY
        })
        clearInterval(this.state.myInterval)
    }

    changeDirection (x, y) {
        if (this.state.lineX  < 0 || this.state.lineX  > canvas.width - ball.width) {
            this.setState({
                ballStepX : -x
            })
        }
        if (this.state.lineY < 0 || this.state.lineY > canvas.height - ball.height) {
            this.setState({
                ballStepY : -y
            })
        }
    }

    addMoreBall(){
        // let balls = ball.items;
        // balls.push(
        //     <div style={{ ...Style.Ball,  top : this.state.lineY, left : this.state.lineX}} />
        // )
        // this.setState({
        //     ballqty: this.state.ballqty + 1
        // })
       // console.log(balls);
    }

    randomPosition(){

    }

    render() {
        const ballItems = balls.map((ball,index) =>
            <div key={index} style={{ ...Style.Ball, background:ball.color,  top : this.state.lineY, left : this.state.lineX}} />
        );
        return (
            <div className="bouching-balls">
                <div className="canvas" style={Style.Canvas}>
                    <Balls 
                        pause={this.state.pause} 
                        lineY={this.state.lineY} 
                        lineX={this.state.lineX}
                    />
                    {
                        ballItems
                    }
                </div>
                <button onClick={this.onPlay}>pause/play</button>
                <button onClick={this.addMoreBall}>add ball</button>
            </div>
        );
    }
}
var Style = {
    Ball: {
        //background: ball.color,
        width: ball.width,
        height: ball.width,
        borderRadius: '50%',
        position:'absolute'
    },
    Canvas: {
        width: 400,
        height: 400,
        background: '#999',
        position: 'relative'
    }
}


export default BounchingBalls;

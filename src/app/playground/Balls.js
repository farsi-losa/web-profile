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
        speed : 80
    },
    myInterval = null
 

class Balls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineX : this.props.positionX,
            lineY : this.props.positionY,
            ballStepX : ball.step.x,
            ballStepY : ball.step.y,
            ballqty : 1,
            togglePlay : this.props.togglePlay,
            //speed : this.props.speed
        }
        this.color = this.props.color;
        this.removeThisBall = this.removeThisBall.bind(this)
    }
    
    componentWillMount(){
        
    }

    componentWillReceiveProps(nextProps, nextState){  
        if (nextProps.togglePlay == 'play') {
            this.ballStart();
        } else if(nextProps.togglePlay != 'play') {
            this.ballPause(this.state.lineX,this.state.lineY);
        }
        
        if (nextProps.speed == 'down' ) {
            ball.speed = ball.speed > 720 ? ball.speed : (ball.speed * 2);
            this.ballSpeedChange(ball.speed);
        } else if(nextProps.speed == 'up' ){
            ball.speed = ball.speed <= 10 ? ball.speed : (ball.speed  / 2);
            this.ballSpeedChange(ball.speed);
        }
        console.log(ball.speed);
    }

    ballStart() {
        this.clearMyInterval(this.myInterval);
            this.myInterval = setInterval(function() {
                this.changeDirection(this.state.ballStepX,this.state.ballStepY);
                this.ballMove(this.state.lineX,this.state.lineY);
            }.bind(this), ball.speed)
    }

    ballSpeedChange(speed) {
        this.clearMyInterval(this.myInterval);
            this.myInterval = setInterval(function() {
                this.changeDirection(this.state.ballStepX,this.state.ballStepY);
                this.ballMove(this.state.lineX,this.state.lineY);
            }.bind(this), speed)
    }

    ballMove( x , y ) {
        this.setState({
            lineX : x + this.state.ballStepX,
            lineY : y + this.state.ballStepY
        })
    }

    ballPause( x , y ) {
        this.setState({
            lineX : x,
            lineY : y
        })
        this.clearMyInterval(this.myInterval);
    }

    clearMyInterval(interval){
        clearInterval(interval);
    }

    changeDirection (x, y) {
        if (this.state.lineX  < 0 || this.state.lineX  > this.props.canvas.width - ball.width) {
            this.setState({
                ballStepX : -x
            })
        }
        if (this.state.lineY < 0 || this.state.lineY > this.props.canvas.height - ball.height) {
            this.setState({
                ballStepY : -y
            })
        }
    }

    removeThisBall(){
        this.color = '#999';
        console.log('click');
    }

    render(){
        console.log(this.state.lineX);
        console.log(this.state.lineY);
        return(
            <div onClick={this.removeThisBall} style={{ ...Style.Ball, background : this.color, top : this.state.lineY, left : this.state.lineX}} />
        );
    }
}
var Style = {
    Ball: {
        width: ball.width,
        height: ball.width,
        borderRadius: '50%',
        position:'absolute'
    },
}

export default Balls;

import React from 'react';
import ReactDOM from 'react-dom';
import SaveTimes from './saveTimes';
import Mycontext from './MycontentText';
let interval;
let pose = 'Stop'
let poseButton = false
class Timer extends React.Component {
    constructor() {
        super();
        this.state = ({ hour: 0, min: 0, sec: 0, milli: 0 })
    }

    resetTime = () => {
        this.setState({ hour: 0, min: 0, sec: 0, milli: 0 })
        clearInterval(interval);
        poseButton = false
        pose = 'Stop'
    }
    static contextType = Mycontext
    StartStop = () => {
        poseButton = !poseButton
        if (poseButton) {
            pose = 'Action'
            if (document.querySelector('#getTime').value !== "") {
                interval = setInterval(() => {
                    this.setState({ milli: this.state.milli - 1 })
                }, 10)
            }
            else {
                interval = setInterval(() => {
                    this.setState({ milli: this.state.milli + 1 })
                }, 10)
            }

        }
        else {
            this.setState({ hour: this.state.hour, min: this.state.min, sec: this.state.sec, milli: this.state.milli })
            clearInterval(interval);
            pose = 'Stop'
        }
    }

    SendTimes = () => {

        let newTime = document.querySelector('.timer p').innerHTML;
        this.context.setTimes([...this.context.times, newTime])
    }
    TimeUpdat = (v, v1, v2, v3, v4, v5, v6, v7, v8) => {
        if (this.state.milli === v) {
            this.setState({ sec: v1, milli: v2 })
            if (this.state.sec === v3) {
                this.setState({ min: v4, sec: v5 })
                if (this.state.min === v6) {
                    this.setState({ min: v8, hour: v7 })
                }
            }
        }
    }
    componentDidUpdate() {
        if (document.querySelector('.timer p').textContent == "00:00:00:00") {
            clearInterval(interval)
        }
        else if (document.querySelector('#getTime').value === "") {
            this.TimeUpdat(100, this.state.sec + 1, 0, 59, this.state.min + 1, 0, 59, this.state.hour + 1, 0)
        }
        else {
            this.TimeUpdat(0, this.state.sec - 1, 99, 0, this.state.min - 1, 59, 0, this.state.hour - 1, 59)
        }

    }
    madeUsuallTime = (e) => {
        // this.setState({ hour: 0, min: 0, sec: 0, milli: 0 })
        clearInterval(interval);

        let getTimeString = document.querySelector('#getTime').value
        let seconds = Math.floor(getTimeString / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        seconds = seconds % 60;
        minutes = minutes % 60;
        let millisecondsStr = getTimeString % 100;
        this.setState({ hour: hours, min: minutes, sec: seconds, milli: millisecondsStr })
    }

    render() {
        let h = this.state.hour.toString().padStart(2, '0')
        let m = this.state.min.toString().padStart(2, '0')
        let s = this.state.sec.toString().padStart(2, '0')
        let mi = this.state.milli.toString().padStart(2, '0')
        return (
            <>
                <h3>{pose}</h3>
                <div className='timer' style={{ background: this.props.themColor ? 'black' : 'white' }}><p>{`${h}:${m}:${s}:${mi}`}</p></div>
                <div className='buttonDiv'>
                    <button id='startStopBtn' onClick={this.StartStop} >{pose == 'Stop' ? 'Start' : 'Stop'}</button>
                    <button onClick={this.resetTime} >Reverse</button>
                    <button onClick={this.props.islightFun}>{this.props.themColor ? 'white' : 'black'}</button>
                    <button onClick={this.SendTimes}>+</button>
                </div>
                <input type='number' onKeyDown={this.madeUsuallTime} placeholder='Enter the MilliSecond' id='getTime' />
            </>
        )
    }
}
export default Timer;
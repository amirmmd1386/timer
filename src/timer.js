import React from 'react';
import ReactDOM from 'react-dom';
var interval;
var pose = 'Stop'
class Timer extends React.Component {
    constructor() {
        super();
        this.state = ({ hour: 0, min: 0, sec: 0, milli: 0 })
    }

    resetTime = () => {
        this.setState({ hour: 0, min: 0, sec: 0, milli: 0 })
        clearInterval(interval);
        pose = 'Stop'
    }
    clearTime = () => {
        this.setState({ hour: this.state.hour, min: this.state.min, sec: this.state.sec, milli: this.state.milli })
        clearInterval(interval);
        pose = 'Stop'
    }
    startTime = () => {
        pose = 'Action'
        interval = setInterval(() => {
            this.setState({ milli: this.state.milli + 1 })
        }, 10)
    }
    componentDidUpdate() {
        if (this.state.milli === 100) {
            this.setState({ sec: this.state.sec + 1, milli: 0 })
            if (this.state.sec === 59) {
                this.setState({ min: this.state.min + 1, sec: 0 })
                if (this.state.min === 59) {
                    this.setState({ min: 0, hour: this.state.hour + 1 })
                }
            }
        }
    }
    render() {
        let h = this.state.hour.toString().padStart(2, '0')
        let m = this.state.min.toString().padStart(2, '0')
        let s = this.state.sec.toString().padStart(2, '0')
        let mi = this.state.milli.toString().padStart(2, '0')
        return (
            <>
                <h3>pose : {pose}</h3>
                <div className='timer' style={{background: this.props.themColor ? 'black' : 'white'}}><p>{`${h}:${m}:${s}:${mi}`}</p></div>
                <div className='buttonDiv'>
                    <button onClick={this.startTime} >Start</button>
                    <button onClick={this.clearTime} >Stop</button>
                    <button onClick={this.resetTime} >Reverse</button>
                    <button onClick={this.props.islightFun}>Them</button>
                </div>
            </>
        )
    }
}
export default Timer;
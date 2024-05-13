import React from 'react';
import ReactDOM from 'react-dom';
var interval;
class Timer extends React.Component {
    constructor() {
        super();
        this.state = ({ hour: 0, min: 0, sec: 0 })
    }

    resetTime = () => {
        this.setState({ hour: 0, min: 0, sec: 0 })
        clearInterval(interval);
    }
    clearTime = () => {
        clearInterval(interval);
    }
    startTime = () => {
        interval = setInterval(() => {
            this.setState({ sec: this.state.sec + 1 })
        }, 1000)
    }
    componentDidUpdate() {
        if (this.state.sec === 59) {
            this.setState({ min: this.state.min + 1, sec: 0 })
            if (this.state.min === 59) {
                this.setState({ min: 0, hour: this.state.hour + 1 })
            }
        }
    }
    render() {
        let h = this.state.hour.toString().padStart(2, '0')
        let m = this.state.min.toString().padStart(2, '0')
        let s = this.state.sec.toString().padStart(2, '0')
        return (
            <>
                <div className='timer'><p>{`${h}:${m}:${s}`}</p></div>
                <div className='buttonDiv'>
                    <button onClick={this.startTime}>Start</button>
                    <button onClick={this.clearTime}>Stop</button>
                    <button onClick={this.resetTime}>Reverse</button>
                </div>
            </>
        )
    }
}
export default Timer;
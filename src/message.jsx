import React , { useState } from 'react';
import ReactDOM from 'react-dom';
class Msg extends React.Component{
    render(){
        return(
            <div><h1>{this.props.title}</h1></div>
        )
    }
}
export default Msg;
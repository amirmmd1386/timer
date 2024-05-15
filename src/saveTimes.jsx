import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import Times from './times';
let SaveTimes = (props) => {
    return (
        <div className='timeSave'>{props.children.map((c) => (<Times key={Math.random()}>{c}</Times>))}</div>
    )
}
export default SaveTimes;
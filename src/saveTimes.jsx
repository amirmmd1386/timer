import React, { useContext, useState } from 'react';
import Times from './times';
import Mycontext from './MycontentText';
let SaveTimes = (props) => {
    const context = useContext(Mycontext)
    return (
        <div className='timeSave'>{context.times.map((c) => (<Times key={Math.random()}>{c}</Times>))}</div>
    )
}
export default SaveTimes;
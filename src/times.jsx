import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
const Times = (props)=>{
    return(
        <>
        <div>{props.children}</div>
        <hr/>
        </>
    )
}
export default Times;
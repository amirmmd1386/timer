import React, { useContext, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import Mycontext from './MycontentText';
const Times = (props)=>{
    const context = useContext(Mycontext)
    const handelDelete = (e)=>{
        context.setTimes(context.times.filter((c)=>c != e.target.innerHTML))
    }
    return(
        <>
        <div onClick={handelDelete} className='timeNote'>{props.children}</div>
        <hr/>
        </>
    )
}
export default Times;
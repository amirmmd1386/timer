import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import Timer from './timer';
import Msg from './message';
import './index.css';
// class App extends React.Component {
//   constructor() {
//     super();

//   }

//   render() {
//     return (
//       <div>
//         <Msg />
//         <Timer />
//       </div>
//     )
//   }
// }
let App = () => {
  const [them, setThem] = useState(true);
  const [titleMain, setTitle] = useState('This is my first React App (Timer)');
  const [times, setTimes] = useState([]);
  const islightFun = () => {
    setThem(!them);
  }
  return (
    <div className='main' style={{ background: them ? 'black' : 'white' }}>
      <Msg title={titleMain} />
      <Timer
        times={times}
        setTimes ={setTimes}
        themColor={them}
        islightFun={islightFun} />
    </div>
  )
}
export default App;
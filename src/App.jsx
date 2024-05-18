import React, { useContext, useState } from 'react';
import Timer from './timer.jsx';
import Msg from './message.jsx';
import './index.css';
import Mycontext from './MycontentText.jsx';
import SaveTimes from './saveTimes.jsx';
let App = () => {
  const [them, setThem] = useState(true);
  const [titleMain, setTitle] = useState('This is my first React App (Timer)');
  const [times, setTimes] = useState([]);
  const islightFun = () => {
    setThem(!them);

  }

  return (
    <Mycontext.Provider value={{ setTimes, times }}>
      <div className='main' style={{ background: them ? 'black' : 'white' }}>
        <Msg title={titleMain} />
        <Timer
          themColor={them}
          islightFun={islightFun} />
        <SaveTimes />
      </div>
    </Mycontext.Provider>
  )
}
export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './timer';
import Msg from './message';
import './index.css';
class App extends React.Component {
  constructor() {
    super();
    
  }
  
  render() {
    return (
      <div>
        <Msg />
        <Timer />
      </div>
    )
  }
}
export default App;
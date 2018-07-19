import React, { Component } from 'react';
import './App.css';
import AreaSelection from './components/index'
import { citys } from './components/data'
class App extends Component {
  render() {
    return (
      <div className="App">
        <AreaSelection citys = {citys}/>
      </div>
    );
  }
}

export default App;

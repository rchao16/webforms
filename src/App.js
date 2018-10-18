import React, { Component } from 'react';
import './App.css';
import SampleComponent from './components/SampleComponent'
import Drilldown from './components/Drilldown'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SampleComponent  />
        {/* <Drilldown /> */}
      </div>
    );
  }
}

export default App;

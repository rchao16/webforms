import React, { Component } from 'react';
import './App.css';
import SampleComponent from './components/SampleComponent'
import NestedDropdown from './components/NestedDropdown'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SampleComponent  /> */}
        <NestedDropdown />
      </div>
    );
  }
}

export default App;

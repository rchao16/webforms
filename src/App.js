import React, { Component } from 'react';
import './App.css';
import NestedDropdown from './components/NestedDropdown'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NestedDropdown />
      </div>
    );
  }
}

export default App;

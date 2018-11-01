import React, { Component } from 'react';
import './App.css';
import NestedDropdown from './components/NestedDropdown'
import IndividualWebForm from './components/IndividualWebForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NestedDropdown /> */}
        <IndividualWebForm />
      </div>
    );
  }
}

export default App;

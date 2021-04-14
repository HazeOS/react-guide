import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>This is React Application.</h1>

          <Person name="Ilya" age="23">My hobby: Nothing</Person>
          <Person name="Vasyl" age="25"/>
          <Person name="Peta" age="30"/>
      </div>
    );
  }
}

export default App;

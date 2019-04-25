import React, { Component } from 'react';
import './App.css';
import Values from './Values';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div>
            
            <Values />
          </div>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Values from './components/Values';
import Map from './components/Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div>
            
            <Values />
          </div>
        </header>
        <Map />
      </div>
    );
  }
}

export default App;

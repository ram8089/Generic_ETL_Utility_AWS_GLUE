import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Generic_ETL_Utility_AWS_GLUE
          </p>
          <a
            className="App-link"
            href="https://akhilpatlolla.github.io/Generic_ETL_Utility_AWS_GLUE/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ETL Utility
          </a>
        </header>
      </div>
    );
  }
}

export default App;

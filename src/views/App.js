import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Home</h1>
        </header>
        <p className="App-intro">
	This is the home page.
        </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Test extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test</h1>
        </header>
        <p className="App-intro">
        This is the test page.
        </p>
        <div><Link to='/'>HOME</Link></div>
      </div>
    );
  }
}

export default Test;

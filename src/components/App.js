import React, { Component } from 'react';
import '../App.css';
import Exchange from './Exchange'
import Registration from './Registration'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Exchange />
        <Registration />
      </div>
    );
  }
}

export default App;

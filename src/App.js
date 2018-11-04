import React from 'react';
import './App.css';
import Snake from './Snake'
import Apple from './Apple'
import Level from './Level'
import Score from './Score'

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <div id="meta"></div>
        <Score />
        <Level />
        <div id="field">
          <Apple />
          <Snake />
        </div>
      </div>
    );
  }
}

export default App;

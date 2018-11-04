import React from 'react';
import './App.css';
import Snake from './Snake'
import Apple from './Apple'
import Level from './Level'
import Score from './Score'
import GameOver from './GameOver'
import { connect } from 'react-redux'

const App = ({gameOver}) => {
    if (gameOver === false ) {
      return ( 
          <div id="App">
            <div id="meta">
              <Score />
              <Level />
            </div>
            <div id="field">
              <Apple />
              <Snake />
            </div>          
          </div>
      );
    }
    else {
      return (
        <div id="App">
          <GameOver />        
        </div>
      );
    }
  }


// StateToProps
const mapStateToProps = (state) => {
  return {
    gameOver: state.gameOver
  }
}

// connect
export default connect(mapStateToProps)(App)


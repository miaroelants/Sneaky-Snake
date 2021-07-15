import React from 'react';
import './App.css';
import Snake from './Snake'
import Apple from './Apple'
import Score from './Score'
import Overlay from './Overlay'
import { connect } from 'react-redux'

const App = () => (
  <div id="App">
    <h1>Snake</h1>
    <div id="field">
      <Apple />
      <Snake />
      <Overlay />
    </div>
    <div id="meta">
      <Score />
    </div>
  </div>
)

// StateToProps
const mapStateToProps = (state) => ({
  gameState: state.gameState
})

// connect
export default connect(mapStateToProps)(App)

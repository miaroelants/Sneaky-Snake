import React from 'react'
import { connect } from 'react-redux'
import GameOverText from './GameOverText'
import {newGame} from './store'



// component
const GameOver = () => {
    function checkKey(e) {
    e = e || window.event;
    if (e.keyCode === 32) {
        // space button
        Store.dispatch(newGame())
        }
    return (
        <div id="gameover" >
            <GameOverText />           
        </div>
    )
}

// StateToProps
const mapDispatchToProps = (dispatch) => {
    return {
        newGame: () => dispatch(newGame()),
    }
}

// connect
export default connect(null, mapDispatchToProps)(GameOver)


import React from 'react'
import { connect } from 'react-redux'

// component
const Overlay = ({ gameState }) => {
    switch (gameState) {
        case 'paused':
            return (
                <div id="overlay">
                    <span>Game Paused</span>
                    press space to <br /> continue playing
                </div>
            )
        case 'over':
            return (
                <div id="overlay">
                    <span>Game Over</span>
                    press space to <br /> start a new game
                </div>
            )
        default:
            return null
    }
}

// StateToProps
const mapStateToProps = (state) => ({
    gameState: state.gameState
})

// connect
export default connect(mapStateToProps)(Overlay)

import React from 'react'
import { connect } from 'react-redux'

// component
const GameOverText = ({ score }) => {
    return (
        <div >
            <div>GAME OVER</div>
            <br />
            <div>YOUR SCORE WAS {score}</div>
            <br />
            <br />
            <div>press space to <br /> start a new game</div>
        </div>
    )
}

// StateToProps
const mapStateToProps = (state) => {
    return {
        score: state.score
    }
}

// connect
export default connect(mapStateToProps)(GameOverText)
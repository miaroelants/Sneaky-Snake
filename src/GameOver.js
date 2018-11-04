import React from 'react'
import { connect } from 'react-redux'

// component
const GameOver = ({score}) => {
    return (
        <div id="gameover" >
            <div>GAME OVER</div>
            <br />
            <div>YOUR SCORE WAS {score}</div>            
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
export default connect(mapStateToProps)(GameOver)


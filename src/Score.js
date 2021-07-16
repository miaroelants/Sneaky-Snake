import React from 'react'
import { connect } from 'react-redux'

// component
const Score = ({score}) => (
    <div id="score">
        SCORE: <span>{score}</span>
    </div>
)

// StateToProps
const mapStateToProps = (state) => ({
    score: state.score
})

// connect
export default connect(mapStateToProps)(Score)

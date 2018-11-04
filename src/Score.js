import React from 'react'
import { connect } from 'react-redux'

// component
const Score = ({score}) => {
    return (
        <div id="score" >
            SCORE : {score}
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
export default connect(mapStateToProps)(Score)
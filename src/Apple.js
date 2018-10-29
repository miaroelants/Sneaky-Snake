import React from 'react'
import { connect } from 'react-redux'

// component
const Apple = ({ x, y }) => {
    return (
        <div id="apple" style={{ left: x * 10 + 'px', top: y * 10 + 'px' }}>

        </div>
    )
}

// StateToProps
const mapStateToProps = (state) => {
    return {
        x: state.apple.x,
        y: state.apple.y
    }
}

// connect
export default connect(mapStateToProps)(Apple)









import React from 'react'
import { connect } from 'react-redux'

// component
const Apple = ({ x, y }) => (
    <div id="apple" style={{ left: x * 10 + 'px', top: y * 10 + 'px' }}></div>
)

// StateToProps
const mapStateToProps = (state) => ({
    x: state.apple.x,
    y: state.apple.y
})

// connect
export default connect(mapStateToProps)(Apple)

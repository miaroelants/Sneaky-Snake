import React from 'react'
import { connect } from 'react-redux'

// component
const Snake = ({ snake }) => (
    <div id="snake">
        {snake.map(
            part => <div key={part.x + "_" + part.y} className="snakepart" style={{ left: part.x * 10 + 'px', top: part.y * 10 + 'px' }}></div>
        )}
    </div>
)

// StateToProps
const mapStateToProps = (state) => ({
    snake: state.snake
})

// connect
export default connect(mapStateToProps)(Snake)

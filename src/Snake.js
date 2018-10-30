import React from 'react'
import { connect } from 'react-redux'

// component
const Snake = ({ snake }) => {
    const snakeParts = snake.map(
        part => <div key={part.x + "_" + part.y} className="snake" style={{ left: part.x * 10 + 'px', top: part.y * 10 + 'px' }}></div>
    )
    return (
        <div >
            {snakeParts}
        </div>
    )
}

// StateToProps
const mapStateToProps = (state) => {
    return {
        snake: state.snake
    }
}

// connect
export default connect(mapStateToProps)(Snake)



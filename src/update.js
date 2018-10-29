function nextPosition(position, direction) {
    if (direction === 'right') {
        return {
            x: position.x + 1,
            y: position.y,
        }
    }
    if (direction === 'left') {
        return {
            x: position.x - 1,
            y: position.y,
        }
    }
    if (direction === 'up') {
        return {
            x: position.x,
            y: position.y - 1,
        }
    }
    if (direction === 'down') {
        return {
            x: position.x,
            y: position.y + 1,
        }
    }

}

function update(state) {
    console.log("state:", state)
    return {
        ...state,
        snake: [nextPosition, state.snake[0], state.snake[1]]
    }
}

export default update
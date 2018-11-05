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

function isEqualPosition(position1, position2) {
    if ((position1.x === position2.x) && (position1.y === position2.y)) {
        return true
    }
    else { return false }
}

function update(state) {
    console.log("state:", state)
    // eats apple
    const nextPos = nextPosition(state.snake[state.snake.length - 1], state.direction)

    if (isEqualPosition(nextPos, state.apple)) {
        return {
            ...state,
            score: state.score + 1,
            apple: { x: Math.floor(Math.random() * 40), y: Math.floor(Math.random() * 40) },
            snake: state.snake.concat(nextPos)
        }
    }

    // suicidal snake
    else if (state.snake.some(part => isEqualPosition(part, nextPos))) {
        return {
            ...state,
            gameOver: true,
        }
    }

    // snake hugs wall
    else if (nextPos.x >= 40 || nextPos.y >= 40 || nextPos.x < 0 || nextPos.y < 0) {
        return {
            ...state,
            gameOver: true,
        }
    }

    // snake moves
    else return {
        ...state,
        snake: (state.snake.concat(nextPos)).slice(1)
    }
}

export default update
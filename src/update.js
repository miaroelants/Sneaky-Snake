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
    return position1.x === position2.x && position1.y === position2.y
}

function update(state) {
    // console.log("state:", state)
    const nextPos = nextPosition(state.snake[state.snake.length - 1], state.direction)

    // eats apple
    if (isEqualPosition(nextPos, state.apple)) {
        let randomPosition

        while (!randomPosition || isEqualPosition(state.apple, randomPosition) || state.snake.includes(randomPosition))
            randomPosition = { x: Math.floor(Math.random() * 40), y: Math.floor(Math.random() * 40) }

        return {
            ...state,
            score: state.score + 1,
            apple: randomPosition,
            snake: state.snake.concat(nextPos)
        }
    }

    // suicidal snake
    if (state.snake.some(part => isEqualPosition(part, nextPos))) {
        return {
            ...state,
            gameState: 'over',
        }
    }

    // snake hugs wall
    if (nextPos.x >= 40 || nextPos.y >= 40 || nextPos.x < 0 || nextPos.y < 0) {
        return {
            ...state,
            gameState: 'over',
        }
    }

    // snake moves
    return {
        ...state,
        snake: (state.snake.concat(nextPos)).slice(1)
    }
}

export default update

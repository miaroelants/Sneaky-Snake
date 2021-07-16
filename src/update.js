function randomPosition() {
    return {
        x: Math.floor(Math.random() * 40),
        y: Math.floor(Math.random() * 40),
    }
}

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

    // calculate next position
    let nextPart = state.direction
    if (state.direction !== state.nextDirection) {
        const didReverse = (state.direction === 'left' && state.nextDirection === 'right')
            || (state.direction === 'right' && state.nextDirection === 'left')
            || (state.direction === 'down' && state.nextDirection === 'up')
            || (state.direction === 'up' && state.nextDirection === 'down')

        if (!didReverse)
            nextPart = state.nextDirection
    }
    const nextPos = nextPosition(state.snake[state.snake.length - 1], nextPart)

    // eats apple
    if (isEqualPosition(nextPos, state.apple)) {
        let nextApple = randomPosition()
        // eslint-disable-next-line no-loop-func
        while (state.snake.some(part => isEqualPosition(nextApple, part)) || isEqualPosition(nextApple, state.apple))
            nextApple = randomPosition()

        return {
            ...state,
            score: state.score + 1,
            apple: nextApple,
            snake: state.snake.concat(nextPos),
            direction: nextPart,
            nextDirection: nextPart,
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
        snake: (state.snake.concat(nextPos)).slice(1),
        direction: nextPart,
        nextDirection: nextPart,
    }
}

export default update

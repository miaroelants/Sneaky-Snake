import { createStore } from 'redux'
import update from './update';

//state
const initialState = {
    score: 0,
    snake: [{ x: 1, y: 25, }, { x: 2, y: 25, }, { x: 3, y: 25, }],
    apple: { x: 10, y: 25 },
    tickSpeed: 1,
    level: 1,
    direction: 'right',
    gameOver: false,
}

//actions
export function changeDirection(direction) {
    return { type: 'CHANGE_DIRECTION', payload: direction }
}

export function tickTick() {
    return { type: 'TICK_TICK', }
}

export function newGame() {
    return { type: 'NEW_GAME', }
}


//reducer
function reducer(state, action) {
    if (action.type === 'CHANGE_DIRECTION') {
        return {
            ...state,
            direction: action.payload
        }
    }

    else if (action.type === 'NEW_GAME') {
        return initialState
    }

    else if (action.type === 'TICK_TICK') {
        return update(state)
    }

    else { return state }
}

//store
const store = createStore(reducer, initialState)

//test
store.subscribe(function () {
    console.log("Updated store, new state:", store.getState())
})

//export
export default store
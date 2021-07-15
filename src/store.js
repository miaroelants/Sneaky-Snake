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
    gameState: 'paused',
}

//actions
export function changeDirection(direction) {
    return { type: 'CHANGE_DIRECTION', payload: direction }
}

export function toggleGameState() {
    return { type: 'TOGGLE_GAMESTATE', }
}

export function gameOver() {
    return { type: 'GAME_OVER', }
}

export function tickTick() {
    return { type: 'TICK_TICK', }
}

//reducer
function reducer(state, action) {
    if (action.type === 'CHANGE_DIRECTION') {
        return {
            ...state,
            direction: state.gameState === 'playing' ? action.payload : state.direction
        }
    }

    if (action.type === 'TOGGLE_GAMESTATE') {
        switch (state.gameState) {
            case 'over':
                return update({
                    ...initialState,
                    gameState: 'playing',
                })
            case 'playing':
                return {
                    ...state,
                    gameState: 'paused',
                }
            default:
                return update({
                    ...state,
                    gameState: 'playing',
                })
        }
    }

    if (action.type === 'GAME_OVER') {
        return {
            ...state,
            gameState: 'over',
        }
    }

    if (action.type === 'TICK_TICK') {
        return update(state)
    }

    return state
}

//store
const store = createStore(reducer, initialState)

// test
// store.subscribe(function () {
//     console.log("Updated store, new state:", store.getState())
// })

//export
export default store

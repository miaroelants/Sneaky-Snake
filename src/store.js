import { createStore } from 'redux'
import update from './update';

//state
const initialState = {
    score: 0,
    snake: [{ x: 25, y: 3, }, { x: 25, y: 2, }, { x: 25, y: 1, }],
    apple: { x: 25, y: 25 },
    tickSpeed: 1,
    level: 1,
    direction: 'right',
}

/* setInterval
const tickTick = window.setInterval(myCallback, 500);
function myCallback() {
    tickTick()
}
*/

//actions
export function changeDirection(direction) {
    return { type: 'CHANGE_DIRECTION', payload: direction }
}

export function tickTick() {
    return { type: 'TICK_TICK', }
}


//reducer
function reducer(state, action) {
    if (action.type === 'CHANGE_DIRECTION') {
        return {
            ...state,
            direction: action.payload
        }
    }
    if (action.type === 'TICK_TICK') {
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
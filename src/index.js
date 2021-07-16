import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import Store, { changeDirection, forcePause, toggleGameState, tickTick } from './store'

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));

const checkKey = (e) => {
    e = e || window.event;

    if (e.which === 38) { // up arrow
        return Store.dispatch(changeDirection('up'))
    }
    if (e.which === 40) { // down arrow
        return Store.dispatch(changeDirection('down'))
    }
    if (e.which === 37) { // left arrow
        return Store.dispatch(changeDirection('left'))
    }
    if (e.which === 39) { // right arrow
        return Store.dispatch(changeDirection('right'))
    }
    if (e.which === 32) { // space bar
        return Store.dispatch(toggleGameState())
    }
}

const pause = () => {
    const state = Store.getState()
    if (state.gameState === 'playing')
        Store.dispatch(forcePause())
}

const play = () => {
    const state = Store.getState()
    const delay = 200 - Math.floor(state.score / 10) * 10
    setTimeout(play, delay)
    if (state.gameState === 'playing')
        Store.dispatch(tickTick())
}

document.onkeydown = checkKey
window.onblur = pause
play()

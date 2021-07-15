import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import Store, { changeDirection, toggleGameState, tickTick } from './store'

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));

document.onkeydown = checkKey;
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

}

setInterval(
    () => Store.dispatch(tickTick()),
    200
);

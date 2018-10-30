import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import Store, { changeDirection, tickTick } from './store'


ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode === 38) {
        // up arrow
        Store.dispatch(changeDirection('up'))
    }
    else if (e.keyCode === 40) {
        // down arrow
        Store.dispatch(changeDirection('down'))
    }
    else if (e.keyCode === 37) {
        // left arrow
        Store.dispatch(changeDirection('left'))
    }
    else if (e.keyCode === 39) {
        // right arrow
        Store.dispatch(changeDirection('right'))
    }
}

setInterval(
    () => Store.dispatch(tickTick()),
    200
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import Store, { changeDirection, tickTick } from './store'


ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));


window.tick = () => Store.dispatch(tickTick())

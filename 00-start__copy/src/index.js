import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main')
);

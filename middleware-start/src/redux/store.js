import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/root.js';
import loggingMiddleware from '../redux/middlewares/logger.js';

const composeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    composeFunction(
        applyMiddleware(
            thunkMiddleware,
            loggingMiddleware
        )
    )
);

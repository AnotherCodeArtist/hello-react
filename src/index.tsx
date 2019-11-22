import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { hello } from './reducers';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({ hello });
const store = createStore(rootReducer);
export type AppState = ReturnType<typeof rootReducer>


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

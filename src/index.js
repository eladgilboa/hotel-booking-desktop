//import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import './style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import profilesApp from './reducers'
import thunkMiddleware from 'redux-thunk'
import { loadFromServer } from './actions'

const store = createStore(
    profilesApp,
    applyMiddleware(
        thunkMiddleware
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();

store.dispatch( loadFromServer() );
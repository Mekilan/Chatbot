import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunx from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers, applyMiddleware(thunx));

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
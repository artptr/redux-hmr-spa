import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import App from './App';

const Root = ({ store, history }) => (
    <Provider store={store}>
        <Router key={new Date()} history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
);

export default Root;

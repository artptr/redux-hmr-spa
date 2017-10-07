import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
);

const target = document.getElementById('app');

function render() {
    const Root = require('./components/Root').default;

    ReactDOM.render(
        <AppContainer>
            <Root store={store} history={history} />
        </AppContainer>,
        target
    );
}

render();

if (module.hot) {
    module.hot.accept('./reducers', () => {
        store.replaceReducer(require('./reducers').default);
    });

    module.hot.accept('./components/Root', render);
}

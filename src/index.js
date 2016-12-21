import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import reducers from './reducers';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const history = syncHistoryWithStore(browserHistory, store);

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

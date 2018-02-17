// react
import React from 'react';
import { render } from 'react-dom';

// redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';

// components
import App from './components/App';

// reducers
import calculator from './reducers';

const createStoreMiddleware = applyMiddleware()(createStore); // apply middlewares eg ReduxPromise, thunk

render(
    <Provider
        store={createStoreMiddleware(calculator,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <App/>
    </Provider>, document.getElementById('root')
);

registerServiceWorker();

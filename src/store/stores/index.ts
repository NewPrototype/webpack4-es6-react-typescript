import 'babel-polyfill';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from 'store/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default store;

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './../reducers'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware,logger] 

const store = createStore(applyMiddleware(rootReducer,...middlewares))

export default store
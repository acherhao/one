import {createStore,combineReducers,applyMiddleware} from 'redux';
import reduxPromiseMiddleware from "redux-promise-middleware";

import read from './reducres/read';
import film from './reducres/film';
import one from './reducres/one';

const reducers = combineReducers({
    read,
    film,
    one
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;
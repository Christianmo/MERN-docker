import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';

import appReducer from 'redux/app/reducer';
import usersReducer from 'redux/users/reducer';
import postsReducer from 'redux/posts/reducer';
import responseMiddleware from 'redux-response-middleware';

const reducers = combineReducers({ appReducer, usersReducer, postsReducer });

const middlewares = [];
const enhancers = [];

middlewares.push(responseMiddleware());

enhancers.push(applyMiddleware(...middlewares));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default createStore(reducers, composeEnhancers(...enhancers));

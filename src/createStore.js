import { applyMiddleware, createStore } from 'redux';
import firebase from 'firebase';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

// eslint-disable-next-line prefer-const
let middlewareList = [promise(), thunk.withExtraArgument({ firebase })];

if (process.env.NODE_ENV === 'development') {
  middlewareList.push(createLogger({}));
}

export default (reducer, currentState) => (
  createStore(
    reducer,
    { ...{ ...currentState } },
    applyMiddleware(...middlewareList)
  )
);

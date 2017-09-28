import { combineReducers, applyMiddleware, createStore } from 'redux';
import { ApolloClient } from 'react-apollo';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import * as api from './api';
import { auth, employeeForm, employees } from './reducers';

export default (options) => {
  const { client } = {
    ...{ client: new ApolloClient() },
    ...options
  };

  const reducers = combineReducers({
    auth,
    employeeForm,
    employees,
    apollo: client.reducer()
  });

  const INITIAL_STATE = {};

  const middleware = applyMiddleware(
    thunk.withExtraArgument({ api }),
    client.middleware(),
    createLogger({})
  );

  return createStore(reducers, INITIAL_STATE, middleware);
};

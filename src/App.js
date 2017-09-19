import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import createStore from './createStore';
import reducers from './reducers';

import config from './config/firebase.json';

import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Router />
      </Provider>
    );
  }
}

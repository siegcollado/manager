import React from 'react';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import { GRAPHQL_URL } from './config/endpoints';
import Router from './Router';
import configureStore from './configureStore';

const App = () => {
  const getToken = () => store.getState().auth.token;

  const networkInterface = createNetworkInterface({ uri: GRAPHQL_URL });

  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        // eslint-disable-next-line no-param-reassign
        req.options.headers = {};
      }

      const jwt = getToken();
      if (jwt) {
        // eslint-disable-next-line no-param-reassign
        req.options.headers.authorization = `Bearer ${jwt}`;
      }

      next();
    }
  }]);

  const client = new ApolloClient({ networkInterface });

  const store = configureStore({ client });

  return (
    <ApolloProvider store={store} client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default App;

import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './pages/Home';


import Login from'./pages/Login';
import LoginLink from './components/LoginLink'

import Header from './components/Header';
import Footer from './components/Footer';
import Mychallenges from './pages/Mychallenges';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Header />
      <LoginLink />
      <Route exact path="/">
              <Home />
      </Route>
      <Route exact path="/login">
      <Login />
      </Route>
      <Route exact path="/mychallenges">
      <Mychallenges />
      </Route>
      <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;

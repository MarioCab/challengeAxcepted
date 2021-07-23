import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Login from "./pages/Login";
import LoginLink from "./components/LoginLink";

import Header from "./components/Header";
import Mychallenges from "./pages/Mychallenges";
import ChallengeWorld from "./components/ChallengeWorld";

// const client = new ApolloClient({
// =======
// // const client = new ApolloClient({
// //   uri: "/graphql",
// //   cache: new InMemoryCache(),
// // });
// =======
// // const client = new ApolloClient({
// //   uri: "/graphql",
// //   cache: new InMemoryCache(),
// // });

const httpLink = createHttpLink({
  uri: "/graphql",
});

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("id_token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// const httpLink = createHttpLink({
// >>>>>>> c7cfebc99f0ccb93a17a8e5c047ffad3e28d9243
//   uri: "/graphql",
// });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: 'Challenge Axcepted',
//       headerLinks: [
//         { title: 'Home', path: '/'},
//         { title: 'Login', path: '/login'},
//         { title: 'My Challenges', path: '/mychallenges'}
//       ]
//     }
//   }
// }

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Challenge Axcepted</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                {/* <LoginLink /> */}
                {/* <Link className="nav-link" to="/login">Login</Link> */}
                <Link className="nav-link" to="/challengeworld">
                  Challenge World
                </Link>
                <Link className="nav-link" to="/mychallenges">
                  My Challenges
                </Link>
                <LoginLink />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/mychallenges">
              <Mychallenges />
            </Route>
            <Route exact path="/challengeworld">
              <ChallengeWorld />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;

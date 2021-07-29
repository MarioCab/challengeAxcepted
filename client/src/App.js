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
import AxeDispaly from "./components/axe";
import Login from "./pages/Login";
import LoginLink from "./components/LoginLink";

import Auth from "./utils/auth";

// import Header from "./components/Header";
import Mychallenges from "./pages/Mychallenges";
import ChallengeWorld from "./components/ChallengeWorld";
import { Scene } from "three";
import Axe from "./components/axe";
import Cat from "./components/axe";

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

// const logout = (event) => {
//   event.preventDefault();
//   Auth.logout();
// };

function App() {
  let loggedInUser;
  if (Auth.loggedIn()) {
    loggedInUser = `/user/${Auth.getProfile().data.username}`;
  }
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container className="p-0 bigFont" id="mainContainer" fluid={true}>
          <Navbar
            className="border-bottom bigFont"
            bg="transparent"
            expand="lg"
            id="navbarWhole"
          >
            <Navbar.Brand
              className="d-flex justify-content-end"
              id="navbarTitle"
            >
              Challenge Axcepted
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" id="home" to="/">
                  Home
                </Link>
                {/* <LoginLink /> */}
                {/* <Link className="nav-link" to="/login">Login</Link> */}
                <>
                  {Auth.loggedIn() ? (
                    <>
                      <Link className="nav-link" to="/challengeworld">
                        Challenge World
                      </Link>
                      <Link className="nav-link" to={loggedInUser}>
                        My Challenges
                      </Link>
                    </>
                  ) : (
                    <></>
                  )}
                </>
                <LoginLink />
                {/* <Header /> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* <Header /> */}
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/me">
              <Mychallenges />
            </Route>
            <Route exact path="/user/:username">
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

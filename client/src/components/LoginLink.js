import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Nav, Modal, Tab, Button } from "react-bootstrap";
import Auth from "../utils/auth";

import SignUpForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

const LoginLink = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [showModal, setShowModal] =
    // true;
    useState(false);

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <span className="text-success">
            {Auth.getProfile().data.username} LOGGED IN
          </span>
          <Button
            variant="danger"
            // className="btn btn-small btn-primary m-2"
            onClick={logout}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          {/* <h1>LOGIN</h1> */}
          <Button
            id="login/signup"
            variant="primary"
            onClick={() => setShowModal(true)}
          >
            Login/Sign Up
          </Button>
          <Modal
            size="lg"
            show={showModal}
            onHide={() => setShowModal(false)}
            aria-labelledby="signup-modal"
          >
            {/* tab container to do either signup or login component */}
            <Tab.Container defaultActiveKey="login">
              <Modal.Header closeButton>
                <Modal.Title id="signup-modal">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Tab.Content>
                  <Tab.Pane eventKey="login">
                    <LoginForm handleModalClose={() => setShowModal(false)} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="signup">
                    <SignUpForm handleModalClose={() => setShowModal(false)} />
                  </Tab.Pane>
                </Tab.Content>
              </Modal.Body>
            </Tab.Container>
          </Modal>
        </>

        // <>
        //   <Link className="btn btn-lg btn-info m-2" to="/login">
        //     Login
        //   </Link>
        //   <Link className="btn btn-lg btn-light m-2" to="/signup">
        //     Signup
        //   </Link>
        // </>
      )}
    </div>
  );

  // return(
  //     <h1>Hello login</h1>
  // )
};

export default LoginLink;

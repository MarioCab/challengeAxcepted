import React, { useState } from "react";
import { Nav, Modal, Tab, Button } from "react-bootstrap";
import Auth from "../utils/auth";

import SignUpForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

const LoginLink = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
          <Button variant="danger" onClick={logout}>
            Logout
          </Button>
          <span> </span>
          <span className="text-success">
            Welcome Back {Auth.getProfile().data.username}!! - Post or find a
            new Challenge.
          </span>
        </>
      ) : (
        <>
          <Button variant="primary" onClick={() => setShowModal(true)}>
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
      )}
    </div>
  );
};

export default LoginLink;

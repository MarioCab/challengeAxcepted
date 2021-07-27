import React from 'react';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {Nav, Modal, Tab } from 'react-bootstrap';
import LoginLink from '../components/LoginLink'
// import SignUpForm from '../components/SignupForm';
// import LoginForm from '../components/LoginForm';

const Login = () => {
    // const [showModal, setShowModal] = 
    // true; 
    // useState(false);

return(
    <div className="text-center">
    <h1>YOU MUST LOGIN OR SIGNUP</h1>
    <LoginLink />
    {/* <Link onClick={() => setShowModal(true)}>Login/Sign Up</Link>
    <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal> */}



    </div>
)

// return(
//     <h1>Hello login</h1>
// )
};

export default Login;
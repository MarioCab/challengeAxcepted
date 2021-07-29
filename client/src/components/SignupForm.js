import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button, Alert } from "react-bootstrap";

import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // // set state for form validation
  const [validated, setValidated] = useState(false);
  // // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setValidated(true);

      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log("through path");
      Auth.login(data.addUser.token, userFormData.email); /////////////////////////////////////HERE
    } catch (err) {
      console.error(err);
      console.dir("err path");
      event.preventDefault();
      event.stopPropagation();
      setShowAlert(true);
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {error && (
          <Alert
            // dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            <br></br>
            <div className="text-center">
              Something went wrong with your signup!!
            </div>
            {/* {(error.message === 'User validation failed: email: please enter valid email address') ? <>please enter valid email address</> :  */}
            <>
              <br></br>
              <div className="text-center">Username and/or Email not available</div>
              <br></br>
              <div className="text-center">OR</div>
              <br></br>
              <div className="text-center">See Below Error Message</div>
            </>
          </Alert>
        )}
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            id="usernameSignup"
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            id="emailSignup"
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Valid Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="passwordSignup"
            type="password"
            placeholder="Password must contain at least 1 number and 1 uppercase and lowercase letter, and at least 8 characters."
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Valid Password is required! Must contain at least one number and one
            uppercase and lowercase letter, and at least 8 or more characters
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;

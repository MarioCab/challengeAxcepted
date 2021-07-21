import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button, Alert } from "react-bootstrap";

// import { createUser } from "../utils/API";
// import Auth from '../utils/auth';

import { ADD_USER } from "../utils/mutations";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // // set state for form validation
  // const [validated] = useState(false);
  // // set state for alert
  // const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = addUser({
        variables: { ...userFormData },
      });
      console.dir(data);

      window.location.reload();
    } catch (err) {
      console.error(err);
    }

    // check if form has everything (as per react-bootstrap docs)
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // try {
    //   const response = await addUser(userFormData);

    //   if (!response.ok) {
    //     throw new Error("something went wrong!");
    //   }

    //   const { user } = await response.json();
    //   console.log(user);
    //   // Auth.login(token);
    // } catch (err) {
    //   console.error(err);
    //   setShowAlert(true);
    // }

    // setUserFormData({
    //   username: "",
    //   email: "",
    //   password: "",
    // });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      setUserFormData({ ...userFormData, [name]: value });
    } else if (name === "email") {
      setUserFormData({ ...userFormData, [name]: value });
    } else if (name === "password") {
      setUserFormData({ ...userFormData, [name]: value });
    }
  };

  return (
    <>
      <Form /* noValidate validated={validated} */ onSubmit={handleFormSubmit}>
        {/* <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup (server responsebad) !
        </Alert> */}

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
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="passwordSignup"
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
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

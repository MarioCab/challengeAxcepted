import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button, Alert } from "react-bootstrap";

// import { createUser } from "../utils/API";
import Auth from '../utils/auth';

import { ADD_USER } from "../utils/mutations";

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

    if (name === "username") {
      setUserFormData({ ...userFormData, [name]: value });
    } else if (name === "email") {
      setUserFormData({ ...userFormData, [name]: value });
    } else if (name === "password") {
      setUserFormData({ ...userFormData, [name]: value });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
  
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      // console.log(data.toString());
      // console.log(error.message);
      // console.dir(data.addUser.email);
      Auth.login(data.addUser.token, userFormData.email) /////////////////////////////////////HERE

      // window.location.reload();
    } catch (err) {
      console.error(err);
      event.preventDefault();
      event.stopPropagation();
            setShowAlert(true);
    }

    // check if form has everything (as per react-bootstrap docs)

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

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;

  //   if (name === "username") {
  //     setUserFormData({ ...userFormData, [name]: value });
  //   } else if (name === "email") {
  //     setUserFormData({ ...userFormData, [name]: value });
  //   } else if (name === "password") {
  //     setUserFormData({ ...userFormData, [name]: value });
  //   }
  // };

  return (
    <>
      <Form  noValidate validated={validated}  onSubmit={handleFormSubmit}>
        {/* {Form.Control.Feedback.type=="Invalid" &&  */}
        {/* {console.dir(Form.Control)} */}
        {/* {error && console.dir(error.message)} */}
        {error && (
        <Alert
          // dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          <br></br><div className="text-center">Something went wrong with your signup!!</div> 
          {/* {(error.message === 'User validation failed: email: please enter valid email address') ? <>please enter valid email address</> :  */}
          <><br></br><div className="text-center">Username or Email not available</div><br></br><div className="text-center">OR</div><br></br><div className="text-center">See Below Error Message</div></>
          {/* } */}
          {/* ({error.message}) */}
        </Alert>
        )}
            {/* {console.log(error.message)} */}


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
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
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
            placeholder="Your password"
            name="password"
            // minlength='4'
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            // title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Valid Password is required! Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters
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

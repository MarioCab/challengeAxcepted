import React, { useState } from "react";
// import { Form, Row, Col, Button } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { COMMENT_POST } from "../../utils/mutations";
// import { useMutation, useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
// import { QUERY_ME } from "../../utils/queries";
// import { Router } from "react-router-dom";
// import { useHistory } from "react-router";
// import AuthService from "../../utils/auth";

const CommentForm = ({ post, commenter }) => {
  console.log(post);
  console.log(this);

  console.log(commenter);

  // const { loading, me } = useQuery(QUERY_ME);
  // console.log(me);

  const [formState, setFormState] = useState({
    commenter: commenter,
    comment: "",
    postId: post._id,
  });
  const [
    addComment,
    {
      error,
      // data
    },
  ] = useMutation(COMMENT_POST);
  if (error) {
    console.log(error);
  }
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(formState);
    setFormState({
      ...formState,
      [name]: value,
      commenter: commenter,
      postId: post._id,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addComment({
        variables: { ...formState },
      });
    } catch {}
    window.location.reload();
  };
  return (
    <div>
      <Form onSubmit={handleFormSubmit} className="text-center">
        <Form.Group
          className="mb-3 text-center col-12"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label className="col-2 text-dark">LEAVE A COMMENT</Form.Label>  {/* REMOVE TEXT DARK CLASS FOR FINAL STYLING  */}
          <input
            className="form-input col-4"
            name="comment"
            type="text"
            value={formState.comment}
            onChange={handleChange}
          />
          <span className="col-4">    </span>
        <Button key={post._id} variant="primary" type=" submit" className="col-2">
          Submit Comment
        </Button>

        </Form.Group>
        {/* <Button key={post._id} variant="primary" type=" submit">
          Submit Comment
        </Button> */}
      </Form>
    </div>
  );
};

export default CommentForm;

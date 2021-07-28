import React from "react";
import { useHistory } from "react-router";
import {useMutation} from "@apollo/client";
import { Form, Button, Alert } from "react-bootstrap";
import AuthService from "../../utils/auth";
import COMMENT_POST from "../../utils/mutations"

const PostList = ({ posts }) => {
  const commenter = AuthService.getProfile().data.username;
  console.log(commenter);
  let history = useHistory();
  // const loadUser = () => {
  //   history.push("/user/" + `${post.username}`);
  // };
  if (!posts.length) {
    return <h3>No Challenges Yet</h3>;
  } else {
    // let history = useHistory();
    const loadUser = (post) => {
      return "/user/" + `${post.username}`;
      
    // const loadCommenter = (comment) => {
    //   return "/user/" + `${comment.commenter}`
    // }
    };
    return (
      <div>
        <h3> Hello </h3>
        {posts &&
          posts.map((post) => (
            <div key={post._id} className="card mb-3">
              <h4 className="card-header bg-primary text-light p-2 m-0">
                {post.title} <br />
                <span style={{ fontSize: "1rem" }}>{post.body} </span>
              </h4>
              <div className="card-body bg-light p-2">
                <p>{post.challenge}</p>
              </div>
              <div className="card-body bg-light p-2">
                <a href={loadUser(post)}>{post.username}</a>
              </div>
              {post.comments && 
                post.comments.map((comment) =>(
                  <>
                  <div>
                    <a href={`/user/${comment.commenter}`}>{comment.commenter}</a>
                    <p>{comment.comment}</p>
                  </div>
                </>
                )

                )
              }
                              <>
                <Form>
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group> */}
                <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>LEAVE A COMMENT</Form.Label>
                  <Form.Control as="textarea" className= "w-50"rows={2} />
                </Form.Group>
                <Button key={post._id} variant="primary" >{post._id}</Button>
              </Form>
              </>


            </div>
          ))}
      </div>
    );
  }
};

// const Footer = () => {
//   return <h1>Footer Component</h1>;
// };

export default PostList;

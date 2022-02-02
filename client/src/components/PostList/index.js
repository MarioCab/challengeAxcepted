import React from "react";
// import { useHistory } from "react-router";
// import { useMutation } from "@apollo/client";
// import { Form, Button, Alert } from "react-bootstrap";
import CommentForm from "../CommentForm";
import AuthService from "../../utils/auth";
import Auth from "../../utils/auth";

const PostList = ({ posts }) => {
  let userProf;
  if (Auth.loggedIn()) {
    userProf = AuthService.getProfile().data.username;
  }

  // const user = userProf.username;
  // console.log(userProf);
  // console.log(username);
  // let history = useHistory();
  // const loadUser = () => {
  //   history.push("/user/" + `${post.username}`);
  // };
  if (!posts.length) {
    return <h3>No Challenges Yet</h3>;
  } else {
    // let history = useHistory();
    const loadUser = (post) => {
      return `/user/${post.username}`;

      // const loadCommenter = (comment) => {
      //   return "/user/" + `${comment.commenter}`
      // }
    };
    // let comm;
    // let c;
    return (
      <div id="wholePost">
        <br />
        <h3> CHALLENGES AWAITING!! </h3>
        <br />
        {posts &&
          posts.map((post) => (
            <div key={post._id} className="card mb-3 mainPostCard">
              <h4 className="card-header p-2 m-0">
                {post.title} <br />
                <span style={{ fontSize: "1rem" }}>{post.body} </span>
                <hr></hr>
                <span style={{ fontSize: "1rem" }}>{post.location} </span>
              </h4>
              <div className="card-body p-2">
                <p>{post.challenge}</p>
              </div>
              <div className="card-body p-2">
                <a href={loadUser(post)}>{post.username}</a>
              </div>
              <>
                {Auth.loggedIn() && (
                  <CommentForm post={post} commenter={userProf} />
                )}

              </>
              {post.comments && <h3 id="commentHead">Comments:</h3>}
              {post.comments &&
                [...post.comments].reverse().map((comment) => (
                  <>
                    <div>
                      {/* <h3 id="commentHead">Comments:</h3> */}
                      <div id="comments">
                        <a href={`/user/${comment.commenter}`}>
                          {comment.commenter}
                        </a>
                        <p className="text-dark">{comment.comment}</p>{" "}
                        {/* REMOVE TEXT DARK CLASS FOR FINAL STYLING  */}
                      </div>
                    </div>
                  </>
                ))}
              {/* <>
              {Auth.loggedIn() && (
                <CommentForm post={post} commenter={userProf} />)}
              </> */}
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

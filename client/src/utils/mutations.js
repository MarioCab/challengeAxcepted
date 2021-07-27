import { gql } from "@apollo/client";

const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      _id
    }
  }
`;

const ADD_POST = gql`
  mutation addPost(
    $title: String!
    $body: String
    $location: String
    $userId: String
    $username: String
  ) {
    addPost(
      title: $title
      body: $body
      location: $location
      userId: $userId
      username: $username
    ) {
      _id
      userId
    }
  }
`;
const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export { ADD_USER, ADD_POST, LOGIN_USER };

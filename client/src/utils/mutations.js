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
    $challenge: String
    $dateCreated: String
    $location: String
  ) {
    addPost(
      title: $title
      body: $body
      challenge: $challenge
      dateCreated: $dateCreated
      location: $location
    ) {
      _id
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

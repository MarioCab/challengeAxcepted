import { gql } from "@apollo/client";

const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      posts {
        title
        body
      }
    }
  }
`;

const QUERY_USER = gql`
  query getUser($username: String) {
    getUser(username: $username) {
      _id
      username
      email
      posts {
        _id
        title
        body
        location
      }
    }
  }
`;

const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        title
        body
        location
      }
    }
  }
`;

const QUERY_POSTS = gql`
  query allPosts {
    posts {
      _id
      title
      body
      challenge
      dateCreated
      location
      userId
    }
  }
`;

const QUERY_GET_POST = gql`
  query getPost($id: ID!) {
    getPost(_id: $id) {
      title
      body
      location
      userId
    }
  }
`;

export { QUERY_USERS, QUERY_POSTS, QUERY_ME, QUERY_GET_POST, QUERY_USER };

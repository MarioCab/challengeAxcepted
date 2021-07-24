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

const QUERY_ME = gql`
  query getUser($email: String!) {
    getUser(email: $email) {
      _id
      username
      email
      posts {
        _id
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

export { QUERY_USERS, QUERY_POSTS, QUERY_ME };

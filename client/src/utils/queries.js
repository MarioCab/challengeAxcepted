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

const QUERY_POSTS = gql`
  query allPosts {
    posts {
      _id
      title
      body
      challenge
      dateCreated
      location
      issuer {
        _id
        username
      }
    }
  }
`;

export { QUERY_USERS, QUERY_POSTS };

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    _id: ID
    title: String
    body: String
    challenge: String
    dateCreated: String
    location: String
    issuer: User
  }

  type User {
    _id: ID
    username: String
    password: String
    email: String
    posts: [Post]
  }

  type Query {
    posts: [Post]
    users: [User]
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): User
    addPost(
      title: String!
      body: String
      challenge: String
      dateCreated: String
      location: String
    ): Post
    deletePost(_id: ID!): Post
  }
`;

module.exports = typeDefs;

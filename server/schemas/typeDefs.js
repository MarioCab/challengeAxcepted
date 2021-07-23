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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    posts: [Post]
    post(_id: ID!): Post
    users: [User]
    user(username: String!): User
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

    login(email: String!, password: String!): Auth

    deletePost(_id: ID!): Post

    updatePost(
      postId: ID!
      title: String!
      body: String
      challenge: String
      dateCreated: String
      location: String
    ): Post
  }
`;

module.exports = typeDefs;

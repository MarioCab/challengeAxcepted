const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    _id: ID
    title: String
    body: String
    challenge: String
    dateCreated: String
    location: String
    userId: String
  }

  type User {
    _id: ID
    username: String
    password: String
    email: String
    posts: [Post]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    posts: [Post]
    post(_id: ID!): Post
    users: [User]
    getUser(_id: ID!): User
    me(_id: ID!): User
    auth: Auth
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): User

    addPost(title: String, body: String, location: String, userId: String): Post

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

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
    username: String
    comments: [Comment]
  }
  type Comment {
    _id: ID
    postId: String
    commenter: String
    postDate: String
    comment: String
  }
  input createComment {
    _id: ID
    commenter: String
    postDate: String
    comment: String
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
    getPost(id: ID!): Post
    users: [User]
    getUser(username: String): User
    me: User
    auth: Auth
    comments: [Comment]
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth

    addPost(
      title: String
      body: String
      location: String
      userId: String
      username: String
    ): Post

    login(email: String!, password: String!): Auth

    deletePost(_id: ID!): Post

    commentPost(
      postId: ID
      commenter: String
      postDate: String
      comment: String
    ): Post

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

const { Post, User } = require("../models");

const resolvers = {
  Query: {
    posts: async () => {
      return await Post.find({}).populate("issuer");
    },
    users: async () => {
      return await User.find({}).populate("posts");
    },
  },

  Mutation: {
    addUser: async (parent, { username, password, email }) => {
      return User.create({ username, password, email });
    },
    addPost: async (
      parent,
      { title, body, challenge, dateCreated, location }
    ) => {
      return Post.create({ title, body, challenge, dateCreated, location });
    },
  },
};
module.exports = resolvers;

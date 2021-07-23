const { Post, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No User Found");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Password is incorrect");
      }

      const token = signToken(user);

      return { token, user };
    },
    deletePost: async (parent, { _id }) => {
      return Post.findOneAndDelete({ _id });
    },
    updatePost: async (
      parent,
      { postId, title, body, challenge, dateCreated, location }
    ) => {
      return Post.findOneAndUpdate(
        {
          _id: postId,
        },
        {
          title: title,
          body: body,
          challenge: challenge,
          dateCreated: dateCreated,
          location: location,
        },
        {
          new: true,
        }
      );
    },
  },
};
module.exports = resolvers;

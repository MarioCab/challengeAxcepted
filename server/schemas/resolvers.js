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

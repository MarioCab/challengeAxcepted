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
};
module.exports = resolvers;

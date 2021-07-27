const { Post, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    posts: async () => {
      return Post.find({}).populate("issuer").populate("comments");
    },
    getPost: async (parent, { id }) => {
      return Post.findOne({ _id: id });
    },
    users: async () => {
      return User.find({}).populate("posts");
    },
    getUser: async (parent, { username }) => {
      return User.findOne({ username }).populate("posts");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("posts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    auth: async (parent, { _id }) => {
      return User.findOne({});
    },
  },

  Mutation: {
    addUser: async (parent, { username, password, email }) => {
      const user = await User.create({ username, password, email });
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, { title, body, location, userId, username }) => {
      const post = await Post.create({
        title,
        body,
        location,
        userId,
        username,
      });

      await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { posts: post._id } }
      );

      return post;
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
    commentPost: async (parent, {postId, commenter, postDate, comment}) => {
      return Post.findOneAndUpdate({
        _id: postId,
      },
      {$push:
         {comments: {"commenter": commenter, "postDate": postDate, "comment": comment}
        }        
      },
      {new: true}
      )
    }
  }
};
module.exports = resolvers;

// const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

// enum is basically a selector for strings, i figured we can use it to (in the future) create a dropdown menu for challenges when being created

const postSchema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  // challenge: {
  //   type: String,
  //   // enum: ["Foot Race", "Drink off", "Axe Throwing"],
  // },
  // dateCreated: {
  //   type: Date,
  //   default: Date.now,
  // },
  location: {
    type: String,
  },
  userId: {
    type: String,
  },
  username: {
    type: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

// thinking we maybe use an api to call a google maps to a specific area where the challange will be held. Also trying to figure out how to allow users to select a date and time for the challenge, maybe that doesnt even need to go into the schema. Prob doesnt

const Post = model("Post", postSchema);

module.exports = Post;

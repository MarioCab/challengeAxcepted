// const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

// We need to add bcrypt to the password

const userSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;

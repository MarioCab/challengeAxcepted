// const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

// We need to add bcrypt (bcryptjs) to the password
const bcrypt = require('bcryptjs');


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
},
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }

);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model("User", userSchema);

module.exports = User;

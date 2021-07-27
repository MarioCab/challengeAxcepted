// const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

// We need to add bcrypt (bcryptjs) to the password
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: [true, 'USERNAME ALREADY EXISTS'],
      trim: true,
    },
    password: {
      type: String,
      required: true,
      // minlength: [4, 'password must be longer']
      match: [/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, 'Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters']
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/, 'please enter valid email address']
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

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
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

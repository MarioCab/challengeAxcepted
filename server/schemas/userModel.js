const mongoose = require("mongoose");

// We need to add bcrypt to the password

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  id: {
    type: Number,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);

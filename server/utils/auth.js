const jwt = require("jsonwebtoken");

const secret = "what is the first rule of fight club";
const expiration = "2h";

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

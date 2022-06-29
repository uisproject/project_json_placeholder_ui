const jwt = require("jsonwebtoken");

const generateToken = (username) => {
  return jwt.sign({ username }, process.env.JWT_TOKEN, {
    expiresIn: "24h",
  });
};

const refreshToken = (username) => {
  return jwt.sign({ username }, process.env.JWT_REFRESH_TOKEN);
};

const parseTokenOnly = (token = "") => {
  return token.split(" ")[1];
};

module.exports = { generateToken, refreshToken, parseTokenOnly };

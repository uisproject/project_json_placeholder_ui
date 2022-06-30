const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  return jwt.sign({ data }, process.env.JWT_TOKEN, {
    expiresIn: "24h",
  });
};

const refreshToken = (data) => {
  return jwt.sign({ data }, process.env.JWT_REFRESH_TOKEN);
};

const parseTokenOnly = (token = "") => {
  return token.split(" ")[1];
};

module.exports = { generateToken, refreshToken, parseTokenOnly };

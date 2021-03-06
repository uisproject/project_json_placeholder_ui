const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { generateToken, refreshToken } = require("../utils/generateToken");
const { userData } = require("../data/data");

let storedRefreshToken = []; // alternative to store refresh token

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // check if the user is validated
  if (
    !userData.find((user) => user.username === username) ||
    password !== "admin"
  ) {
    res.status(401);
    throw new Error("Username or Password is invalid");
  }
  const user = userData.find((user) => user.username === username);
  const storedTokenData = {
    username: username,
    userId: user.userId,
  };

  const getRefreshToken = refreshToken(storedTokenData);

  storedRefreshToken.push(getRefreshToken);

  return res.status(200).json({
    userData: user,
    tokenType: "Bearer",
    accessToken: generateToken(storedTokenData),
    refreshToken: getRefreshToken,
  });
});

const generateNewToken = (req, res) => {
  const { refreshToken } = req.body;

  console.log(storedRefreshToken);
  // console.log(refreshToken);

  // check if stored refresh token is null
  if (storedRefreshToken.length <= 0) {
    res.status(401);
    throw new Error("You are unauthorized to access the content");
  }

  // check if the token is matched with the stored token
  if (!storedRefreshToken.includes(refreshToken)) {
    res.status(403);
    throw new Error(
      "You are prohibited to access the content, please re-login"
    );
  }
  // verify the token
  jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (err, user) => {
    // check if something wrong with the token
    if (err) {
      res.status(401);
      throw new Error(
        "You are prohibited to access the content, please re-login"
      );
    }

    console.log("new refresh token is generated");

    res.status(200).json({
      username: "admin",
      tokenType: "Bearer",
      accessToken: generateToken(user),
    });
  });
};

module.exports = { authUser, generateNewToken };

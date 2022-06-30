const jwt = require("jsonwebtoken");

const secureAPI = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];

  try {
    const verifyToken = jwt.verify(token, process.env.JWT_TOKEN);
    req.userInfo = verifyToken;
  } catch (e) {
    if (e.message === "jwt expired") {
      res.status(403);
      return next(new Error("Your session has been expired please relogin"));
    }
    res.status(500);
    return next(new Error("Something is wrong, please relogin"));
  }
  next();
};

module.exports = secureAPI;

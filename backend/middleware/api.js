const secureAPI = (req, res, next) => {
  console.log("is checking");

  next();
};

module.exports = secureAPI;

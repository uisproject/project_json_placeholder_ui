const asyncHandler = require("express-async-handler");

const { photoData, albumData, userData } = require("../data/data");

const getUserData = asyncHandler(async (req, res) => {
  res.send("hi");
});

module.exports = { getUserData };

const express = require("express");
const router = express.Router();
const secureAPI = require("../middleware/api");

const { getUserData } = require("../controllers/profileController");

// v2

router.route("/v2/profile").get(secureAPI, getUserData);

module.exports = router;

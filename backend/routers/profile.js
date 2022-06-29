const express = require("express");
const router = express.Router();
const secureAPI = require("../middleware/api");

const { getUserData } = require("../controllers/profileController");

router.route("/v2/profile").get(secureAPI, getUserData);

module.exports = router;

const express = require("express");
const router = express.Router();

// Imports routes
const posts = require("./posts");
const auth = require("./auth");
const profile = require("./profile");

router.use(auth);
router.use(posts);
router.use(profile);

module.exports = router;

const express = require("express");
const router = express.Router();

// Imports routes
const posts = require("./posts");
const auth = require("./auth");

router.use(auth);
router.use(posts);

module.exports = router;

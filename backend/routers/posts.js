const express = require("express");
const {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postsController");
const secureAPI = require("../middleware/api");

const router = express.Router();

// v2
router.route("/v2/posts").get(secureAPI, getPosts).post(secureAPI, createPost);

module.exports = router;

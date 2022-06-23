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

// v1

router.get("/v1/posts", getPosts);
router.get("/v1/posts/:id", getSinglePost);

// v2
router.route("/v2/posts").post(secureAPI, createPost);
router
  .route("/v2/posts/:id")
  .put(secureAPI, updatePost)
  .delete(secureAPI, deletePost);

module.exports = router;

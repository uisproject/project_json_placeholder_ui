const express = require("express");
const {
  authUser,
  generateNewToken,
} = require("../controllers/authControllers");

const router = express.Router();

router.post("/v1/token", authUser);
router.post("/v1/refreshToken", generateNewToken);

module.exports = router;

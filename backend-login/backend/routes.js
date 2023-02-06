const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("./userController");
// const { protect } = require("./auth");

router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;

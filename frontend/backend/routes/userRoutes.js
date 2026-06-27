const express = require("express");

const router = express.Router();

const {
    registerUser,
    login
} = require("../controllers/userController");

// User Registration
router.post("/register", registerUser);

// User Login
router.post("/login", login);

module.exports = router;
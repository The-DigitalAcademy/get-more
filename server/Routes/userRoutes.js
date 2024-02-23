const express = require("express");
const router = express.Router();
const { register, login, admin } = require("../Controllers/auth");

router.post("/login", login);

router.post("/register", register);

router.post("/admin", admin);

module.exports = router;

const express = require("express");
const router = express.Router();
const { register, login, admin, editProfile } = require("../Controllers/auth");

router.post("/login", login);

router.post("/register", register);

router.post("/admin", admin);

router.put("/edit/:id", editProfile);

module.exports = router;

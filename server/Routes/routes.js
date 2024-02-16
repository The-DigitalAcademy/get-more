const express = require("express");
const router = express.Router();
const { signup, signin, addAdmin } = require("../Controllers/auth");


router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.post("/addAdmin", addAdmin);

module.exports = router;

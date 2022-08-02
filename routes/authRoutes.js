const express = require("express");
const authController = require("./../controllers/authController");

const router = express.Router();


router.route("/signup")
    .post();

router.route("/login")
    .post();


module.exports = router;
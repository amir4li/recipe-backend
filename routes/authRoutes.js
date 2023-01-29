const express = require("express");
const {
    register,
    login,
    getMe,
    updateDetails,
    updatePassword,
    logout
} = require("../controllers/authController");
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.put("/updateDetails", protect, updateDetails);
router.put("/updatepassword", protect, updatePassword);
router.get("/logout", logout);

module.exports = router;


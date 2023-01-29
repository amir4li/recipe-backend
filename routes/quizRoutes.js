const express = require("express");
const quizController = require("./../controllers/quizController");
const { protect, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();


router.route("/")
    .get(quizController.getAllQuiz)
    .post(protect, authorize("admin"), quizController.createQuiz);

router.route("/:id")
    .get(quizController.getQuiz)
    .put(protect, authorize("admin"), quizController.updateQuiz)
    .delete(protect, authorize("admin"), quizController.deleteQuiz);

module.exports = router;


const express = require("express");
const apiController = require("./../controllers/apiController");

const router = express.Router();


router.route("/")
.get(apiController.getAllQuiz)
.post(apiController.createQuiz);

router.route("/:id")
.get(apiController.getQuiz)
.patch(apiController.updateQuiz)
.delete(apiController.deleteQuiz);

module.exports = router;


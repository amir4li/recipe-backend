mongoose = require("mongoose");


const quizSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, "A quiz must have a category"]
    },
    type: {
        type: String,
        required: [true, "A quiz must have a type"]
    },
    difficulty: {
        type: String,
        required: [true, "A quiz must have a difficulty"]
    },
    question: {
        type: String,
        required: [true, "A quiz must have a question"],
        unique: true
    },
    correct_answer: {
        type: String,
        required: [true, "A quiz must have a correct answer"]
    },
    incorrect_answers: [String]
});

const Quiz = mongoose.model("Quiz", quizSchema)
module.exports = Quiz


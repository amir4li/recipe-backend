const { query } = require("express");
const Quiz = require("../models/apiModel");

exports.getAllQuiz = async (req, res)=> {
    try {
        // BUILD QUERY

        const query = Quiz.find(req.query).limit(req.query.amount);

        // EXECUTE QUERY
        const quizzes = await query;

        // SEND RESPONSE
        console.log("Data sent successfully");
        res.status(200).json({
            status: "success",           
            results: quizzes.length,
            data: {
                quizzes
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    }
};


exports.createQuiz = async (req, res)=> {
    try {
        const newQuiz = await Quiz.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                quiz: newQuiz
            }
        });

    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Invalid data send!"
        });
    };
};


exports.getQuiz = async (req, res)=> {
    try {
        const quiz = await Quiz.findById(req.params.id);

        console.log("Data sent successfully");

        res.status(200).json({
            status: "success",
            data: {
                quiz
            }
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        });
    };
};


exports.updateQuiz = async (req, res)=> {
    try {
        const quiz = Quiz.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        console.log("Data updated successfully");

        res.status(200).json({
            status: "success",
            data: {
                quiz
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        });
    };
};


exports.deleteQuiz = async (req, res)=> {
    try {
        await Quiz.findByIdAndDelete(req.params.id);

        console.log("Data deleted successfully");

        res.status(204).json({
            status: "success",
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        });
    };
};


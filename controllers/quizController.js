const Quiz = require("../models/QuizModel");
const asyncHandler = require("../middlewares/asyncMiddleware");
const ErrorResponse = require("../utils/errorResponse");


// @desc      Get all quizzes
// @route     GET /api/v1/quizzes
// @access    Public
exports.getAllQuiz = asyncHandler(async (req, res)=> {
    // BUILD QUERY
    const query = Quiz.find(req.query).limit(req.query.amount);

    // EXECUTE QUERY
    const quizzes = await query;

    // SEND RESPONSE
    console.log("Data sent successfully");
    res.status(200).json({
        status: "success",           
        results: quizzes.length,
        data: quizzes
    });
});


// @desc      Get single quiz
// @route     GET /api/v1/quizzes/:id
// @access    Public
exports.getQuiz = asyncHandler(async (req, res, next)=> {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
        return next(new ErrorResponse(`Quiz not found with id of ${req.params.id}`, 404));
    };

    res.status(200).json({
        status: "success",
        data: quiz
    });
});


// @desc      Create new quiz
// @route     POST /api/v1/quizzes/:id
// @access    Private
exports.createQuiz = asyncHandler(async (req, res)=> {
    const newQuiz = await Quiz.create(req.body);

    res.status(201).json({
        status: "success",
        msg: "New Quiz has been created",
        data: newQuiz
    });
});


// @desc      Update quiz
// @route     PUT /api/v1/quizzes/:id
// @access    Private
exports.updateQuiz = asyncHandler(async (req, res, next)=> {
    let quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
        return next(new ErrorResponse(`Quiz not found with id of ${req.params.id}`, 404));
    };

    quiz = await Quiz.findOneAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        status: "success",
        msq: `Update quiz ${req.params.id}`,
        data: quiz
    });
});


// @desc      Delete quiz
// @route     DELETE /api/v1/quizzes/:id
// @access    Private
exports.deleteQuiz = asyncHandler(async (req, res, next)=> {
    let quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
        return next(new ErrorResponse(`Quiz not found with id of ${req.params.id}`, 404));
    };

    quiz.remove();

    res.status(204).json({
        status: "success",
        data: {}
    });
});


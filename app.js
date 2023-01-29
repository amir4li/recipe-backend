const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorMiddleware");
const quizRouter = require("./routes/quizRoutes");
const authRouter = require("./routes/authRoutes");

const app = express();
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
};

// Enable cors
app.use(cors());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent xss attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100
});
app.use(limiter);

// prevent http param polution
app.use(hpp());


// Routes
app.use("/api/v1/quizzes", quizRouter);
app.use("/api/v1/auth", authRouter);

// Error handling middleware
app.use(errorHandler);


module.exports = app;


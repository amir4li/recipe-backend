const express = require("express");
const quizRouter = require("./routes/quizRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());


// Routes
app.use("/api", quizRouter);
app.use("/user", userRouter);





module.exports = app;



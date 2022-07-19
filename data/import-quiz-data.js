const dotenv = require('dotenv');
const mongoose = require("mongoose");
const fs = require("fs");
const Quiz = require("./../models/apiModel");

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose.connect(DB, { useNewUrlParser: true })
.then(() => {console.log("DB connection successful! on importData...")});


// Read json file
const quizzes = JSON.parse(fs.readFileSync(`${__dirname}/quizData.json`, "utf-8"));

// Import data into db
const importData = async ()=> {
    try {
        await Quiz.create(quizzes);
        console.log("Data successfully loaded");
    } catch (err) {
        console.log(err);
    };
};

// module.exports = importData;
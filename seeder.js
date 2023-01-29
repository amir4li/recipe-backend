const dotenv = require('dotenv');
const mongoose = require("mongoose");
const fs = require("fs");
const Quiz = require("./models/QuizModel");

dotenv.config({ path: './config/config.env' });

// Connect to DB
const DB = process.env.MONGO_URI
mongoose.set('strictQuery', false);
mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(
    (conn) => {console.log(`MongoDB Connected: ${conn.connection.host}`)}
);


// Read json file
const quizzes = JSON.parse(fs.readFileSync(`${__dirname}/_data/quizData.json`, "utf-8"));

// Import data into db
const importData = async ()=> {
    try {
        await Quiz.create(quizzes);
        console.log("Data successfully loaded...");
        process.exit();
    } catch (err) {
        console.log(err);
    };
};

// Delete data
const deleteData = async ()=> {
    try {
        await Quiz.deleteMany();
        console.log("Data Destroyed...");
        process.exit();
    } catch (err) {
        console.log(err)
    };
};

if (process.argv[2] === "-i") {
    console.log("importing...")
    importData();
} else if (process.argv[2] === "-d") {
    console.log("deleting...")
    deleteData();
};


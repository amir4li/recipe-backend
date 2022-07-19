const express = require("express");
const apiRouter = require("./routes/apiRoutes");
const importData = require("./data/import-quiz-data");

const app = express();


app.use(express.json());

app.use((req, res, next)=> {
    req.requestTime = new Date().toISOString();
    next();
});

// importData();

// Routes
app.use("/api", apiRouter);

module.exports = app;





// app.post("/", async (req, res)=> {
//     const category = req.body.category;
//     console.log(category)

//     const url = "https://opentdb.com/api.php?amount=07&category=18"

//     // axios.get(url)
//     // .then(response => {
//     //     const data = response.data;
//     //     res.render("game", {
        
//     //     });

        
//     // });
//     axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple', {
//         'Access-Control-Allow-Origin': '*',
//     })
//         .then(() => {
//             response.json();
//             console.log(response);
//         })
//         // .then(res => {
//         //     let id = 0;
//         //     data = res.results.map(item => {
//         //         // adding correct ans into options
//         //         const options = [{
//         //             text: item.correct_answer,
//         //             isCorrect: true
//         //         }];

//         //         // adding all incorrect answers into options
//         //         item.incorrect_answers.map(ans => {
//         //             options.push({
//         //                 text: ans,
//         //                 isCorrect: false
//         //             })
//         //         });

//         //         const resposne = {
//         //             id: id++,
//         //             question: item.question,
//         //             options: options
//         //         }

//         //         // making simple object
//         //         return resposne;
//         //     });
//         //     console.log(data);
//         //     attachHandlers();
//         //     generateQuestion(currentQuestion);
        
// });

// // const port = process.env.PORT;
// // app.listen(port, ()=> {
// //     console.log(`Server is running on port ${port}...`);
// // });



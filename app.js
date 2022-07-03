const express = require("express");
const path = require("path");
const ejs = require("ejs");
const dotenv = require("dotenv");

const app = express();
dotenv.config({ path: './config.env' });

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


app.get("/login", (req, res)=> {
    res.render("login");
});

app.get("/signup", (req, res)=> {
    res.render("signup");
});


const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}...`);
});



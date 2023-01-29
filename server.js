const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const connectDB = require("./config/db");
const app = require('./app');

// Connecting to Database
connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});


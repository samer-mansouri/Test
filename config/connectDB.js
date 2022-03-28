// 1- require mongoose
const mongoose = require("mongoose");
//2- connect to DB
const connectDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/testmas')
    .then(console.log("the database is connected..."))
    .catch((err) => {});
};
module.exports = connectDB;

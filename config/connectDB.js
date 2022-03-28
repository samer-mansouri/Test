// 1- require mongoose
const mongoose = require("mongoose");
//2- connect to DB
const connectDB = () => {
  mongoose
    .connect('mongodb://localhost:27017/testmas', { useNewUrlParser: true }, (err) => {
      if (!err) { console.log('MongoDB Connection Succeeded.') }
      else { console.log('Error in DB connection : ' + err) }
  });
};
module.exports = connectDB;

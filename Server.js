// 1-require express
const express = require("express");
var cors = require('cors');
var morgan = require('morgan');

// 2- instance of express
app = express();
//3- port
const port = 5000;
// 4- create server
app.listen(port, (error) =>
  error
    ? console.log("Can not run server!!!")
    : console.log(`Server is running on port ${port}`)
);
// 5- require and config dotenv
require("dotenv").config();
// 6- connect the DB
const connectDB = require("./config/connectDB");
connectDB();
// 7- bodyparser middleware
app.use(express.json());
app.use(cors())
app.use(morgan('dev'));
// 8- require routes
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const router = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const commentRouter = require("./routes/comment");
app.use("/api/auth/", authRouter);
app.use("/api/user/", userRouter);
app.use("/api/products/", router);
app.use("/api/cart/", cartRouter);
app.use("/api/", orderRouter);
app.use("/api/comment/", commentRouter);

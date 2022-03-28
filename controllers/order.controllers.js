const Order = require("../model/Order");
const Cart = require("../model/Cart");
const User = require("../model/User");

module.exports.getOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const listProducts = await Order.findOne({ _id: id });

    res.status(200).send({ msg: "I find  the order.....", listProducts });
  } catch (error) {
    res
      .status(400)
      .send({ msg: " Can not get order with this id !!! ", error });
  }
};
module.exports.getOrders = async (req, res) => {
  try {
    const listProducts = await Order.find();
    res
      .status(200)
      .send({ msg: "This is the list of orders.....", listProducts });
  } catch (error) {
    res.status(400).send({ msg: " Can not get all  orders !!! ", error });
  }
};
module.exports.checkout = async (req, res) => {
  try {
    const userId = req.params.id;
    const { source } = req.body;
    let cart = await Cart.findOne({ userId });
    console.log(cart);

    let user = await User.findOne({ _id: userId });
    const email = user.email;

    const order = await Order.create({
      userId,
      user,
      items: cart.items,
      bill: cart.bill,
    });
    const data = await Cart.findByIdAndDelete({ _id: cart.id });
    return res.status(201).send(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const { _id } = req.params;

    await Order.deleteOne({ _id });

    res.status(200).send({ msg: "Order deleted succ ..." });
  } catch (error) {
    res.status(400).send({ msg: "No Order with this id to delete ..." });
  }
};

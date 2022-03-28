const jwt = require("jsonwebtoken");
const User = require("../model/User");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(400).send({ msg: "Unauthorized" });
    }

    const decoded = await jwt.verify(token, process.env.secretOrKey);
    console.log(decoded);
    const user = await User.findOne({ _id: decoded._id }).select("-password");
    if (!user) {
      return res.status(400).send({ msg: "Unauthorized" });
    }

    req.user = user;
    console.log(req.user);
    next();
  } catch (error) {
    return res.status(500).send({ msg: "Unauthorized" });
  }
};

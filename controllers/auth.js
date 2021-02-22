const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");

const register = asyncErrorWrapper(async (req, res, next) => {
  // POST DATA
  const name = "Fatih Tufan";
  const email = "ftufan@gmail.com";
  const password = "123456";

  const user = await User.create({
    name,
    email,
    password,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
  
});

module.exports = {
  register,
};

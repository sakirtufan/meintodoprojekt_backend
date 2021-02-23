const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");

const register = asyncErrorWrapper(async (req, res, next) => {
  // POST DATA
  const { name,email,password,role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role
  });

  const token = user.generateJwtFromUser();

  console.log(token);

  res.status(200).json({
    success: true,
    data: user,
  });
  
});

module.exports = {
  register,
};

const User = require("../models/User");

const register = async (req, res, next) => {
  // POST DATA
  const name = "Fatih Tufan";
  const email = "ftufan@gmail.com";
  const password = "123456";

  // try catch
  try {
    // async await
    const user = await User.create({
      name,
      email,
      password,
    });
  
    res.status(200).json({
      success: true,
      data : user
    });
    
  } catch (error) {
    return next(error);
  }

};

module.exports = {
  register,
};

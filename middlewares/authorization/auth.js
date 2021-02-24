const jwt = require("jsonwebtoken");
const CustomError = require("../../helpers/error/CustomError")
const asyncErrorWrapper = require("express-async-handler")
const { isTokenIncluded,getAccessTokenFromRequest } = require("../../helpers/authorization/tokenHelpers");
const User = require("../../models/User")
const Todo = require("../../models/Todo")


const getAccessToRoute = (req, res, next) => {
  // Token
  const { JWT_SECRET_KEY } = process.env;
  if (!isTokenIncluded(req)) {
    // 401 Unauthorized
    // 403 Forbidden
    return next(
      new CustomError("You are not authorized to access this route", 401)
    );
  }

  const accessToken = getAccessTokenFromRequest(req);
  jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return next(new CustomError("You are not authorized to access this route",401))
    }
    req.user = {
      id: decoded.id,
      name: decoded.name
    }
    
    next();
  })
};

const getTodoOwnerAccess = asyncErrorWrapper(async (req,res,next) => {

  const userId = req.user.id;
  const todoId = req.params.id;
  const todo = await Todo.findById(todoId);
  
  if (todo.user != userId) {
      return next(new CustomError("Only owner can handle this operation",403));
  }
  return next(); 
});

module.exports = {
  getAccessToRoute,
  getTodoOwnerAccess
};

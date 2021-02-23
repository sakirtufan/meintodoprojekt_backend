const jwt = require("jsonwebtoken");
const CustomError = require("../../helpers/error/CustomError");
const { isTokenIncluded,getAccessTokenFromRequest } = require("../../helpers/authorization/tokenHelpers");

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

module.exports = {
  getAccessToRoute,
};

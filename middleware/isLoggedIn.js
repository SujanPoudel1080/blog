const appError = require("../utils/appError")
const { getTokenFromHeader } = require("../utils/getTokenFromHeader")
const verifyToken = require('../utils/verifyToken')

const isLoggedIn = (req, res, next) => {

    const token = getTokenFromHeader(req)
    const verifiedUser = verifyToken(token)
    req.userAuth = verifiedUser.id
    if (!verifiedUser) {
       return next(appError("invalid token! please try again", 500));
    }
    else {
        next();
    }

}

module.exports = isLoggedIn

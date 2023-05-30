const User = require('../../model/User/User')
const appError = require('../../utils/appError')
const auth = require('../../utils/auth')
const generateToken = require('../../utils/generateToken')


const registerController = async (req, res, next) => {
  
  const { firstname, lastname, email, password } = req.body
  const hashedPassword = await auth.hashPassword(password);
  try {
    const userFound = await User.findOne({ email })
    if (userFound) {
      return next(appError("User already exists", 500))
    }
    const user = await User.create({
      firstname,
      lastname,
      email,
      password : hashedPassword,
    })
    res.json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    next(new Error(error.message));
  }
}

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //Check if email exists
    const userFound = await User.findOne({ email })
    //Comparing passwords
    const doesPasswordMatch = await auth.comparePassword(password, userFound.password)
    if(!userFound || !doesPasswordMatch){
      return next(appError("Invalid login credentials. Please try again.", 500))
    }
    else{
      res.json({
        status: "Success",
        data: {
          firstname: userFound.firstname,
          lastname: userFound.lastname,
          email: userFound.email,
          token: generateToken(userFound._id),
        }
      })
    }
    
  }
  catch (error) {
    next(error.message)
  }
}

const userProfileController = async (req, res, next) => {
  try {
    const profile = await User.findById(req.userAuth);
    return res.json({
      status: "Success",
      data: profile
    });
  } catch (error) {
    next(error.message);
  }
}

module.exports = {
  registerController,
  loginController,
  userProfileController
}
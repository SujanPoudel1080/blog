const User = require('../../model/User/User')
const express = require('express');
const {registerController, loginController, userProfileController} = require('../../controller/users/user-controller')
const isLoggedIn = require('../../middleware/isLoggedIn')

const userRouter = express.Router()


userRouter.post("/register", registerController);

userRouter.post("/login", loginController);

userRouter.get("/profile", isLoggedIn, userProfileController);
// userRouter.delete("/api/v1/users/:id", async (req, res) => {
//   try {
//     res.json({
//       status: "Success",
//       data: "User Deleted Successfully",
//     });
//   } catch (error) {
//     res.json(error.message);
//   }
// });

// userRouter.put("/api/v1/users/:id", async (req, res) => {
//   try {
//     res.json({
//       status: "Success",
//       data: "User Edited Successfully",
//     });
//   } catch (error) {
//     res.json(error.message);
//   }
// });
module.exports = userRouter;
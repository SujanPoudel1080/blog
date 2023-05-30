const express = require("express");

const res = require("express/lib/response");
require("dotenv").config();
require("./config/database");
const userRouter = require('./routes/users/userRoutes');
const errorHandler = require("./middleware/errorHandler");
const app = express();
app.use(express.json());

//middleware

//routes
//user routes


app.use("/api/v1/users/", userRouter)




app.get("/api/v1/posts", async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "All Posts",
    });
  } catch (error) {
    res.json(error.msg);
  }
});

//error handlers
app.use(errorHandler);
app.use('*', (req, res) => {
  res.status(404).json({
    message: `${req.originalUrl} doesnot exist. please enter a valid route.`
  })
})
//listening to server

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

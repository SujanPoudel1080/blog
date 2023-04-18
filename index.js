const express = require("express");
const res = require("express/lib/response");
require("dotenv").config();
require("./config/database");
const app = express();

//middleware

//routes
//user routes

app.post("/api/v1/users/register", async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "User Registered successfully",
    });
  } catch (error) {
    res.json(error.message);
  }
});

app.post("/api/v1/users//register", async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "User Logged in successfully",
    });
  } catch (error) {
    res.json(error.message);
  }
});

app.get("/api/v1/users/profile/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "User Profile",
    });
  } catch (error) {
    res.json(error.message);
  }
});
app.delete("/api/v1/users/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "User Deleted Successfully",
    });
  } catch (error) {
    res.json(error.message);
  }
});

app.put("/api/v1/users/:id", async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "User Edited Successfully",
    });
  } catch (error) {
    res.json(error.message);
  }
});

app.get("/api/v1/posts", async (req, res) => {
  try {
    res.json({
      status: "Success",
      data: "All Posts",
    });
  } catch (error) {
    res.json(error.message);
  }
});

//error handlers

//listening to server

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

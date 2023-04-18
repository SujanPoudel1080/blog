const mongoose = require("mongoose");
import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is a mandatory field"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is a mandatory field"],
    },
    profileImage: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is a mandatory field"],
    },
    password: {
      type: String,
      required: [true, "Password is a mandatory field"],
    },
    postCount: {
      type: Number,
      ref: "Post",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["Superadmin", "Admin", "Client"],
    },
    viewedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    posts: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

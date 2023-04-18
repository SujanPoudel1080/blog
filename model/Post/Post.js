const mongoose = require("mongoose");
import { text } from "express";
import { Schema } from "mongoose";

const postSchema = new Schema(
  {
    postId: {
      type: Number,
      required: [true, "Post id is required"],
    },
    title: {
      type: String,
      required: [true, "Post title is required"],
    },
    description: {
      type: Text,
    },
    body: {
      type: Text,
      required: [true, "Body of post cannot be empty"],
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "This is a mandatory field"],
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    postImage: {
      type: String,
      required: [true, "You must enter the post image"],
    },
    views: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;

import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    description: {
      type: String,
      required: [true, "Comment must have the description attribute"],
    },
    post: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: [true, "comment must have some post"],
      },
    ],
    user: {
      type: Object,
      required: [true, "comment must have some user"],
    },
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comment", commentSchema);
module.exports = Comment;

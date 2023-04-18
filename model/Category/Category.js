import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Category = model("Category", categorySchema);
module.exports = Category;

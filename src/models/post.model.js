// models/Post.js
import { model, Schema } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    content: {
      type: String,
      required: true,
      maxLength: 5000,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true, // ← RELACIÓN 1:N (1 usuario → N posts)
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category", // ← RELACIÓN N:M (1 post → N categorías, 1 categoría → M posts)
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const PostModel = model("Post", PostSchema);

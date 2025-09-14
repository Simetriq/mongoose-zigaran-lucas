import { model, Schema, Types } from "mongoose";

const ProfileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    bio: {
      type: String,
      maxLength: 100,
    },
    person: {
      birthday: Date,
      age: Number,
      country: {
        type: String,
        default: "argentina",
      },
    },
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

export const ProfileModel = model("Perfil", ProfileSchema);

import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";
import {
  createUserValidation,
  updateUserValidation,
} from "../middleware/validations/user.validation.js";
import { applyValidations } from "../middleware/validator.js";
export const userRoutes = Router();

userRoutes.post("/user", createUserValidation, applyValidations, createUser);
userRoutes.get("/user", getAllUser);
userRoutes.get("/user/:id", getUserById);
userRoutes.delete(
  "/user/:id",
  updateUserValidation,
  applyValidations,
  deleteUser
);
userRoutes.put("/user/:id", updateUser);

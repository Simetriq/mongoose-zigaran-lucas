import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";

export const userRoutes = Router();

userRoutes.post("/user", createUser);
userRoutes.get("/user", getAllUser);
userRoutes.get("/user/:id", getUserById);
userRoutes.delete("/user/:id", deleteUser);
userRoutes.put("/user/:id", updateUser);

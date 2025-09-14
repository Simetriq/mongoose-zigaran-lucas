import { Router } from "express";
import {
  createProfile,
  deleteProfile,
  getAllProfile,
  getProfileById,
  updateProfile,
} from "../controllers/profile.controller.js";

export const profileRoute = Router();

profileRoute.post("/profile", createProfile);
profileRoute.get("/profile", getAllProfile);
profileRoute.get("/profile/:id", getProfileById);
profileRoute.put("/profile/:id", updateProfile);
profileRoute.delete("/profile/:id", deleteProfile);

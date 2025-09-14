import { Router } from "express";
import {
  createProfile,
  deleteProfile,
  getAllProfile,
  getProfileById,
  updateProfile,
} from "../controllers/profile.controller.js";

import { profileValidation } from "../middleware/validations/profile.validation.js";
import { applyValidations } from "../middleware/validator.js";

export const profileRoute = Router();

profileRoute.post(
  "/profile",
  profileValidation,
  applyValidations,
  createProfile
);
profileRoute.get("/profile", getAllProfile);
profileRoute.get("/profile/:id", getProfileById);
profileRoute.put(
  "/profile/:id",
  profileValidation,
  applyValidations,
  updateProfile
);
profileRoute.delete("/profile/:id", deleteProfile);

import { Router } from "express";
import { userRoutes } from "./user.route.js";
import { profileRoute } from "./profile.route.js";

export const routes = Router();

routes.use(userRoutes);
routes.use(profileRoute);

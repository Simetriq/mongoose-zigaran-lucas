import { Router } from "express";
import { userRoutes } from "./user.route.js";
import { profileRoute } from "./profile.route.js";
import { postRouter } from "./post.routes.js";
import { categoryRouter } from "./category.routes.js";

export const routes = Router();

routes.use(userRoutes);
routes.use(profileRoute);
routes.use(postRouter);
routes.use(categoryRouter);

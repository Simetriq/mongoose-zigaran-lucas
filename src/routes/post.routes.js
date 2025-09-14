import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  addCategoryToPost,
  removeCategoryFromPost,
} from "../controllers/post.controller.js";

import { postValidation } from "../middleware/validations/post.validator.js";
import { applyValidations } from "../middleware/validator.js";

export const postRouter = express.Router();

// POST /api/posts - Crear un nuevo post
postRouter.post("/post", postValidation, applyValidations, createPost);

// GET /api/posts - Obtener todos los posts
postRouter.get("/post", getAllPosts);

// GET /api/posts/:id - Obtener un post por ID
postRouter.get("/post/:id", getPostById);

// PUT /api/posts/:id - Actualizar un post
postRouter.put("/post/:id", postValidation, applyValidations, updatePost);

// DELETE /api/posts/:id - Eliminar un post (lógico)
postRouter.delete("/post/:id", deletePost);

postRouter.post("/post/:id", addCategoryToPost);

postRouter.delete("/post/:id", removeCategoryFromPost);

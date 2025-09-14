import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";

export const postRouter = express.Router();

// POST /api/posts - Crear un nuevo post
postRouter.post("/", createPost);

// GET /api/posts - Obtener todos los posts
postRouter.get("/", getAllPosts);

// GET /api/posts/:id - Obtener un post por ID
postRouter.get("/:id", getPostById);

// PUT /api/posts/:id - Actualizar un post
postRouter.put("/:id", updatePost);

// DELETE /api/posts/:id - Eliminar un post (lógico)
postRouter.delete("/:id", deletePost);

import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

export const categoryRouter = express.Router();

// POST /api/categories - Crear una nueva categoría
categoryRouter.post("/", createCategory);

// GET /api/categories - Obtener todas las categorías
categoryRouter.get("/", getAllCategories);

// GET /api/categories/:id - Obtener una categoría por ID
categoryRouter.get("/:id", getCategoryById);

// PUT /api/categories/:id - Actualizar una categoría
categoryRouter.put("/:id", updateCategory);

// DELETE /api/categories/:id - Eliminar una categoría (lógico)
categoryRouter.delete("/:id", deleteCategory);

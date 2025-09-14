import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";
import { categoryValidation } from "../middleware/validations/category.validation.js";
import { applyValidations } from "../middleware/validator.js";

export const categoryRouter = express.Router();

// POST /api/categories - Crear una nueva categoría
categoryRouter.post(
  "/category",
  categoryValidation,
  applyValidations,
  createCategory
);

// GET /api/categories - Obtener todas las categorías
categoryRouter.get("/category", getAllCategories);

// GET /api/categories/:id - Obtener una categoría por ID
categoryRouter.get("/category/:id", getCategoryById);

// PUT /api/categories/:id - Actualizar una categoría
categoryRouter.put(
  "/category/:id",
  categoryValidation,
  applyValidations,
  updateCategory
);

// DELETE /api/categories/:id - Eliminar una categoría (lógico)
categoryRouter.delete("/category/:id", deleteCategory);

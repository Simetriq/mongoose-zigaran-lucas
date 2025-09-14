import { body } from "express-validator";

export const postValidation = [
  body("title")
    .notEmpty()
    .withMessage("El título es requerido")
    .isLength({ min: 3 })
    .withMessage("El título debe tener al menos 3 caracteres")
    .isLength({ max: 100 })
    .withMessage("El título no puede exceder los 100 caracteres")
    .trim(),

  body("content")
    .notEmpty()
    .withMessage("El contenido es requerido")
    .isLength({ min: 10 })
    .withMessage("El contenido debe tener al menos 10 caracteres")
    .isLength({ max: 5000 })
    .withMessage("El contenido no puede exceder los 5000 caracteres")
    .trim(),

  body("author")
    .notEmpty()
    .withMessage("El autor es requerido")
    .isMongoId()
    .withMessage("Debe ser un ID válido de MongoDB"),

  body("categories")
    .optional()
    .isArray()
    .withMessage("Las categorías deben ser un array")
    .custom((categories) => {
      if (categories) {
        for (const category of categories) {
          if (typeof category !== "string") {
            throw new Error("Cada categoría debe ser un ID válido");
          }
        }
      }
      return true;
    }),
];

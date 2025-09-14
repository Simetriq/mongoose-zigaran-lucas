import { body } from "express-validator";

export const categoryValidation = [
  body("name")
    .notEmpty()
    .withMessage("El nombre de la categoría es requerido")
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos 2 caracteres")
    .isLength({ max: 50 })
    .withMessage("El nombre no puede exceder los 50 caracteres")
    .matches(/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/)
    .withMessage("El nombre solo puede contener letras, números y espacios")
    .trim(),

  body("description")
    .optional()
    .isLength({ max: 200 })
    .withMessage("La descripción no puede exceder los 200 caracteres")
    .trim(),
];

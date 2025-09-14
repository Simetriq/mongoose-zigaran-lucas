import { body } from "express-validator";

export const profileValidation = [
  body("user")
    .notEmpty()
    .withMessage("El ID de usuario es requerido")
    .isMongoId()
    .withMessage("Debe ser un ID válido de MongoDB"),

  body("bio")
    .optional()
    .isLength({ max: 500 })
    .withMessage("La biografía no puede exceder los 500 caracteres")
    .trim(),

  body("person.birthday")
    .optional()
    .isISO8601()
    .withMessage(
      "La fecha de cumpleaños debe tener formato válido (YYYY-MM-DD)"
    ),

  body("person.age")
    .optional()
    .isInt({ min: 0, max: 120 })
    .withMessage("La edad debe estar entre 0 y 120 años"),

  body("person.country")
    .optional()
    .isLength({ max: 50 })
    .withMessage("El país no puede exceder los 50 caracteres")
    .trim(),
];

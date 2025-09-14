import { body } from "express-validator";

export const createUserValidation = [
  body("username")
    .notEmpty()
    .withMessage("El username es requerido")
    .isLength({ min: 3 })
    .withMessage("El username debe tener al menos 3 caracteres")
    .isLength({ max: 30 })
    .withMessage("El username no puede exceder los 30 caracteres")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage(
      "El username solo puede contener letras, números y guiones bajos"
    ),

  body("email")
    .notEmpty()
    .withMessage("El email es requerido")
    .isEmail()
    .withMessage("Debe ser un email válido")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("La contraseña es requerida")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres")
    .isLength({ max: 100 })
    .withMessage("La contraseña no puede exceder los 100 caracteres"),
];

export const updateUserValidation = [
  body("username")
    .optional()
    .isLength({ min: 3 })
    .withMessage("El username debe tener al menos 3 caracteres")
    .isLength({ max: 30 })
    .withMessage("El username no puede exceder los 30 caracteres")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage(
      "El username solo puede contener letras, números y guiones bajos"
    ),

  body("email")
    .optional()
    .isEmail()
    .withMessage("Debe ser un email válido")
    .normalizeEmail(),

  body("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres")
    .isLength({ max: 100 })
    .withMessage("La contraseña no puede exceder los 100 caracteres"),
];

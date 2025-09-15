import { CategoryModel } from "../models/category.model.js";

export const createCategory = async (req, res) => {
  try {
    const category = await CategoryModel.create(req.body);

    res.status(201).json({
      ok: true,
      msg: "Categoría creada exitosamente",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al crear categoría",
      error: error.message,
    });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find({ isActive: true }).sort({
      name: 1,
    });

    res.status(200).json({
      ok: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al obtener categorías",
    });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await CategoryModel.findOne({
      _id: req.params.id,
      isActive: true,
    });

    if (!category) {
      return res.status(404).json({
        ok: false,
        msg: "Categoría no encontrada",
      });
    }

    res.status(200).json({
      ok: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al obtener categoría",
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findOneAndUpdate(
      { _id: req.params.id, isActive: true },
      req.body,
      { new: true, runValidators: true }
    );

    if (!category) {
      return res.status(404).json({
        ok: false,
        msg: "Categoría no encontrada",
      });
    }

    res.status(200).json({
      ok: true,
      msg: "Categoría actualizada exitosamente",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al actualizar categoría",
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({
        ok: false,
        msg: "Categoría no encontrada",
      });
    }

    res.status(200).json({
      ok: true,
      msg: "Categoría eliminada exitosamente",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al eliminar categoría",
    });
  }
};

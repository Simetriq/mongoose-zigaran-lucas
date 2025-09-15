import { PostModel } from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const post = await PostModel.create(req.body);
    await post.populate("author", "username email");
    await post.populate("categories", "name");

    res.status(201).json({
      ok: true,
      msg: "Post creado exitosamente",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al crear post",
      error: error.message,
    });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find({ isActive: true })
      .populate("author", "username email")
      .populate("categories", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      ok: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al obtener posts",
    });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await PostModel.findOne({
      _id: req.params.id,
      isActive: true,
    })
      .populate("author", "username email")
      .populate("categories", "name");

    if (!post) {
      return res.status(404).json({
        ok: false,
        msg: "Post no encontrado",
      });
    }

    res.status(200).json({
      ok: true,
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al obtener post",
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await PostModel.findOneAndUpdate(
      { _id: req.params.id, isActive: true },
      req.body,
      { new: true, runValidators: true }
    )
      .populate("author", "username email")
      .populate("categories", "name");

    if (!post) {
      return res.status(404).json({
        ok: false,
        msg: "Post no encontrado",
      });
    }

    res.status(200).json({
      ok: true,
      msg: "Post actualizado exitosamente",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al actualizar post",
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await PostModel.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    )
      .populate("author", "username email")
      .populate("categories", "name");

    if (!post) {
      return res.status(404).json({
        ok: false,
        msg: "Post no encontrado",
      });
    }

    res.status(200).json({
      ok: true,
      msg: "Post eliminado exitosamente",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al eliminar post",
    });
  }
};

export const addCategoryToPost = async (req, res) => {
  try {
    const { postId, categoryId } = req.params;

    const post = await PostModel.findByIdAndUpdate(postId, {
      new: true,
    }).populate("categories", "name");

    res.status(200).json({
      ok: true,
      msg: "Categoría agregada al post exitosamente",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al agregar categoría al post",
    });
  }
};

export const removeCategoryFromPost = async (req, res) => {
  try {
    const { postId, categoryId } = req.params;

    const post = await PostModel.findByIdAndUpdate(
      postId,
      { $pull: { categories: categoryId } },
      { new: true }
    ).populate("categories", "name");

    res.status(200).json({
      ok: true,
      msg: "Categoría removida del post exitosamente",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al remover categoría del post",
    });
  }
};

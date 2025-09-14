import { UserModel } from "../models/user.model.js";
import { ProfileModel } from "../models/perfil.model.js";
import { PostModel } from "../models/post.model.js";
// Crear
export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userCreated = await UserModel.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      ok: true,
      msg: "Usuario creado correctamente",
      data: userCreated,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const allUsers = await UserModel.find({ isActive: true });
    res.status(200).json({
      ok: true,
      data: allUsers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      count: allUsers.length,
      msg: "Error interno del servidor",
    });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userId = await UserModel.findById(id);
    res.status(200).json({
      ok: true,
      data: userId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    await ProfileModel.findOneAndUpdate(
      { user: req.params.id },
      { isActive: false }
    );

    await PostModel.updateMany({ author: req.params.id }, { isActive: false });

    res.status(200).json({
      ok: true,
      msg: "Usuario y sus datos asociados eliminados correctamente",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error al eliminar usuario",
    });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username } = req.body;

  try {
    const userUpdated = await UserModel.findByIdAndUpdate(
      id,
      { username },
      { new: true }
    );

    res.status(200).json({
      ok: true,
      msg: "Usuario actualizado correctamente",
      data: userUpdated,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

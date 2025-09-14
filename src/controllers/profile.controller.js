import { ProfileModel } from "../models/perfil.model.js";

export const createProfile = async (req, res) => {
  const { userId, bio, birthday, age, country } = req.body;
  try {
    const profileCreated = await ProfileModel.create({
      user: userId,
      bio,
      person: {
        birthday,
        age,
        country,
      },
    });

    await ProfileModel.populate("user", "username email");

    res.status(201).json({
      ok: true,
      msg: "Perfil creado correctamente",
      data: profileCreated,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getAllProfile = async (req, res) => {
  try {
    const allProfiles = await ProfileModel.find();
    res.status(200).json({
      ok: true,
      data: allProfiles,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const getProfileById = async (req, res) => {
  const { id } = req.params;
  try {
    const profileId = await ProfileModel.findById(id);
    res.status(200).json({
      ok: true,
      data: profileId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const deleteProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const profileDeleted = await ProfileModel.findByIdAndUpdate(id);

    res.status(200).json({
      ok: true,
      msg: "perfil eliminado correctamente",
      data: profileDeleted,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

export const updateProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const perfilUpdated = await UserModel.findByIdAndUpdate(id, { new: true });

    res.status(200).json({
      ok: true,
      msg: "Perfil actualizado correctamente",
      data: perfilUpdated,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
    });
  }
};

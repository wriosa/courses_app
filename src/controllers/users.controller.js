const UserServices = require("../services/user.service");

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
 
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await UserServices.update(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message); 
  }
};

const getUserWithCourses = async (req, res) => {
  try {
      const {id} = req.params;
      const result = await UserServices.getWithCourses(id);
      res.json({
          message: "Enviando usuarios con cursos donde esta suscrito",
          data: result,
      });
  } catch (error) {
      res.status(400).json({
          error: error.message,
          details: error.stack, 
      });
  }
}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  getUserWithCourses
};

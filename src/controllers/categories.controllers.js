const CategoriesServices = require("../services/categories.service");


const createCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    const result = await CategoriesServices.create(newCategory);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CategoriesServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createCategory,
  deleteCategory
}
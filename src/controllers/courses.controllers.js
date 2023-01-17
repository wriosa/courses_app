const CoursesServices = require("../services/courses.service");


const createCourse = async (req, res) => {
  try {
    const newCourse = req.body;
    const result = await CoursesServices.create(newCourse);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAllCourses = async (req, res) => {
  try {
    const result = await CoursesServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getCoursesCaVi = async (req, res) => {
  try {
    const result = await CoursesServices.getCourseCa();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await CoursesServices.update(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  updateCourse,
  getCoursesCaVi
}
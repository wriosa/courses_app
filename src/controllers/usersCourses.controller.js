const UsersCoursesServices = require('../services/usersCourses.service')


const addCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await UsersCoursesServices.create(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message); 
  }
};

module.exports = {
  addCourse
}
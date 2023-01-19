const UsersCoursesServices = require("../services/usersCourses.service");

const addCourse = async (req, res) => {
  try {
    const { userId } = req.params;
    const { courseId } = req.body;
    console.log(courseId);
    const relation = { userId, courseId };
    const result = await UsersCoursesServices.create(relation);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addCourse,
};

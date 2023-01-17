const Categories = require("../models/categories.model");
const Courses = require("../models/courses.model");
const Videos = require("../models/videos.model");

class CoursesServices {
  static async create(course) {
    try {
      const result = await Courses.create(course);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Courses.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getCourseCa() {
    try {
      const result = await Courses.findAll({
        // where: {id},
        // attributes:{
        //     exclude:["password"],
        // },
        include: {
          model: Categories,
          as: "category",
          attributes: ["name"],
          // model: Videos,
          // as: "titles",
          // attributes: ["title"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CoursesServices;

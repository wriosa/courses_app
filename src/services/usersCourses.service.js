const UsersCourses = require("../models/usersCourses.model");

class UsersCoursesServices {
  static async create(relationData) {
    try {
      const result = await UsersCourses.create(relationData);
      return result;
    } catch (error) {
      throw error;
    } 
  }
}

module.exports = UsersCoursesServices;

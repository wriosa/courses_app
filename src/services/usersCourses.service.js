const UsersCourses = require("../models/usersCourses.model");

class UsersCoursesServices {
  static async create(id, field) {
    try {
      const result = await UsersCourses.create(field, {userId: { id }});
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersCoursesServices;

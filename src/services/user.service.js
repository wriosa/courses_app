const Courses = require("../models/courses.model");
const Users = require("../models/users.model");
const UsersCourses = require("../models/usersCourses.model");

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
 
  static async getById(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Users.update(field, {where:{id}});
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCourses(id) {
    try {
        const result = await Users.findOne({
            where: { id },
            include: {
                model: UsersCourses, 
                as: "course",
                attributes: ["id"],
                include: {
                    model: Courses,
                    as: "course",
                    attributes: {
                      exclude: ["id", "description", "instructor"],
                    },
                },
            },
            attributes: {
              exclude: ["password", "createdAt", "updatedAt"],
            },
        });
        return result;
    } catch (error) {
        throw error;
    }
}

}

module.exports = UserServices;

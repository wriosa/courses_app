const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Users = require("./users.model");
const Courses = require("./courses.model");

const UsersCourses = db.define("users_courses",{
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
    references: {
      model: Users,
      key: "id",
    },
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "course_id",
    references: {
      model: Courses,
      key: "id",
    },
  },
}, {
  timestamps: false,
});

module.exports = UsersCourses;
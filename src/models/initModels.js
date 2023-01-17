const Categories = require("./categories.model");
const Courses = require("./courses.model");
const Users = require("./users.model");
const UsersCourses = require("./usersCourses.model");
const Videos = require("./videos.model");

const initModels = () => {
  Categories.belongsTo(Courses, { as: "user", foreignKey: "course_id" });
  Courses.hasMany(Categories, { as: "category", foreignKey: "course_id" });

  Videos.belongsTo(Courses, { as: "user", foreignKey: "course_id" });
  Courses.hasMany(Videos, { as: "titles", foreignKey: "course_id" });

  UsersCourses.belongsTo(Users, { as: "user", foreignKey: "user_id" });
  Users.hasMany(UsersCourses, { as: "course", foreignKey: "user_id" });

  UsersCourses.belongsTo(Courses, { as: "course", foreignKey: "course_id" });
  Courses.hasMany(UsersCourses, { as: "user", foreignKey: "course_id" });
  
};

module.exports = initModels;

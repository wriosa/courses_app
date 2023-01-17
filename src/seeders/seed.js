const db = require("../utils/database");
const Users = require("../models/users.model");
const Courses = require("../models/courses.model");
const Categories = require("../models/categories.model");
const Videos = require("../models/videos.model");
const UsersCourses = require("../models/usersCourses.model");

const users = [
  {
    firstName: "Wolfgang",
    lastName: "Rios",
    password: "1234",
    email: "wol@gmail.com",
  },
];

const courses = [
  { tittle: "node", description: "aprender node", instructor: "Ian" },
  { tittle: "fundamentos", description: "js,html", instructor: "Brenda" },
  { tittle: "react", description: "aprender react", instructor: "Andres" }
];

const categories = [{ name: "backend", courseId: 1 }, { name: "frontend", courseId: 2 }];

const videos = [
  {
    title: "Relacionando modelos",
    url: "https://us02web.zoom.us/rec/play/mWePrTSxjho",
    courseId: 1,
  },
];

const usersCourses = [{ userId: 1, courseId: 1 }, { userId: 1, courseId: 2 }];

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando el cargue de la informacion a la db");
    users.forEach((user) => Users.create(user));
    courses.forEach((course) => Courses.create(course));

    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
      videos.forEach((video) => Videos.create(video));
      usersCourses.forEach((userCourse) => UsersCourses.create(userCourse));
    }, 100);
  })
  .catch((error) => console.log(error));

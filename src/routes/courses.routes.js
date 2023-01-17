const { Router } = require("express");
const { createCourse, getAllCourses, updateCourse, getCoursesCaVi } = require("../controllers/courses.controllers");

const router = Router();

router.post("/courses", createCourse);
router.get("/courses", getAllCourses);
router.put('/courses/:id', updateCourse);

router.get('/courses/catvi', getCoursesCaVi);

module.exports = router;
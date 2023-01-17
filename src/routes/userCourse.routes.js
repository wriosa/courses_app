const { Router } = require("express");
const { addCourse } = require("../controllers/usersCourses.controller");
const router = Router();


router.post('/usercourse/:id', addCourse);

module.exports = router; 
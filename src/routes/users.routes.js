const { Router } = require("express");
const { getAllUsers, getUserById, createUser, updateUser, getUserWithCourses } = require("../controllers/users.controller");

const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.get('/users/:id/courses', getUserWithCourses);
router.post("/users", createUser);
router.put('/users/:id', updateUser);


module.exports = router;

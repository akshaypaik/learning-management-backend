const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const courseController = require("./controllers/courseController");

//router.post("/api/v1.0/lms/company/register", userController.registerCompany);

router.post("/registerUser", userController.registerUser);

router.post("/isUserLoggedIn", userController.isUserLoggedIn);

router.get("/loginUser", userController.loginUser);

router.get("/checkUsernameAlreadyExists", userController.checkUsernameAlreadyExists);

router.post("/logout", userController.logout);

router.get("/api/v1.0/lms/courses/info", courseController.getCourseFromTechnology);

router.get("/api/v1.0/lms/courses/getall", courseController.getAllCourses);

router.post("/api/v1.0/lms/courses/delete", courseController.deleteCourse);

router.post("/api/v1.0/lms/courses/add", courseController.addCourse);

router.get("/api/v1.0/lms/courses/get", courseController.getCourseDurationRange);

module.exports = router;
const Course = require("../models/Course");

exports.getCourseFromTechnology = function (request, response){
    let course = new Course(request.body);
    course.getCourseFromTechnology().then(dbResponse => {
        response.send(dbResponse);
    }).catch(error => {
        response.send(error);
    });
}

exports.getAllCourses = function (request, response){
  let course = new Course(request.query);
  let courseDetails = course.getAllCourses().then(dbResponse => {
    response.send(dbResponse);
  }).catch(error => {
    response.send(error);
  });
}

exports.deleteCourse = function (request, response){
    let course = new Course(request.body);
    course.deleteCourse().then(dbResponse => {
        response.send(dbResponse);
    }).catch(error => {
        response.send(error);
    });
}

exports.addCourse = function (request, response){
    let course = new Course(request.body);
    course.addCourse().then(dbResponse => {
        let messageModel = {
            statusMessage: "Course added successfully!",
            statusCode: 0
        }
        response.send(messageModel);
    }).catch(error => {
        let messageModel = {
            statusMessage: "Failed to add course!",
            statusCode: -1
        }
        response.send(messageModel);
    })
}

exports.getCourseDurationRange = function (request, response){
  
}
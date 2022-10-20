const courseCollection = require("../db").db().collection("courses");
const ObjectId = require("mongodb").ObjectID;

let Course = function(courseDetails) {
    this.courseDetails = courseDetails;
    this.errors = [];
}

Course.prototype.getCourseFromTechnology = function(){
   return new Promise((resolve, reject) => {
    courseCollection.find({ "technology": this.courseDetails.technology }).toArray().then( dbResponse => {
        resolve(dbResponse);
    }).catch(error => {
        let messageModel = {
            statusMessage: "Failed to fetch data!",
            statusCode: -1
        }
        reject(messageModel);
    });
   });
}

Course.prototype.addCourse = function(){
    //courseCollection.insertOne(this.courseDetails);
    return new Promise((resolve, reject) => {
        courseCollection.insertOne(this.courseDetails).then( dbResponse => {
            resolve(dbResponse);
        }).catch(error => {
            let messageModel = {
                statusMessage: "Failed to fetch data!",
                statusCode: -1
            }
            reject(messageModel);
        });
    });
 }

 Course.prototype.getAllCourses = function(){
    return new Promise((resolve, reject) => {
        courseCollection.find().toArray().then( dbResponse => {
            resolve(dbResponse);
        }).catch(error => {
            let messageModel = {
                statusMessage: "Failed to fetch data!",
                statusCode: -1
            }
            reject(messageModel);
        });
    });
 }

Course.prototype.deleteCourse = function() {
    return new Promise((resolve, reject) => {
        courseCollection.deleteOne({ _id: ObjectId(this.courseDetails._id) }).then( dbResponse => {
            let messageModel = {
                statusMessage: "Successfully deleted!",
                statusCode: 0
            }
            resolve(messageModel);
        }).catch(error => {
            let messageModel = {
                statusMessage: "Failed to delete course!",
                statusCode: -1
            }
            reject(messageModel);
        });
    });
}

module.exports = Course;
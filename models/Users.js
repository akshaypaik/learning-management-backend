const userCollection = require("../db").db().collection("users");
const jwt = require("jsonwebtoken");

let User = function(userDetails) {
    this.userDetails = userDetails;
    this.errors = [];
}

User.prototype.registerUser = function(){
    if(!this.errors.length){
        userCollection.insertOne(this.userDetails);
    }
}

User.prototype.loginUser = function (){
    return new Promise((resolve, reject) => {
        userCollection.findOne({ email: this.userDetails.email }).then(dbResponse => {
            if(dbResponse && this.userDetails.password === dbResponse.password){
                let messageModel = {
                    statusMessage: "Successfully logged in!",
                    statusCode: 0
                }
                let userModel = {
                    messageModel: messageModel,
                    email : dbResponse.email
                }
                resolve(userModel);
            }else{
                let messageModel = {
                    statusMessage: "Invalid Credentials!",
                    statusCode: -1
                }
                let userModel = {
                    messageModel: messageModel,
                    email : null
                }
                reject(userModel);
            }
        })
    });
}

User.prototype.checkUsernameAlreadyExists = function (){
  
}

User.prototype.logout = function (){
  
}

module.exports = User;
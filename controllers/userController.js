const User = require("../models/Users");

exports.registerUser = function (request, response){
    let user = new User(request.body);
    user.registerUser();
    if(user.errors.length){
        let messageModel = {
            statusMessage: "Failed to register!",
            statusCode: -1
        }
        response.send(messageModel);
    }else{
        let messageModel = {
            statusMessage: "Successfully registered!",
            statusCode: 0
        }
        response.send(messageModel);
    }
}

exports.isUserLoggedIn = function (request, response){
  if(request.session.user){
    let messageModel = {
        statusMessage: "YES",
        statusCode: 0
    }
    let userModel = {
        messageModel: messageModel,
        email : request.session.user.email
    }
    response.send(userModel);
  }else{
    let messageModel = {
        statusMessage: "NO",
        statusCode: -1
    }
    let userModel = {
        messageModel: messageModel,
        email : null
    }
    response.send(userModel);
  }
}

exports.loginUser = function (request, response){
  let user = new User(request.query);
  user.loginUser().then(result => {
    request.session.user = {
        email: user.userDetails.email
    }
    response.send(result);
  }).catch(error => {
    response.send(error);
  })
}

exports.checkUsernameAlreadyExists = function (request, response){
  
}

exports.logout = function (request, response){
  request.session.destroy(() => {
    let messageModel = {
        statusMessage: "user logged out",
        statusCode: -2
    }
    response.send(messageModel);
  })
}
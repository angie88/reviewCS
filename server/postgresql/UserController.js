//var Sequelize = require('sequelize');
var User = require('./postgresModel');

var user = {};

user.signup = function(req, res, next) {
  console.log(req.body.username);
  User.userInfo.sync().then(function(){
    return User.userInfo.create({
      username: req.body.username,
      password: req.body.password
    })
  });
  next();
};

// user.session = function(req, res, next) {
//   User.SessionId.sync.then(function(){
//     return User.create({
//
//     })
//   })
// }

module.exports = user;

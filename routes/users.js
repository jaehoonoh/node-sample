var express = require('express');
var router = express.Router();
var UserRepository = require('../domain/users/UserRepository')
var UserService = require('../domain/users/UserService');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

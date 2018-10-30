var express = require('express');
var router = express.Router();

const UserServices = require("../services/user/user_services.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 登录：完整路径 "/api/users/login"
router.post("/login", UserServices.login);

router.post("/register", UserServices.register);

router.get("/logout", UserServices.logout);

module.exports = router;

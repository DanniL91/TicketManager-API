const express = require('express')
//const router = require("express-promise-router")();
const validator = require('../validator/index');
const UsersController = require ('../controllers/users');
    
const router = express()

router.use(express.json())

router.post('/signin', validator.validateUser, UsersController.signIn)

router.post('/auth', validator.validateUser, UsersController.auth)
  

module.exports = router;
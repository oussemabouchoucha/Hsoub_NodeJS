const express = require('express');
const router = express.Router();
const authController = require('../controller/authController')
const authVerify = require('../middlewares/auth')

router.post('/login', authController.login)

router.post('/register', authController.register)

router.get('/me', authVerify.check, authController.me)


module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.postRegister);
router.post('/register-verification/:token', authController.postRegisterVerification);
router.post('/login', authController.postLogin);

module.exports = router;

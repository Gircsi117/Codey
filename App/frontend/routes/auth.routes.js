const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);
router.get('/register-verification/:token', authController.getRegisterVerification);

module.exports = router;

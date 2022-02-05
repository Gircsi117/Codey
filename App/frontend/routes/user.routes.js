const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', require('../middleware/auth.middleware'), userController.getDashboard);

module.exports = router;

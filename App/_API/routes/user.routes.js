const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/postModifyUsername', userController.postModifyUsername);
router.post('/postModifyPassword', userController.postModifyPassword);
router.post('/postSetHeight', userController.postSetHeight);
router.post('/postSetGender', userController.postSetGender);

module.exports = router;

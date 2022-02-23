const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/settings', require('../middleware/auth.middleware'), userController.getSettingsPage);
router.post('/modifyUsername', require('../middleware/auth.middleware'), userController.postModifyUsername);
router.post('/modifyPassword', require('../middleware/auth.middleware'), userController.postModifyPassword);

module.exports = router;

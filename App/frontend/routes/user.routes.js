const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', require('../middleware/auth.middleware'), userController.getDashboardPage);
router.post('/', require('../middleware/auth.middleware'), userController.postGetDashboardData);
router.post('/postWater', require('../middleware/auth.middleware'), userController.postWater);
router.post('/postSport', require('../middleware/auth.middleware'), userController.postSport);
router.post('/postFood', require('../middleware/auth.middleware'), userController.postFood);

module.exports = router;

const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');

router.get('/', require('../middleware/auth.middleware'), dashboardController.getDashboardPage);
router.post('/', require('../middleware/auth.middleware'), dashboardController.postGetDashboardData);
router.post('/postWater', require('../middleware/auth.middleware'), dashboardController.postWater);
router.post('/postSport', require('../middleware/auth.middleware'), dashboardController.postSport);
router.post('/postFood', require('../middleware/auth.middleware'), dashboardController.postFood);

module.exports = router;

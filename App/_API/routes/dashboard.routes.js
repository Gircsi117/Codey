const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');

router.post('/getFoodsByUser', dashboardController.postGetFoodsByUser);
router.post('/getSportByUser', dashboardController.postGetSportByUser);
router.post('/getWaterByUser', dashboardController.postGetWaterByUser);
router.post('/postWaterByUser', dashboardController.postWaterByUser);
router.post('/postSportByUser', dashboardController.postSportByUser);
router.post('/postFoodByUser', dashboardController.postFoodByUser);
router.post('/postGetWeights', dashboardController.postGetWeights);
router.post('/postGetLastWeight', dashboardController.postGetLastWeight);

module.exports = router;

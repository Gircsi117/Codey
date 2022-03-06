const express = require('express');
const router = express.Router();
const kcalController = require('../controllers/kcal.controller');

router.post('/getFoodsByUser', kcalController.postGetFoodsByUser);
router.post('/getSportByUser', kcalController.postGetSportByUser);
router.post('/getWaterByUser', kcalController.postGetWaterByUser);
router.post('/postWaterByUser', kcalController.postWaterByUser);
router.post('/postSportByUser', kcalController.postSportByUser);
router.post('/postFoodByUser', kcalController.postFoodByUser);

module.exports = router;

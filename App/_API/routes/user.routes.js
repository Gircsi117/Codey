const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/getFoodsByUser', userController.postGetFoodsByUser);
router.post('/getSportByUser', userController.postGetSportByUser);
router.post('/getWaterByUser', userController.postGetWaterByUser);
router.post('/postWaterByUser', userController.postWaterByUser);
router.post('/postSportByUser', userController.postSportByUser);
router.post('/postFoodByUser', userController.postSportByUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/dashboard', userController.postGetFoodsByUser);
router.post('/getSport', userController.postGetSport);
router.post('/getWater', userController.postGetWater);

module.exports = router;
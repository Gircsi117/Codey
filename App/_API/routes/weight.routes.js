const express = require('express');
const router = express.Router();
const weightController = require('../controllers/weight.controller');

router.post('/postSetGoal', weightController.postSetGoal);
router.post('/postModifyWeight', weightController.postModifyWeight);
router.post('/postGetWeights', weightController.postGetWeights);
router.post('/postGetLastWeight', weightController.postGetLastWeight);

module.exports = router;

const express = require('express');
const router = express.Router();
const toolsController = require('../controllers/tools.controller');

router.post('/postSetGoal', toolsController.postSetGoal);
router.post('/postModifyWeight', toolsController.postModifyWeight);
router.post('/postGetMealDiaryUser', toolsController.postGetMealDiaryUser);
router.post('/postGetIngredients', toolsController.postGetIngredients);

module.exports = router;

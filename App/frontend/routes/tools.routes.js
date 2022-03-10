const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const diaryController = require('../controllers/diary.controller');
const graphsController = require('../controllers/graphs.controller');
const toolsController = require('../controllers/tools.controller');
const caloriesController = require('../controllers/calories.controller');

//Beállítások lekérései
router.get('/settings', require('../middleware/auth.middleware'), userController.getSettingsPage);
router.post('/modifyUsername', require('../middleware/auth.middleware'), userController.postModifyUsername);
router.post('/modifyPassword', require('../middleware/auth.middleware'), userController.postModifyPassword);

//Grafikonok lekérései
router.get("/graphs", require('../middleware/auth.middleware'), graphsController.getGraphsPage);


//Étkezési napló lekérései
router.get("/diary", require('../middleware/auth.middleware'), diaryController.getDiaryPage);
router.get("/getWeights", require('../middleware/auth.middleware'), diaryController.getWeights);


//Cél meghatározása lekérései
router.get("/goal", require('../middleware/auth.middleware'), toolsController.getGoalPage);
router.post("/postSetGoal", require('../middleware/auth.middleware'), toolsController.postSetGoal);
router.post("/postModifyWeight", require('../middleware/auth.middleware'), toolsController.postModifyWeight);
router.post("/postSetHeight", require('../middleware/auth.middleware'), toolsController.postSetHeight);
router.post("/postSetGender", require('../middleware/auth.middleware'), toolsController.postSetGender);

//Kalória táblázat lekérései
router.get("/kcalTable", require('../middleware/auth.middleware'), caloriesController.getCaloriesPage);
router.get("/getIngredients", require('../middleware/auth.middleware'), caloriesController.getIngredients);


module.exports = router;

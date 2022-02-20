const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.post('/getAllUserData', adminController.postGetAllUserData);
router.post('/deleteUser', adminController.postDeleteUser);
router.post('/setUserData', adminController.postSetUserData);
router.post('/newIngredient', adminController.postNewIngredients);
router.post('/setIngredient', adminController.postSetIngredient);
router.post('/deleteIngredient', adminController.postDeleteIngredient);
router.post('/setBlogStatus', adminController.postSetBlogStatus);

module.exports = router;
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.post('/getAllUserData', require('../middleware/auth.middleware'), adminController.postGetAllUser);
router.post('/deleteUser', require('../middleware/auth.middleware'), adminController.postDeleteUser);
router.post('/setUserData', require('../middleware/auth.middleware'), adminController.postSetUserData);
router.post('/newIngredient', require('../middleware/auth.middleware'), adminController.postNewIngredient);
router.post('/setIngredient', require('../middleware/auth.middleware'), adminController.postSetIngredient);
router.post('/deleteIngredient', require('../middleware/auth.middleware'), adminController.postDeleteIngredient);
router.post('/setBlogStatus', require('../middleware/auth.middleware'), adminController.postSetBlogStatus);
router.get('/getAllBlog', require('../middleware/auth.middleware'), adminController.getAllBlogData);

module.exports = router;
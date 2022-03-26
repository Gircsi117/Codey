const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const rightsMiddleware = require("../middleware/rights.middleware");

router.post('/getAllUserData', [require('../middleware/auth.middleware'), rightsMiddleware.admin], adminController.postGetAllUser);
router.post('/deleteUser', [require('../middleware/auth.middleware'), rightsMiddleware.admin], adminController.postDeleteUser);
router.post('/setUserData', [require('../middleware/auth.middleware'), rightsMiddleware.admin], adminController.postSetUserData);

router.post('/newIngredient', [require('../middleware/auth.middleware'), rightsMiddleware.admin], adminController.postNewIngredient);
router.post('/setIngredient', [require('../middleware/auth.middleware'), rightsMiddleware.admin], adminController.postSetIngredient);
router.post('/deleteIngredient', [require('../middleware/auth.middleware'), rightsMiddleware.admin], adminController.postDeleteIngredient);
router.get('/getAllIngredient', [require('../middleware/auth.middleware'), rightsMiddleware.admin], adminController.getAllIngredient);

router.post('/setBlogStatus', [require('../middleware/auth.middleware'), rightsMiddleware.moderator], adminController.postSetBlogStatus);
router.get('/getAllBlog', [require('../middleware/auth.middleware'), rightsMiddleware.moderator], adminController.getAllBlogData);

router.get("/blogs", [require('../middleware/auth.middleware'), rightsMiddleware.moderator], adminController.getBlogsPage);
router.get("/ingredients", [require('../middleware/auth.middleware'), rightsMiddleware.admin], adminController.getIngredientsPage);
router.get("/users", [require('../middleware/auth.middleware'), rightsMiddleware.admin], adminController.getUsersPage);

module.exports = router;
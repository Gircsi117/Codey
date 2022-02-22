const express = require('express');
const router = express.Router();
const infoController = require('../controllers/info.controller');

router.get('/blogs', require('../middleware/auth.middleware'), infoController.getBlogPage);
router.get('/gyakori', require('../middleware/auth.middleware'), infoController.getGyakoriPage);
router.get('/kaloriarol', require('../middleware/auth.middleware'), infoController.getKaloriarolPage);
router.get('/rolunk', require('../middleware/auth.middleware'), infoController.getRolunkPage);
router.get('/getAllActiveBlog', require('../middleware/auth.middleware'), infoController.getAllActiveBlog);
router.get('/postBlog', require('../middleware/auth.middleware'), infoController.postBlog);

module.exports = router;
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');

router.get('/getAllActiveBlog', blogController.getAllActiveBlog);
router.post('/postBlog', blogController.postBlog);

module.exports = router;

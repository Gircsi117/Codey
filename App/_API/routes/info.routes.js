const express = require('express');
const router = express.Router();
const infoController = require('../controllers/info.controller');

router.get("/getAllActiveBlog", infoController.getAllActiveBlog);
router.post("/postBlog", infoController.postBlog);

module.exports = router;
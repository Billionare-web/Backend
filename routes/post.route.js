const express = require("express");
const postController = require('../controllers/post.controller');

const router = express.Router();



router.get('/get', postController.getPosts)

module.exports = router;

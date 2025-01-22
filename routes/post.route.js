const express = require("express");
const postController = require("../controllers/post.controller");

const router = express.Router();
router.get("/get", postController.getPosts);
router.post("/create", postController.createPost);
router.delete("/delete/:id", postController.delete);



module.exports = router;

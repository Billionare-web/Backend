const postService = require("../services/post.service");

class PostController {
  async getPosts(req, res) {
    try {
      const getAll = await postService.getPosts();
      res.status(200).send(getAll);
    } catch (error) {
      res.status(501).send(error);
    }
  }
  async createPost(req, res) {
    try {
      const newPost = await postService.createPost(req, res);
      res.status(201).send(newPost);
    } catch (error) {
      res.status(501).send(error);
    }
  }
}

module.exports = new PostController();
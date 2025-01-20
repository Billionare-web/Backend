const postService = require("../services/post.service");

class PostController {
  async getPosts(req, res) {
    try {
      const getAll = await PostModel.find();
      res.status(200).send(getAll);
    } catch (error) {
      res.status(501).send(error);
    }
  }
}

module.exports = new PostController();
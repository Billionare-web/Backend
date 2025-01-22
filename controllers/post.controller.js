const postService = require("../services/post.service");

class PostController {
  async get(req, res) {
    try {
      const getAll = await postService.get();
      res.status(200).send(getAll);
    } catch (error) {
      res.status(501).send(error);
    }
  }
  async create(req, res) {
    try {
      const newPost = await postService.create(req.body, req.files.picture);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(501).send(error);
    }
  }
  async delete(req, res) {
    try {
      const post = await postService.delete(req.params.id);
      res.status(201).ison(post);
    } catch (error) {
      res.status(501).ison(error);
    }
  }

}

module.exports = new PostController();
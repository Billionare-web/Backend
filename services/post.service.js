const PostModel = require("../models/post.model");

class PostService {
  async getPosts() {
    const posts = await PostModel.find();

    return posts;
  }

  async createPost(postData) {
    const newPost = PostModel.create(postData)

    return  newPost
  }
}

module.exports = new PostService();

const PostModel = require("../models/post.model");
const fileService = require("./file.service");

class PostService {
  async getPosts() {
    const posts = await PostModel.find();

    return posts;
  }

  async createPost(post, picture) {
    const fileName = fileService.save(picture);
    const newPost = await PostModel.create( {...post, picture: fileName} );
    return newPost;
  }

  async delete(id) {
    const post = PostModel.findByIdAndDelete(id);
    return post;
  }
}

module.exports = new PostService();

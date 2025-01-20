const PostModel = require('../models/post.model');

class PostService {
    async getPosts() {
        const posts = await PostModel.find();

        return posts;
    }
}

module.exports = new PostService();
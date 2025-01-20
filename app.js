const express = require("express");
const mongoose = require("mongoose");
const PostModel = require('./models/post.model');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/post', require('./routes/post.route'));

app.post('/api/post', async (req, res) => {
try {
  const newPost = await PostModel.create(req.body);
  res.status(201).send(newPost);
} catch (error) {
  res.status(501).send(error)
}
});

const PORT = process.env.PORT;

const DB_URL = process.env.DB_URL;

const connectBD = () => {
  const db = mongoose.connect(DB_URL);
  app.listen(PORT, () =>
   console.log(`Listen to -- http://localhost:${PORT}`)
  );
  console.log('DB Connected');
};

connectBD();

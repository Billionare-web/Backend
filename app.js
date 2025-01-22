const express = require("express");
const { default: mongoose } = require("mongoose");
const fileUpload = require('express-fileupload');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.static());
app.use(fileUpload());

app.use("/api/post", require("./routes/post.route"));

app.use('/api/auth', require('./routes/auth.route'))

const DB_URL = process.env.DB_URL;

const PORT = process.env.PORT;

const connectBD = () => {
  const db = mongoose.connect(DB_URL);
  app.listen(PORT, () => console.log(`Listen to -- http://localhost:${PORT}`));
  console.log("DB Connected");
};

connectBD();

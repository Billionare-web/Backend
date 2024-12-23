const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const PORT = 8080;

app.get("/home/blog", (req, res) => {
  try {
    res.status(200).send("Hello world");
  } catch (error) {
    console.log(error);
  }
});

const DB_URL =
  "mongodb+srv://Muhammadrasul:smb1102.m@cluster0.8ho8t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectBDFunc = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Listen to -- https://localhost:${PORT}`);
    });
    console.log("Connect to DB");
  } catch (error) {
    console.log(`Error in connect to DB -- ${error}`);
  }
};
connectBDFunc();

app.post("/api/post", (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    res.send(`My full Name is ${firstName} ${lastName}`);
  } catch (error) {
    res.send(`Error this is Post req -- $(error)`);
  }
});

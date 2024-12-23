const express = require("express");
const app = express();
const port = 5500;
const cors = require("cors");
const mongoose = require("mongoose");
const DataModel = require("./Model/data.js");

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://portfolio-mern-rouge.vercel.app",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://kishanurankar:kishanurankar@cluster0.qqlsq.mongodb.net/dummydatabase?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tlsInsecure: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.get("/data", async (req, res) => {
  const data = await DataModel.find();
  res.json(data);
});

app.post("/collection", async (req, res) => {
  try {
    console.log("Request body : ", req.body);
    let data = await DataModel.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`listening on port: http://localhost:${port}`);
});

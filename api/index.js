import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./db/database.js";

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => {
  res.json({ msg: "This is home route" });
});

app.get("/about", (req, res) => {
  res.json({ msg: "This is about route" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, () => {
  console.log("app is running in port ", port);
});

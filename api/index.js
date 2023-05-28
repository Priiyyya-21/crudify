import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./db/database.js";
import UserRouter from "./routes/User.js";
import BlogRouter from "./routes/blog.js";

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors({ credentials: true }));

// Using user route
app.use("/api/user", UserRouter);
// Using blog route
app.use("/api/blog",BlogRouter);

app.listen(port, () => {
  console.log("app is running in port ", port);
});

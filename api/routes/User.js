import express from "express";

import User from "../models/UserSchema.js";

const UserRouter = express.Router();

UserRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    res.status(200).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ msg: "error" });
  }
});

export default UserRouter;

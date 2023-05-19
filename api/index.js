import express from 'express';
import dotenv from "dotenv"

dotenv.config()

const app=express()

app.get("/",(req,res)=>{
     res.send("this is api");
})

app.post("/about",(req,res)=>{
    res.send("this is about")
})

const port=process.env.PORT;

app.listen(port,()=>{
    console.log("app is running in port ",port);
})
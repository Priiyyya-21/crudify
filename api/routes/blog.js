import Blog from "../models/BlogSchema.js";
import express from "express";
import getAuth from "../middleware/auth.js";

const BlogRouter = express.Router()
BlogRouter.use(express.json())

const response = (res, status, result) => {
    res.status(status).json(result);
}

BlogRouter.get("/", async (req, res) => {
    await Blog.find()
        // .populate("user", "-password").sort("-createdOn")
        .then(result => {
            response(res, 200, result)
        })
        .catch(err => {
            // console.log(err);
            response(res, 400, { error: err })
        })
})
BlogRouter.post("/create", getAuth, async (req, res) => {
    try {
        const { title, content, image } = req.body
        if (title && content) {
            const blog =new Blog({
                title,content,image,user:req.userId
            })
            await blog.save()
            // console.log(title, image, content, req.auth);
            response(res, 200, { msg: "blog created", blog:blog })
        }
    } catch (error) {

    }
})

export default BlogRouter;
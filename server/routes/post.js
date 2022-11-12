import express from "express";
import auth from "../middlewares/auth.js";
import { getAllPosts, getPost, createPost } from "../controllers/post.js";

const router = express.Router()

router.get("/", getAllPosts)
router.get("/:id", getPost)

router.post("/create", auth, createPost)
router.post("/comment")
router.post("/delete/:id")

export default router

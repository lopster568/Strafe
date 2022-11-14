import express from "express";
import auth from "../middlewares/auth.js";
import { getAllPosts, getPost, createPost, commentPost, replyComment } from "../controllers/post.js";

const router = express.Router()

router.get("/", getAllPosts)
router.get("/:id", getPost)

router.post("/create", auth, createPost)
router.post("/comment/:id", auth, commentPost)
router.post("/reply/:id", auth, replyComment)
router.post("/delete/:id")

export default router

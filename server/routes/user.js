import express from "express";
import { loginUser, registerUser, logout } from "../controllers/user.js";

const router = express.Router()

router.post("/login", loginUser)
router.post("/signup", registerUser)
router.post("/logout", logout)

export default router

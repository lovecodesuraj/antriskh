import express from "express";
import { announcement } from "../controllers/posts.js";

const router =express.Router();

router.post("/announcement",announcement);

export default router; 
import express from "express";
import { announcements } from "../controllers/get.js";

const router =express.Router();

router.get("/announcements",announcements);

export default router; 
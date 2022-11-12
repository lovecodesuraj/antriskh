import mongoose from "mongoose";
import { postSchema } from "./schemas.js";

const Post=mongoose.model('Post',postSchema);
import mongoose from "mongoose";
import { postSchema , announcementSchema} from "./schemas.js";

const Post=mongoose.model('Post',postSchema);
const Announcement=mongoose.model("Announcement",announcementSchema);

export {Post , Announcement}
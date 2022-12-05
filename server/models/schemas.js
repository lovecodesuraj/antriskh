import { Schema } from "mongoose";

const postSchema = new Schema({
    title:String,
    details:String,
    creator:String,
    date:String,
    
})

const announcementSchema=new Schema ({
    title:String,
    details:String,
    creator:String,
    date:String,
})

export {postSchema , announcementSchema}
import { Schema } from "mongoose";
const postSchema = new Schema({
    title:String,
    details:String,
})

export {postSchema}
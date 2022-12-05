import express from "express";
import mongoose from "mongoose";
import { Schema } from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
import connectToDb from "./db.js"; 
import postRoutes from "./routes/posts.js"
import getRoutes from "./routes/get.js"
// import postRoutes from './routes/astrons.js' 
// import multer from "multer";
// const upload = multer({dest:"uploads/"});





const app=express();



app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended: true }));

app.use('/post',postRoutes);
app.use('/get',getRoutes);

connectToDb();
// app.use("/file",upload);


// app.post("./addPost",upload.single('photo'),(req,res,next)=>{
//     res.send("posted");
// })
app.listen(5000,function(res){
    console.log("server is running at port 5000");
})

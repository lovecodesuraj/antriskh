import express from "express";
import mongoose from "mongoose";
import { Schema } from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
import connectToDb from "./db.js";
import postRoutes from './routes/astrons.js' 



const app=express();
 app.use('/astrons',postRoutes);


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({ limit:"30mb",extended: true }));
app.use(cors());


connectToDb();


app.listen(5000,function(res){
    console.log("server is running at port 5000");
})

import { Announcement } from "../models/models.js"
export const announcements=(req,res)=>{
   Announcement.find({},(err,docs)=>{
      if(err){
         console.log(err)
      }else{

         console.log(docs)
         res.status(200).json(docs);
      }
   });
}
import { Router } from "express";
import multer from "multer";

const storage= multer.diskStorage({
      url:"",
     options:{
        useNewUrlParser:true,
        useUnifiedTopology:true,
     },
     file:(req,file)=>{
        const match=['image/png',"image/jpeg"];
       if(match.indexOf(file.mimetype)===-1){
          const filename=`${Date,now()}-${file.originalname}`;
          return filename;
       }
       return {bucketName:"photos",
          filename:`${Date,now()}-${file.originalname}`,
    
    
    }
     }
})

export default multer({storage});
import mongoose from "mongoose";

const connectToDb= async ()=>{
   try {
      const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,
      }
      await mongoose.connect('mongodb://localhost:27017/astrons',connectionParams)
       console.log("connected to databse");
    } catch (error) {
       console.log(error);
       console.log("could not connect to the database ");
   }
} 
export default connectToDb;
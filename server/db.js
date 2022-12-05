import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const connectToDb= async ()=>{
   try {
      const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,
      }
       mongoose.connect(`mongodb+srv://suraj:${process.env.mongoPass}@cluster0.sop60is.mongodb.net/?retryWrites=true&w=majority`,connectionParams)
       console.log("connected to databse");
    } catch (error) {
       console.log(error);
       console.log("could not connect to the database ");
   }
} 
export default connectToDb;
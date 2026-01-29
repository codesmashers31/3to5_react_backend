import mongoose from "mongoose";

const connectDB = async()=>{

    try {
  
        await mongoose.connect(process.env.MONGO_URL)

        console.log('db Connected');
        

        
    } catch (error) {
         console.log('Issue with db',error);
    }

}


export default connectDB;
import mongoose from 'mongoose'



const connectDb = async()=>{


    try {

    await mongoose.connect(process.env.MONGO_URL)

    console.log(`Mongodb connected ${mongoose.connection.host}`);
    

        
    } catch (error) {


        console.log('Error',error);
        
        
    }

}


export default connectDb
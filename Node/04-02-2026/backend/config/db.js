
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/crudDB"
    );

    console.log("MongoDB Connected");
    console.log("Host:", conn.connection.host);
    console.log("DB:", conn.connection.name);

  } catch (error) {
    console.error("DB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;

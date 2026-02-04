import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  duration: String
});

export default mongoose.model("Course", courseSchema);

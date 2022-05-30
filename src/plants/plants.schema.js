import mongoose from "mongoose";

const plantsSchema = mongoose.Schema({
  status: String
});

const Plants = mongoose.model("plants", plantsSchema);
export default Plants;

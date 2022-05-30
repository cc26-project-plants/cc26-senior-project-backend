import mongoose from "mongoose";

const plantsSchema = mongoose.Schema(
  {
    userid: String,
    plantName: String,
    plantType: String,
  },
  { timestamps: true },
);

const Plants = mongoose.model("plants", plantsSchema);
export default Plants;

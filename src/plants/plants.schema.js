import mongoose from "mongoose";

const plantsSchema = mongoose.Schema(
  {
    userid: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    plantName: String,
    plantType: String,
  },
  { timestamps: true },
);

const Plants = mongoose.model("plants", plantsSchema);
export default Plants;

import mongoose from "mongoose";

const plantStatsSchema = mongoose.Schema({
  status: String
});

const PlantStats = mongoose.model("plant_stats", plantStatsSchema);
export default PlantStats;

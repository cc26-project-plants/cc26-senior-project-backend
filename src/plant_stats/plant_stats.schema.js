import mongoose from "mongoose";

const plantStatsSchema = mongoose.Schema(
  {
    lightLevel: Number,
    soilWaterLevel: Number,
    humidityLevel: Number,
    temperature: Number,
    plantId: String,
  },
  { timestamps: true },
);

const PlantStats = mongoose.model("plant_stats", plantStatsSchema);
export default PlantStats;

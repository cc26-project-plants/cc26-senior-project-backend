import PlantStats from "./plant_stats.schema.js";
import plantStatsModel from "./plant_stats.model.js";

// plantStatsModel.someFunc

export default {
  async getAllPlantStats(req, res) {
    try {
      res.status(200).send("response from PlantStats");
      // const allPlantStats = await PlantStats.find({});
      // res.status(200).send({ success: true, data: allPlantStats });
    } catch(error) {
      res.status(400).send({ success: false });
    }
  },
};

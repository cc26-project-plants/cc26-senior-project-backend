import PlantStats from "./plant_stats.schema.js";
import plantStatsModel from "./plant_stats.model.js";

export default {
  async getAllPlantStats(req, res) {
    const allPlantStats = await plantStatsModel.getAllPlantStats();

    if (!allPlantStats) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: allPlantStats });
  },

  async getLatest12PlantStats(req, res) {
    const id = req.params.id;
    const latest12PlantStats = await plantStatsModel.getLatest12PlantStats(id);

    if (!latest12PlantStats) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: latest12PlantStats });
  },

  async getById(req, res) {
    const id = req.params.id;
    console.log("id", req.params.id);
    const filteredPlantStats = await plantStatsModel.getById(id);

    if (!filteredPlantStats) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: filteredPlantStats });
  },

  async createPlantStats(req, res) {
    const data = req.body;
    const newPlantStats = await plantStatsModel.createPlantStats(data);

    if (!newPlantStats) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: newPlantStats });
  },
};

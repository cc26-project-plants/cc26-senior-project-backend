import email_to_userIdModel from "../email_to_userId/email_to_userId.model.js";
import plantStatsModel from "./plant_stats.model.js";

export default {
  async getAllPlantStats(req, res) {
    const allPlantStats = await plantStatsModel.getAllPlantStats();

    if (!allPlantStats) {
      res.status(400).send({ success: false });
      return;
    }

    const extractedPlantStats = [];
    allPlantStats.forEach((doc) => {
      extractedPlantStats.push({
        plantId: doc.id,
        data: doc.data(),
      });
    });
    res.status(200).send({ success: true, data: extractedPlantStats });
  },

  async getById(req, res) {
    const id = req.params.id;
    const foundPlantStats = await plantStatsModel.getById(id);

    if (!foundPlantStats) {
      res.status(400).send({ success: false });
      return;
    }

    const extractedPlantStats = {
      plantId: foundPlantStats.id,
      data: foundPlantStats.data(),
    };

    res.status(200).send({ success: true, data: extractedPlantStats });
  },

  async getLatest12PlantStats(req, res) {
    const id = req.params.id;
    const latest12PlantStats = await plantStatsModel.getLatest12PlantStats(id);

    if (!latest12PlantStats) {
      res.status(400).send({ success: false });
      return;
    }

    const extractedPlantStats = {
      plantId: latest12PlantStats.id,
      data: latest12PlantStats.data(),
    };
    const sortedData = extractedPlantStats.data.status;
    const querylength = sortedData.length - 12;
    const slicedData = sortedData.slice(querylength);

    res.status(200).send({ success: true, data: slicedData });
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

  async updatePlantStats(req, res) {
    const data = req.body;
    const id = req.params.id;

    data.timestamp = new Date();
    const updatedPlantStats = await plantStatsModel.updatePlantStats(id, data);

    if (!updatedPlantStats) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: updatedPlantStats });
  },
};

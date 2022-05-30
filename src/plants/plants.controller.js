import Plants from "./plants.schema.js";
import plantsModel from "./plants.model.js";

// plantsModel.someFunc

export default {
  async getAllPlants(req, res) {
    try {
      // res.status(200).send("response from Plants");
      const allPlants = await Plants.find({});
      res.status(200).send({ success: true, data: allPlants });
    } catch (error) {
      res.status(400).send({ success: false });
    }
  },

  async createPlant(req, res) {
    const data = req.body;
    const newPlant = await plantsModel.createPlant(data);

    if (!newPlant) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: newPlant });
  },
};

import plantsModel from "./plants.model.js";

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

  async getById(req, res) {
    const id = req.params.id;
    const foundPlants = await plantsModel.getById(id);

    if (!foundPlants) {
      res.status(400).send({ success: false });
      return;
    }
    const extractedPlants = {
      id: foundPlants.id,
      data: foundPlants.data(),
    };

    res.status(200).send({ success: true, data: extractedPlants });
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

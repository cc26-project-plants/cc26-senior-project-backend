import plantsModel from "./plants.model.js";

export default {
  async getAllPlants(req, res) {
    try {
      res.status(200).send("response from Plants");
      // const allPlants = await Plants.find({});
      // res.status(200).send({ success: true, data: allPlants });
    } catch(error) {
      res.status(400).send({ success: false });
    }
  },
};

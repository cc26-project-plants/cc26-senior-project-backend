import Plants from "./plants.schema.js";

export default {
  async getAllPlants() {
    try {
      const allPlants = await Plants.find({});
      if (!allPlants) return false;
      return allPlants;
    } catch (error) {
      return false;
    }
  },

  async createPlant(newData) {
    try {
      const newPlants = await Plants.create(newData);
      return newPlants;
    } catch (error) {
      return false;
    }
  },
};

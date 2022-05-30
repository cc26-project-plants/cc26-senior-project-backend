import db from "../firestore.js";

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

  async createPlant(data) {
    try {
      const newPlant = await Plants.create(data);
      if (!newPlant) return false;
      return newPlant;
    } catch (error) {
      return false;
    }
  },
};

import db from "../firestore.js";

export default {
  async getAllPlants() {
    try {
      const allPlants = await db.collection("plants").get();
      if (!allPlants) return false;
      return allPlants;
    } catch (error) {
      return false;
    }
  },

  async getbyId(id) {
    try {
      const filteredPlant = await db.collection("plants").doc(id).get();
      if (!filteredPlant) return false;
      return filteredPlant;
    } catch (error) {
      return false;
    }
  },

  async createPlant(data, userId) {
    try {
      const newPlantRef = await db.collection("plants").doc(data.plantId);
      //check data.plantType
      //extract profile data corresponding the data.plantType from anyware.
      const resPlant = await newPlantRef.set(
        {
          plantname: data.plantName,
          type: data.plantType,
          userId: userId,
        },
        { merge: true },
      );

      if (!resPlant) return false;
      return resPlant;
    } catch (error) {
      return false;
    }
  },
};

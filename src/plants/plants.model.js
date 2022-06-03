import db from "../firestore.js";
import profiles from "../profiles/profiles.js";

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

  async getById(id) {
    try {
      const filteredPlant = await db.collection("plants").doc(id).get();
      if (!filteredPlant.data()) return false;
      return filteredPlant.data();
    } catch (error) {
      return false;
    }
  },

  async createPlant(data, userId) {
    try {
      const newPlantRef = await db.collection("plants").doc(data.plantId);
      const targettype = data.plantType;
      const setProfile = profiles[targettype];

      const resPlant = await newPlantRef.set(
        {
          plantname: data.plantName,
          type: data.plantType,
          profile: setProfile,
          userId: userId,
        },
        { merge: true },
      );

      if (!resPlant) return false;
      return setProfile;
    } catch (error) {
      return false;
    }
  },

  async addPlant(data, userId) {
    try {
      const newPlantRef = await db.collection("plants").doc(data.plantId);
      const targettype = data.plantType;
      const setProfile = profiles[targettype];

      const newPlant = await newPlantRef.set(
        {
          plantName: data.plantName,
          type: data.plantType,
          profile: setProfile,
          userId: userId,
        },
        { merge: true },
      );

      if (!newPlant) return false;
      return newPlant;
    } catch (error) {
      return false;
    }
  },
};

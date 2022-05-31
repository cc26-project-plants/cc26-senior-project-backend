import db from "../firestore.js";
import { FieldValue } from "@google-cloud/firestore";

export default {
  async getAllPlantStats() {
    try {
      const allPlantStats = await db.collection("plant_stats").get();
      if (!allPlantStats) return false;
      return allPlantStats;
    } catch (error) {
      return false;
    }
  },

  async getById(id) {
    try {
      const filteredPlantStats = await db
        .collection("plant_stats")
        .doc(id)
        .get();
      if (!filteredPlantStats) return false;
      return filteredPlantStats;
    } catch (error) {
      return false;
    }
  },

  // async getLatest12PlantStats(id) {
  //   try {
  //     const filteredPlantStats = await PlantStats.find({ plantId: id });
  //     if (!filteredPlantStats) return false;
  //     const latest12PlantStats = filteredPlantStats.slice(0, 11);
  //     return latest12PlantStats;
  //   } catch (error) {
  //     return false;
  //   }
  // },

  async createPlantStats(data) {
    try {
      const newPlantStats = await db.collection("plant_stats").add(data);
      if (!newPlantStats) return false;
      return newPlantStats;
    } catch (error) {
      return false;
    }
  },

  async updatePlantStats(data, id) {
    try {
      const plantStatsRef = db.collection("plant_stats").doc(id);
      console.log("plantStatsRef", plantStatsRef);
      const newPlantStats = await plantStatsRef.update({
        sensorData: FieldValue.arrayUnion(data),
      });

      if (!newPlantStats) return false;
      return newPlantStats;
    } catch (error) {
      console.log("anything wrong in newPlantstas");
      return false;
    }
  },
};

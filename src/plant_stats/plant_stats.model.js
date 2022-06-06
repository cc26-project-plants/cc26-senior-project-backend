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

  async getLatest12PlantStats(id) {
    try {
      const filteredPlantStats = await db
        .collection("plant_stats")
        .doc(id)
        .get();
      if (!filteredPlantStats.data()) return false;
      return filteredPlantStats.data();
    } catch (error) {
      return false;
    }
  },

  async createPlantStats(data) {
    try {
      const newPlantStats = await db.collection("plant_stats").add(data);
      if (!newPlantStats) return false;
      return newPlantStats;
    } catch (error) {
      return false;
    }
  },

  async updatePlantStats(id, data) {
    try {
      const plantStatsRef = db.collection("plant_stats").doc(id);

      const newPlantStats = await plantStatsRef.update({
        status: FieldValue.arrayUnion(data),
      });

      if (!newPlantStats) return false;
      return newPlantStats;
    } catch (error) {
      return false;
    }
  },
};

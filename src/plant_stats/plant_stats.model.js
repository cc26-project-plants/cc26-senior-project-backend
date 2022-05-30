import db from "../firestore.js";

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
      const filteredPlantStats = await db.collection("plant_stats").doc(id).get();
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
};













// export default {
//   async getAllPlantStats() {
//     try {
//       const allPlantStats = await PlantStats.find({});
//       if (!allPlantStats) return false;
//       return allPlantStats;
//     } catch (error) {
//       return false;
//     }
//   },

//   async getById(id) {
//     try {
//       const filteredPlantStats = await PlantStats.find({ plantId: id });
//       console.log("filterdata", filteredPlantStats);
//       if (!filteredPlantStats) return false;
//       return filteredPlantStats;
//     } catch (error) {
//       return false;
//     }
//   },

//   async getLatest12PlantStats(id) {
//     try {
//       const filteredPlantStats = await PlantStats.find({ plantId: id });
//       if (!filteredPlantStats) return false;
//       const latest12PlantStats = filteredPlantStats.slice(0, 11);
//       return latest12PlantStats;
//     } catch (error) {
//       return false;
//     }
//   },

//   async createPlantStats(data) {
//     try {
//       const newPlantStats = await PlantStats.create(data);
//       if (!newPlantStats) return false;
//       return newPlantStats;
//     } catch (error) {
//       return false;
//     }
//   },
// };

import db from "../firestore.js";
import { FieldValue } from "@google-cloud/firestore";

export default {
  async getAllUsers() {
    try {
      const allUsers = await db.collection("users").get();
      if (!allUsers) return false;
      return allUsers;
    } catch (error) {
      return false;
    }
  },

  async getByEmail(email) {
    try {
      const usersRef = await db.collection("users");
      const filteredId = await usersRef.doc(email).get();
      if (!filteredId.data()) return false;
      return filteredId.data();
    } catch (error) {
      return false;
    }
  },

  async getById(userId) {
    try {
      const filteredId = await db.collection("users").doc(userId).get();
      if (!filteredId.data()) return false;
      return filteredId.data();
    } catch (error) {
      return false;
    }
  },

  async createUser(data) {
    try {
      const origUsersRef = db.collection("users").doc();
      const addUserInfo = await origUsersRef.set(
        { userName: data.userName, email: data.email },
        { merge: true },
      );
      const newUserId = origUsersRef.id;
      const addPlantInfo = await origUsersRef.update({
        plantName: FieldValue.arrayUnion(data.plantName),
        plantId: FieldValue.arrayUnion(data.plantId),
      });

      if (!origUsersRef) return false;
      return origUsersRef;
    } catch (error) {
      return false;
    }
  },

  async addPlant(data, userId) {
    try {
      const origUsersRef = await db.collection("users").doc(userId);
      const addPlantInfo = await origUsersRef.update({
        plantName: FieldValue.arrayUnion(data.plantName),
        plantId: FieldValue.arrayUnion(data.plantId),
      });
      if (!origUsersRef) return false;
      return origUsersRef;
    } catch (error) {
      return false;
    }
  },
};

import db from "../firestore.js";

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

  async getByUsername(username) {
    try {
      const filteredUser = await db
        .collection("users")
        .get({ username: username });
      console.log("filteredUser", filteredUser);
      if (!filteredUser) return false;
      return filteredUser;
    } catch (error) {
      return false;
    }
  },

  async createUser(data) {
    try {
      const newUser = db.collection("users").doc();
      const res = await newUser.set(
        { username: data.userName, plantId: data.plantId },
        { merge: true },
      );
      if (!newUser) return false;
      return newUser;
    } catch (error) {
      return false;
    }
  },
};

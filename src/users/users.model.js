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

  async getByEmail(userId) {
    try {
      const usersRef = await db.collection("users");
      // console.log("here is Usermodel!", userId);
      const filteredUser = await usersRef.doc(userId).get();
      // console.log("filtered on userModel", filteredUser.data());
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
        { username: data.userName, email: data.email, plantId: data.plantId },
        { merge: true },
      );
      if (!newUser) return false;
      return newUser;
    } catch (error) {
      return false;
    }
  },
};

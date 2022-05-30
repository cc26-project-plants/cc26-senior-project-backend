import db from "../firestore.js";

export default {
  async getAllUsers() {
    try {
      const allUsers = await Users.find({});
      if (!allUsers) return false;
      return allUsers;
    } catch (error) {
      return false;
    }
  },

  async getByUsername(username) {
    try {
      const filteredUser = await Users.find({ username: username });
      console.log("filteredUser", filteredUser);
      if (!filteredUser) return false;
      return filteredUser;
    } catch (error) {
      return false;
    }
  },

  async createUser(data) {
    try {
      const newUser = await Users.create(data);
      if (!newUser) return false;
      return newUser;
    } catch (error) {
      return false;
    }
  },
};

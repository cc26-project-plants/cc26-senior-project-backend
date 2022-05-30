import Users from "./users.schema.js";

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

  async getByUsername(givenName) {
    try {
      const filteredUser = await Users.find({ username: givenName });
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

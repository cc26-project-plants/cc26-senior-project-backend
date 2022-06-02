import plantsModel from "../plants/plants.model.js";
import usersModel from "./users.model.js";

export default {
  async getAllUsers(req, res) {
    try {
      const allUsers = await usersModel.getAllUsers();

      if (!allUsers) {
        res.status(400).send({ success: false });
        return;
      }

      const extractedUsers = [];
      allUsers.forEach((doc) => {
        extractedUsers.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      res.status(200).send({ success: true, data: extractedUsers });
    } catch (error) {
      res.status(400).send({ success: false });
    }
  },

  //which key will be the best for specifying a specific user info.
  async getByUsername(req, res) {
    const givenName = req.params.id;
    console.log("givenName", givenName);
    const filteredUser = await usersModel.getByUsername(givenName);

    if (!filteredUser) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: filteredUser });
  },

  async createUser(req, res) {
    const data = req.body;
    const newUser = await usersModel.createUser(data);
    const userId = await newUser.id;
    const newPlants = await plantsModel.createPlant(data, userId);
    const resData = await [newUser, newPlants];

    if (!newUser) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: resData });
  },
  // updateUser? for adding new plants
};

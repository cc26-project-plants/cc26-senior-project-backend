import email_to_userIdModel from "../email_to_userId/email_to_userId.model.js";
import usersModel from "../users/users.model.js";
import plantsModel from "./plants.model.js";

export default {
  async getAllPlants(req, res) {
    try {
      const allPlants = await plantsModel.getAllPlants();

      if (!allPlants) {
        res.status(400).send({ success: false });
        return;
      }

      const extractedPlants = [];
      allPlants.forEach((doc) => {
        extractedPlants.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      res.status(200).send({ success: true, data: extractedPlants });
    } catch (error) {
      res.status(400).send({ success: false });
    }
  },

  async getById(req, res) {
    const id = req.params.id;
    ////check sign up status
    const data = req.body;
    const checkSignUp = await email_to_userIdModel.checkExistenceOfDocument(
      data.email,
    );
    if (!checkSignUp) {
      res.status(400).send({ success: false });
      return;
    }
    ////check sign up status

    const foundPlants = await plantsModel.getById(id);

    if (!foundPlants) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: foundPlants });
  },

  async createPlant(req, res) {
    const data = req.body;
    const newPlant = await plantsModel.createPlant(data);

    if (!newPlant) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: newPlant });
  },

  async addPlant(req, res) {
    const data = req.body;
    const userIdFromEmail = await email_to_userIdModel.getById(data.email);
    const newPlant = await plantsModel.addPlant(data, userIdFromEmail.userId);
    const updateUserInfo = await usersModel.addPlant(
      data,
      userIdFromEmail.userId,
    );

    const updatedUserData = await usersModel.getById(userIdFromEmail.userId);

    const resData = await {
      userName: updatedUserData.username,
      plantName: updatedUserData.plantName,
      plantId: updatedUserData.plantId,
    };

    if (!newPlant) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: resData });
  },
};

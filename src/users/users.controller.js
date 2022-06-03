import plantsModel from "../plants/plants.model.js";
import usersModel from "./users.model.js";
import emailToUserIdModel from "../email_to_userId/email_to_userId.model.js";

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

  async getByEmail(req, res) {
    const email = req.params.id;
    const userIdObj = await emailToUserIdModel.getById(email);
    const filteredUser = await usersModel.getByEmail(userIdObj.userId);
    console.log("filtered USer", filteredUser);

    const resData = await {
      userName: filteredUser.userName,
      plantName: filteredUser.plantName,
      plantId: filteredUser.plantId,
    };

    if (!filteredUser) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: resData }); // usename, plantname, planttype, plantprofile
  },

  async createUser(req, res) {
    const data = req.body;
    const newUser = await usersModel.createUser(data);
    const userId = await newUser.id;
    const plantProfile = await plantsModel.createPlant(data, userId);
    const newEmailToUserId = await emailToUserIdModel.createEmailToUserIds(
      userId,
      data.email,
    );

    const createdUserData = await usersModel.getById(userId);
    const resData = await {
      userName: createdUserData.userName,
      plantName: createdUserData.plantName,
      plantId: createdUserData.plantId,
    };

    if (!newUser) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: resData });
  },
};

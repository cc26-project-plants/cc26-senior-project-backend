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

    const userResult = await filteredUser.data();
    const plantInfo = await plantsModel.getbyId(userResult.plantId);
    const plantResult = await plantInfo.data();

    const resData = await {
      userName: userResult.username,
      plantName: plantResult.plantname,
      plantType: plantResult.type,
      profile: plantResult.profile,
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

    const resData = await {
      userName: data.userName,
      plantName: data.plantName,
      planttype: data.plantType,
      profile: plantProfile,
    };

    if (!newUser) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: resData });
  },
  // updateUser? for adding new plants
};

import plantsModel from "../plants/plants.model.js";
import usersModel from "./users.model.js";
import email_to_userIdModel from "../email_to_userId/email_to_userId.model.js";

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
    ////check sign up status
    const checkSignUp = await email_to_userIdModel.checkExistenceOfDocument(
      email,
    );
    if (!checkSignUp) {
      res.status(400).send({ success: false });
      return;
    }
    ////check sign up status

    const userIdObj = await email_to_userIdModel.getById(email);
    const filteredUser = await usersModel.getByEmail(userIdObj.userId);

    const resData = await {
      userId: userIdObj.userId,
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
    const newEmailToUserId = await email_to_userIdModel.createEmailToUserIds(
      userId,
      data.email,
    );

    const createdUserData = await usersModel.getById(userId);
    const resData = await {
      userId: newUser.id,
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

  // async loginUser(req, res) {
  //   const email = req.params.email;
  //   const checkSignUp = await email_to_userIdModel.checkExistenceOfDocument(
  //     email,
  //   );
  //   if (!checkSignUp) {
  //     res.status(400).send({ success: false });
  //     return;
  //   }
  //   const userId = await checkSignUp.userId;
  //   const filteredUser = await usersModel.getById(userId);

  //   const resData = await {
  //     userName: filteredUser.userName,
  //     plantName: filteredUser.plantName,
  //     plantId: filteredUser.plantId,
  //   };

  //   if (!filteredUser) {
  //     res.status(400).send({ success: false });
  //     return;
  //   }
  //   res.status(200).send({ success: true, data: resData }); // usename, plantname, planttype, plantprofile
  // },
};

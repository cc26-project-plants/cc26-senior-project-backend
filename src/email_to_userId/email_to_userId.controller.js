import emailToUserIdModel from "./email_to_userId.model.js";

export default {
  async getAllEmailToUserId(req, res) {
    try {
      const allEmailToUserId = await emailToUserIdModel.getAllEmailToUserId();

      if (!allEmailToUserId) {
        res.status(400).send({ success: false });
        return;
      }

      const extractedEmailToUserIds = [];
      allEmailToUserId.forEach((doc) => {
        extractedEmailToUserIds.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      res.status(200).send({ success: true, data: extractedEmailToUserIds });
    } catch (error) {
      res.status(400).send({ success: false });
    }
  },

  async getById(req, res) {
    const id = req.params.id;
    const foundPlants = await emailToUserIdModel.getById(id);

    if (!foundPlants) {
      res.status(400).send({ success: false });
      return;
    }
    const extractedPlants = {
      id: foundPlants.id,
      data: foundPlants.data(),
    };

    res.status(200).send({ success: true, data: extractedPlants });
  },
};

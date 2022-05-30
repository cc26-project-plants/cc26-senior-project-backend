import usersModel from "./users.model.js";

export default {
  async getAllUsers(req, res) {
    try {
      // res.status(200).send("response from Users");
      const allUsers = await Users.find({});
      res.status(200).send({ success: true, data: allUsers });
    } catch (error) {
      res.status(400).send({ success: false });
    }
  },

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
    console.log("posted user", data);
    const newUser = await usersModel.createUser(data);
    if (!newUser) {
      res.status(400).send({ success: false });
      return;
    }
    res.status(200).send({ success: true, data: newUser });
  },
};

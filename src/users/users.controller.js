import usersModel from "./users.model.js";

export default {
  async getAllUsers(req, res) {
    try {
      res.status(200).send("response from Users");
      // const allUsers = await Users.find({});
      // res.status(200).send({ success: true, data: allUsers });
    } catch(error) {
      res.status(400).send({ success: false });
    }
  },
};

import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  status: String
});

const Users = mongoose.model("users", usersSchema);
export default Users;

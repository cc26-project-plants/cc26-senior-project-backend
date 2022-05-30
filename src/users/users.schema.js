import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true },
);

const Users = mongoose.model("users", usersSchema);
export default Users;

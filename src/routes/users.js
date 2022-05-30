import express from "express";
import usersController from "../users/users.controller.js";

const router = express.Router();

router.get("/", usersController.getAllUsers);

export default router;

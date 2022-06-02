import express from "express";
import usersController from "../users/users.controller.js";

const router = express.Router();

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getByEmail);
router.post("/", usersController.createUser);

export default router;

import express from "express";
import plantsController from "../plants/plants.controller.js";

const router = express.Router();

router.get("/", plantsController.getAllPlants);

export default router;

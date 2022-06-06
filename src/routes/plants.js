import express from "express";
import plantsController from "../plants/plants.controller.js";

const router = express.Router();

router.get("/", plantsController.getAllPlants);
router.get("/:id", plantsController.getById);
router.post("/", plantsController.createPlant);

export default router;

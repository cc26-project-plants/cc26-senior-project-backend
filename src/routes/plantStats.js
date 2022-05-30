import express from "express";
import plantStatsController from "../plant_stats/plant_stats.controller.js";

const router = express.Router();

router.get("/", plantStatsController.getAllPlantStats);
router.get("/:id/latest", plantStatsController.getLatest12PlantStats);
router.get("/:id", plantStatsController.getById);

router.post("/", plantStatsController.createPlantStats);

export default router;

import express from "express";
import plantStatsController from "../plant_stats/plant_stats.controller.js";

const router = express.Router();

router.get("/", plantStatsController.getAllPlantStats);
router.get("/:id", plantStatsController.getById);
// router.get("/:id/latest", plantStatsController.getLatest12PlantStats);

router.post("/", plantStatsController.createPlantStats);
router.post("/:id", plantStatsController.updatePlantStats);

export default router;

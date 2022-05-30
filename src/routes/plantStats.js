import express from "express";
import plantStatsController from "../plant_stats/plant_stats.controller.js";

const router = express.Router();

router.get("/", plantStatsController.getAllPlantStats);

export default router;

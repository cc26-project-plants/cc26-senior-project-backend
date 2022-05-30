import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import cors from "cors";
import path from "path";

import plantsRoutes from "./src/routes/plants.js";
import plantStatsRoutes from "./src/routes/plantStats.js";
import usersRoutes from "./src/routes/users.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.use("/plants", plantsRoutes);
app.use("/plantStats", plantStatsRoutes);
app.use("/users", usersRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on : http://localhost:${PORT}`)))
  .catch(err => console.error(err));

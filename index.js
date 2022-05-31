import express from "express";
import 'dotenv/config';
import cors from "cors";

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

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

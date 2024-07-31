import { Router } from "express";
import authRoutes from "./auth.route.js";
import taskRoutes from "./task.route.js";

const v1Routes = Router();

v1Routes.use("/auth", authRoutes);

v1Routes.use("/tasks", taskRoutes);

export default v1Routes;

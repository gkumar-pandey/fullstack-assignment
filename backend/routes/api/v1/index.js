import { Router } from "express";
import authRoutes from "./auth.route.js";

const v1Routes = Router();

v1Routes.use("/auth", authRoutes);

export default v1Routes;

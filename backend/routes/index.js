import { Router } from "express";
import apiRoutes from "./api/index.js";

const routes = Router();

routes.use("/", apiRoutes);

export default routes;

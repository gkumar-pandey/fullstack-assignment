import { Router } from "express";
import {
  loginController,
  signupController,
} from "../../../controller/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/login", loginController);
authRoutes.post("/signup", signupController);

export default authRoutes;

import { Router } from "express";
import {
  deleteTaskController,
  createTaskController,
  updateTaskController,
  getTasksController,
} from "../../../controller/task.controller.js";
const taskRoutes = Router();

taskRoutes.get("/", getTasksController);
taskRoutes.post("/", createTaskController);
taskRoutes.put("/:taskId", updateTaskController);
taskRoutes.delete("/:taskId", deleteTaskController);

export default taskRoutes;

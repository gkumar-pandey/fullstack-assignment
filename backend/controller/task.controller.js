import Task from "../model/task.model";

const createTaskController = async (req, res) => {
  const userId = req.userId;
  const { title, description, status, priority, dueDate } = req.body;
  try {
    const newTask = new Task({
      title,
      description,
      status,
      user: userId,
      priority,
      dueDate,
    });
    await newTask.save();
    return res
      .status(200)
      .json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, error });
  }
};

const getTasksController = async (req, res) => {
  const userId = req.userId;
  try {
    const tasks = await Task.find({ user: userId });
    return res.status(200).json({ tasks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, error });
  }
};

const updateTaskController = async (req, res) => {
  const userId = req.userId;
  const { taskId } = req.params;
  const { title, description, status, priority, dueDate } = req.body;
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    if (task.user.toString() !== userId) {
      return res
        .status(401)
        .json({ message: "You are not authorized to update this task" });
    }
    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    task.priority = priority || task.priority;
    task.dueDate = dueDate || task.dueDate;
    await task.save();
    return res
      .status(200)
      .json({ message: "Task updated successfully", task: task });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, error });
  }
};

const deleteTaskController = async (req, res) => {
  const userId = req.userId;
  const { taskId } = req.params;
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    if (task.user.toString() !== userId) {
      return res
        .status(401)
        .json({ message: "You are not authorized to delete this task" });
    }
    await Task.findByIdAndDelete(taskId);
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message, error });
  }
};

export {
  createTaskController,
  getTasksController,
  updateTaskController,
  deleteTaskController,
};

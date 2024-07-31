import { Schema } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  status: {
    type: string,
    required: true,
    enum: ["To Do", "In Progress", "Under Review", "Finished"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  priority: {
    type: string,
    required: false,
    enum: ["Low", "Medium", "Urgent"],
  },
  dueDate: {
    type: Date,
    required: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;

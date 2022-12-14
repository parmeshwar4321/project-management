const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
  {
    task_name: {
      type: String,
    },
    task_description: {
      type: String,
    },
    priority: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "completed"],
    },
    project_id: {
      type: mongoose.Types.ObjectId,
      ref: "project",
    },
    planned_start_budget: {
      type: Number,
    },
    planned_start_date: {
      type: Date,
    },
    planned_end_date: {
      type: Date,
    },
    actual_start_date: {
      type: Date,
    },
    actual_end_date: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("task", taskSchema);
module.exports = Task;

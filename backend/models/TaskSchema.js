const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: { type: Boolean, default: false }
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = {
   Task,
}

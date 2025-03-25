const { Task  } = require("../models/TaskSchema");

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.json(tasks);
    } catch (error) {
       return res.status(500).json({ error: error });
    }
};

// Create a task
const createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Failed to create task" });
    }
};

// Update a task
const updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: "Failed to update task" });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete task" });
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
};

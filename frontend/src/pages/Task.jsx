import { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { fetchTasks, createTask, updateTask, removeTask } from "../services/Api";
import { TaskContext } from "../context/context";
import { useContext } from "react";


const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const { setLoading } = useContext(TaskContext)

  useEffect(() => {
    console.log(fetchTasks().then())
    fetchTasks().then(setTasks);
  }, []);

  const addTask = () => {
    setLoading(true)
    createTask(title).then((newTask) => {
      setTasks([...tasks, newTask]);
      setTitle("");
      setLoading(false)
    });
  };

  const toggleTask = (id, completed) => {
    updateTask(id, !completed).then((updatedTask) => {
      setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));
    });
  };

  const deleteTask = (id) => {
    removeTask(id).then(() => {
      setTasks(tasks.filter((task) => task._id !== id));
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
    <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Task Manager</h1>
      <TaskForm title={title} setTitle={setTitle} addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  </div>
  );
};

export default Task;

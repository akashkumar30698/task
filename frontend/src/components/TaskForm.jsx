import { useContext } from "react";
import { TaskContext } from "../context/context";


const TaskForm = ({ title, setTitle, addTask }) => {
     const { loading } = useContext(TaskContext)
    return (
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={addTask}   disabled={loading} >
        {loading ? "Adding..." : "Add Task"}
        </button>
      </div>
    );
  };
  
  export default TaskForm;
  
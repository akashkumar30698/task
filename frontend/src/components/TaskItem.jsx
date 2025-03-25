const TaskItem = ({ task, toggleTask, deleteTask }) => {
    return (
      <li>
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title}
        </span>
        <button onClick={() => toggleTask(task._id, task.completed)}>Toggle</button>
        <button onClick={() => deleteTask(task._id)}>Delete</button>
      </li>
    );
  };
  
  export default TaskItem;
  
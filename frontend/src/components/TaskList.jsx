import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="mt-4">
      {Array.isArray(tasks) && tasks.length > 0 ? (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <TaskItem key={task._id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;

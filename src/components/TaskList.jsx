import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) return <h1 className="text-white text-4xl font-bold text-center pt-3">No hay tareas guardadas</h1>;

  return (
    <ul className="grid grid-cols-4 gap-2">
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </ul>
  );
}

export default TaskList;

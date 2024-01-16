import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle == "") return 0;
    createTask({ title: taskTitle, description: taskDescription });
    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h2>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <input
          type="text"
          placeholder="Escribe tu tarea"
          value={taskTitle}
          onChange={(e) => {
            setTaskTitle(e.target.value);
          }}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Escribe la descripcion de la tarea"
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;

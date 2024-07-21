import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    console.log(tasks);
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Todo List</h1>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Добавь новую задачу"
            className="p-2 border border-gray-300 rounded-l-lg w-3/4"
          />
          <button
            onClick={addTask}
            className="p-2 bg-blue-500 text-white border border-blue-500 rounded-r-lg hover:bg-blue-700 transition duration-300"
          >
            Добавить задачу
          </button>
        </div>
        <ul className="list-none p-0">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-gray-50 border border-gray-300 p-2 mb-2 rounded-lg flex justify-between items-center"
            >
              {task}
              <button
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700 transition duration-300"
                onClick={() => removeTask(index)}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

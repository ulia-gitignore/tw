import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Добавь новую задачу"
        className="p-2 border border-gray-300 rounded-l-lg w-3/4"
      />
      <button
        onClick={handleAddTask}
        className="p-2 bg-blue-500 text-white border border-blue-500 rounded-r-lg hover:bg-blue-700 transition duration-300"
      >
        Добавить задачу
      </button>
    </div>
  );
};

export default TaskInput;

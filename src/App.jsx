import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Todo List</h1>
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} onRemoveTask={removeTask} />
      </div>
    </div>
  );
}

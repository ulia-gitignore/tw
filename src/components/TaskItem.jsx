import React from 'react';

const TaskItem = ({ task, onRemove }) => {
  return (
    <li className="bg-gray-50 border border-gray-300 p-2 mb-2 rounded-lg flex justify-between items-center">
      {task}
      <button
        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700 transition duration-300"
        onClick={onRemove}
      >
        Удалить
      </button>
    </li>
  );
};

export default TaskItem;

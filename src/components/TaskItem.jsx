import React from 'react';

const TaskItem = ({ task, onRemove }) => {
  
  const handleRemove = () => {
    const isConfirmed = window.confirm('Вы уверены, что хотите удалить эту задачу?');

    if (isConfirmed) {
      onRemove();
      
      alert(`Задача "${task}" успешно удалена`);
    }
  };

  return (
    <li className="bg-gray-50 border border-gray-300 p-2 mb-2 rounded-lg flex justify-between items-center">
      {task}
      <button
      type='button'
        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700 transition duration-300"
        onClick={handleRemove}
      >
        Удалить
      </button>
    </li>
  );
};

export default TaskItem;

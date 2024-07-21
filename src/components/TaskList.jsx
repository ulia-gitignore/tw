// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onRemoveTask }) => {
  return (
    <ul className="list-none p-0">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onRemove={() => onRemoveTask(index)}
        />
      ))}
    </ul>
  );
};

export default TaskList;

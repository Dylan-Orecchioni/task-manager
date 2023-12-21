// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Task.css';

// eslint-disable-next-line react/prop-types
const Task = ({ task, onDeleteTask, onDragStart }) => {

  const drag = (event) => {
    event.dataTransfer.setData('text', JSON.stringify(task));
    onDragStart(task);
  }


  const handleDelete = () => {
    // eslint-disable-next-line react/prop-types
    onDeleteTask(task.id);
  }

  return (
      <div>
        <div className="task-header" draggable="true" onDragStart={drag}>
          {/* eslint-disable-next-line react/prop-types */}
          <h1>{task.title}</h1>
          <button type="button" onClick={handleDelete}>X</button>
        </div>
      </div>
  );
};

export default Task;
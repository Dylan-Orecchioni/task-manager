// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Task.css';

// eslint-disable-next-line react/prop-types
const Task = ({ task }) => {
  return (
      <div>
        <div className="task-header">
          {/* eslint-disable-next-line react/prop-types */}
          <h1>{task.title}</h1>
          <p>...</p>
        </div>
      </div>
  );
};

export default Task;
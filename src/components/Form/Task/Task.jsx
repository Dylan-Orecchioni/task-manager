// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import './Task.css';
import TaskEditModal from "./TaskEditModal.jsx";

// eslint-disable-next-line react/prop-types
const Task = ({ task, onDeleteTask, onDragStart }) => {

  const [isEditFormVisible, setEditFormVisible] = useState(false);
  // eslint-disable-next-line react/prop-types
  const [editedTitle, setEditedTitle] = useState(task.title);

  const drag = (event) => {
    event.dataTransfer.setData('text', JSON.stringify(task));
    onDragStart(task);
  }


  const handleDelete = () => {
    // eslint-disable-next-line react/prop-types
    onDeleteTask(task.id);
  }

  const handleEditClick = () => {
    setEditFormVisible(true);
  };

  const handleEditComplete = (newTitle) => {
    setEditedTitle(newTitle);
    setEditFormVisible(false);
  }

  return (
      <div>
        <div className="task-header" draggable="true" onDragStart={drag}>
          {/* eslint-disable-next-line react/prop-types */}
          <h1>{editedTitle}</h1>
          <button type="button" onClick={handleDelete}>X</button>
        </div>
        {isEditFormVisible && (
            <TaskEditModal
                initialTitle={editedTitle}
                onEditComplete={handleEditComplete}
            />
        )}
        {!isEditFormVisible && (
            <button type="button" onClick={handleEditClick}>
              Modifier
            </button>
        )}
      </div>
  );
};

export default Task;
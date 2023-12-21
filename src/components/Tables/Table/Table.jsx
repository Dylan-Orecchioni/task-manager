import './Table.css';
import Task from "../../Form/Task/Task.jsx";
import {useState} from "react";
import TableEditModal from "./TableEditModal.jsx";

// eslint-disable-next-line react/prop-types
const Table = ({ title, tasks, table, onDeleteTask, onTaskDrop, onEditTable }) => {

  const [isEditFormVisible, setEditFormVisible] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);


  const handleTaskDrop = (event) => {
    const draggedTask = JSON.parse(event.dataTransfer.getData('text'));
    onTaskDrop(draggedTask, table.id);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  }

  const handleEditClick = () => {
    setEditFormVisible(true);
  };

  const handleEditComplete = (newTitle) => {
    setEditedTitle(newTitle);
    setEditFormVisible(false);
    onEditTable({ ...table, title: newTitle });
  };

  return (
    <div className="card container" onDragOver={preventDefault} onDrop={handleTaskDrop}>
      <div className="card-header">
        <h1 onClick={handleEditClick}>{editedTitle}</h1>
        <p>...</p>
      </div>

      <div className="card-body">
        {/* eslint-disable-next-line react/prop-types */}
        {tasks.map((task) => {
          // eslint-disable-next-line react/prop-types
            if(task.tableId === table.id){
              return <Task key={task.id} task={task} onDeleteTask={onDeleteTask}/>
            }
          }
        )}
      </div>
      {isEditFormVisible && (
          <TableEditModal initialTitle={editedTitle} onEditComplete={handleEditComplete} />
      )}
    </div>
  );
};

export default Table;
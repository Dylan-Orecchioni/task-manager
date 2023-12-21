import './Table.css';
import Task from "../../Form/Task/Task.jsx";

// eslint-disable-next-line react/prop-types
const Table = ({ title, tasks, table, onDeleteTask, onTaskDrop }) => {

  const handleTaskDrop = (event) => {
    const draggedTask = JSON.parse(event.dataTransfer.getData('text'));
    onTaskDrop(draggedTask, table.id);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  }

  return (
    <div className="card container" onDragOver={preventDefault} onDrop={handleTaskDrop}>
      <div className="card-header">
        <h1>{title}</h1>
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
    </div>
  );
};

export default Table;
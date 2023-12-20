import './Table.css';
import Task from "../../Form/Task/Task.jsx";

// eslint-disable-next-line react/prop-types
const Table = ({ title, tasks, table }) => {
  return (
      <div className="card container">
        <div className="card-header">
          <h1>{title}</h1>
          <p>...</p>
        </div>

        <div className="card-body">
          {/* eslint-disable-next-line react/prop-types */}
          {tasks.map((task) => {
            // eslint-disable-next-line react/prop-types
              if(task.tableId === table.id){
                return <Task key={task.id} task={task} />
          }}
          )}
        </div>
      </div>
  );
};

export default Table;
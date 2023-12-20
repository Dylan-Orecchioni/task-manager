// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import './FormAddTask.css';
import {v4 as uuid} from "uuid";

// eslint-disable-next-line react/prop-types
const FormAddTask = ({tables, addTask}) => {

  const [tasks, setTasks] = useState([]);
  const [selectedTable, setSelectedTable] = useState('');

  const preventDefault = (e) => {
    e.preventDefault();
  }

  const handleTasksChange = (e) => {
    setTasks(e.target.value);
  }

  const handleTableChange = (e) => {
    setSelectedTable(e.target.value);
  }

  const validateForm = () => {
     if (tasks === '' || selectedTable === '') {
       alert('Veuillez renseigner les champs');
     } else {
         const newTask = {
             id: uuid(),
             title: tasks,
             tableId: selectedTable,
             content: tasks.content
         }

         addTask(newTask);
         setTasks('');
         setSelectedTable('');

     }


  }
  return (
      <div className="container">
        <form onSubmit={preventDefault}>
          <div className="form-group">
            <label className="my-3" htmlFor="name">Nom</label>
            <input type="text" id="name" value={tasks} onChange={handleTasksChange} className="form-control" />
            <select
                id="deleteTable"
                className="form-control"
                onChange={handleTableChange}
                value={selectedTable}
            >
              <option value="">-- Sélectionnez une table --</option>
              {/* eslint-disable-next-line react/prop-types */}
              {tables.map((table) => (
                  <option key={table.id} value={table.id}>
                    {table.title}
                  </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <input type="submit" value="Valider" className="btn btn-primary my-3" onClick={validateForm} />
          </div>
        </form>
      </div>
  );
};

export default FormAddTask;
import './Tables.css'
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import Table from "./Table/Table.jsx";
import FormAddTable from "../Form/Tables/FormAddTable/FormAddTable.jsx";
import FormDeleteTable from "../Form/Tables/FormDeleteTable/FormDeleteTable.jsx";
import FormAddTask from "../Form/Task/FormAddTask/FormAddTask.jsx";
import {Link} from "react-router-dom";
import HomePage from "../Home/HomePage.jsx";

// eslint-disable-next-line react/prop-types
const Tables = () => {

  const [formTableVisible, setFormTableVisible] = useState(false);
  const [formDeleteTableVisible, setFormDeleteTableVisible] = useState(false);
  const [formAddTaskVisible, setFormAddTaskVisible] = useState(false);

  const [tables, setTables] = useState([
      {
        id: '1',
        title: "Project Resources",

      },
      {
        id: '2',
        title: "Sujet de la prochaine réunion",

      },
      {
        id: '3',
        title: "A faire",

      },
      {
        id: '4',
        title: "En cours",
      }
  ]);

  const [tasks, setTasks] = useState([
      {
          id: '1',
          title: "Project Resources",
          tableId: '1',
      }
  ]);

  const addTable = (newTable) => {
    setTables([...tables, newTable]);
  }

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const displayFormAddTable = () => {
    setFormTableVisible(!formTableVisible);
  }
  const displayFormDeleteTable = () => {
    setFormDeleteTableVisible(!formDeleteTableVisible);
  }
  const displayFormAddTask = () => {
    setFormAddTaskVisible(!formAddTaskVisible);
  }

  const handleTaskDrop = (draggedTask, targetTableId) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === draggedTask.id) {
          return { ...task, tableId: targetTableId };
        }
        return task;
      });
    });
  }

  return (
      <>
        <div className="menu">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Link to={"/" } className="btn btn-primary" element={<HomePage/>}>Page d'accueil</Link>
        </div>

        <div className="formAddTable">
          { formTableVisible ? <FormAddTable addTable={addTable}/> : <button className="btn btn-primary" onClick={displayFormAddTable}>Afficher le formulaire</button>}
          { formDeleteTableVisible ? <FormDeleteTable tables={tables} setTables={setTables}/> : <button className="btn btn-primary" onClick={displayFormDeleteTable}>Supprimer une table</button>}
          { formAddTaskVisible ? <FormAddTask tables={tables} addTask={addTask}/> : <button className="btn btn-primary" onClick={displayFormAddTask}>Ajouter une tâche</button>}
        </div>

        <div className="card-container">
          {tables.map((table, index) => (
              <Table key={index} title={table.title} tasks={tasks} table={table} onDeleteTask={handleDeleteTask} onTaskDrop={handleTaskDrop}/>
          ))}
        </div>
      </>
  );
};

export default Tables;
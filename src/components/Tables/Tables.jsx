import './Tables.css'
import {useState} from "react";
import Table from "./Table/Table.jsx";
import FormAddTable from "../Form/Tables/FormAddTable/FormAddTable.jsx";
import FormDeleteTable from "../Form/Tables/FormDeleteTable/FormDeleteTable.jsx";
import FormAddTask from "../Form/Task/FormAddTask/FormAddTask.jsx";
import task from "../Form/Task/Task.jsx";

// eslint-disable-next-line react/prop-types
const Tables = () => {
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


  return (
      <>
        <div className="formAddTable">
          <FormAddTable addTable={addTable}/>
          <FormDeleteTable tables={tables} setTables={setTables}/>
          <FormAddTask tables={tables} addTask={addTask}/>
        </div>

        <div className="card-container">
          {tables.map((table, index) => (
              <Table key={index} title={table.title} tasks={tasks} table={table}/>
          ))}
        </div>
      </>
  );
};

export default Tables;
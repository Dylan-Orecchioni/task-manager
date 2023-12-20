import './Tables.css'
import {useState} from "react";
import Table from "./Table/Table.jsx";
import FormAddTable from "../Form/FormAddTable/FormAddTable.jsx";
import FormDeleteTable from "../Form/FormDeleteForm/FormDeleteTable.jsx";

// eslint-disable-next-line react/prop-types
const Tables = () => {
  const [tables, setTables] = useState([
      {
        id: 1,
          title: "Project Resources",
      },
      {
        id: 2,
          title: "Sujet de la prochaine réunion",
      },
      {
        id: 3,
          title: "A faire",
      },
      {
        id: 4,
          title: "En cours",
      }
  ]);

  const addTable = (newTable) => {
    setTables([...tables, newTable]);
  }

  return (
      <>
        <div className="formAddTable">
          <FormAddTable addTable={addTable}/>
          <FormDeleteTable tables={tables} setTables={setTables}/>
        </div>

        <div className="card-container">
          {tables.map((table, index) => (
              <Table key={index} title={table.title} />
          ))}
        </div>
      </>
  );
};

export default Tables;
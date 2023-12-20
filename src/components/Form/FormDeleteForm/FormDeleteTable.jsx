// FormDeleteTable.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './FormDeleteForm.css';

// eslint-disable-next-line react/prop-types
const FormDeleteTable = ({ tables, setTables }) => {
  const [selectedTable, setSelectedTable] = useState('');

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const handleDelete = () => {
    if (selectedTable) {
      // eslint-disable-next-line react/prop-types
      const updatedTables = tables.filter((table) => table.id !== selectedTable);
      setTables(updatedTables);
      setSelectedTable('');
    }
  };

  const handleChange = (e) => {
    setSelectedTable(e.target.value);
  }

  return (
      <div className="container">
        <form onSubmit={preventDefault}>
          <div className="form-group">
            <label className="my-3" htmlFor="deleteTable">Sélectionnez la table à supprimer</label>
            <select
                id="deleteTable"
                className="form-control"
                onChange={handleChange}
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
            <input
                type="button"
                value="Supprimer la table"
                className="deleteBtn btn-danger my-3"
                onClick={handleDelete}
            />
          </div>
        </form>
      </div>
  );
};

export default FormDeleteTable;

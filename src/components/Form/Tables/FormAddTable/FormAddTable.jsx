// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './FormAddTable.css';
import {v4 as uuid} from 'uuid';

// eslint-disable-next-line react/prop-types
const FormAddTable = ({ addTable }) => {
  const [name, setName] = useState('');

  const preventDefault = (e) => {
    e.preventDefault();
  }

  const validateForm = () => {
    if (name === '') {
      alert('Veuillez saisir le titre de la table')
    } else {
      const newTable = {
        id: uuid(),
        title: name
      }
      addTable(newTable);
      setName('');
    }
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
      <div className="container">
        <form onSubmit={preventDefault}>
          <div className="form-group">
            <label className="my-3" htmlFor="name">Nom</label>
            <input type="text" id="name" value={name} onChange={handleChange} className="form-control" />
          </div>

          <div className="form-group">
            <input type="submit" value="Valider" className="btn btn-primary my-3" onClick={validateForm} />
          </div>
        </form>
      </div>
  )
};

export default FormAddTable;
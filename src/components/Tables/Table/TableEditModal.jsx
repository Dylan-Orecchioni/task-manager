// TableEditModal.jsx
import React, { useState } from 'react';

export default function TableEditModal({ initialTitle, onEditComplete }) {
  const [editedTableTitle, setEditedTableTitle] = useState(initialTitle);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditComplete(editedTableTitle);
  };

  const handleChange = (e) => {
    setEditedTableTitle(e.target.value);
  }

  return (
      <form onSubmit={handleSubmit}>
        <label>Modifier le tableau</label>
        <input
            type="text"
            placeholder="Modifier le tableau"
            value={editedTableTitle}
            onChange={handleChange}
        />
        <button type="submit">Enregistrer</button>
      </form>
  );
}

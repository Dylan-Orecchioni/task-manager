import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function TaskEditModal({ initialTitle, onEditComplete }) {
  const [editedTaskTitle, setEditedTaskTitle] = useState(initialTitle);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditComplete(editedTaskTitle);
  };

  const handleChange = (e) => {
    setEditedTaskTitle(e.target.value);
  }

  return (
      <form onSubmit={handleSubmit}>
        <label>Modifier la tâche</label>
        <input
            type="text"
            placeholder="Modifier la tâche"
            value={editedTaskTitle}
            onChange={handleChange}
        />
        <button type="submit">Enregistrer</button>
      </form>
  );
}
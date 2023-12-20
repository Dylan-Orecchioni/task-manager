import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
  return (
      <div>
        <h1>Page d'accueil</h1>

        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/tasklist" className="btn btn-primary">Liste de tâches</Link>
      </div>
  );
};

export default HomePage;
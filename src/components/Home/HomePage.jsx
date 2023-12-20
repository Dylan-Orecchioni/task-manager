// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
  return (
      <>
        <h1>Page d'accueil</h1>
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/tables" className="btn btn-primary">Tableaux</Link>
      </>
  );
};

export default HomePage;
import React from 'react';
import HomePage from "../Home/HomePage.jsx";
import './Login.css';
import {Link} from "react-router-dom";
import Tables from "../Tables/Table/Table.jsx";

const Login = () => {
  return (
      <div className="login">
        <h1>Connexion</h1>
        <Link to={"/" } className="btn btn-primary" element={<HomePage/>}>Page d'accueil</Link>
        <Link to={"/tables" } className="btn btn-primary" element={<Tables/>}>Tableaux</Link>
      </div>
  );
};

export default Login;
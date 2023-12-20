import React from 'react';
import HomePage from "../Home/HomePage.jsx";
import {Link} from "react-router-dom";

const Login = () => {
  return (
      <div>
        <Link to={"/" } className="btn btn-primary" element={<HomePage/>}>Page d'accueil</Link>
        <h1>Connexion</h1>
      </div>
  );
};

export default Login;
import React, {useState} from 'react';
import HomePage from "../Home/HomePage.jsx";
import './Login.css';
import {Link, useNavigate} from "react-router-dom";
import Tables from "../Tables/Table/Table.jsx";

const Login = () => {

  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePseudoChange = (e) => {
    setPseudo(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const validateLogin = () => {
      if(pseudo === 'cloudcampus' && password === "0000"){
          alert("Connexion reussie");
          navigate("/tables")
      } else {
          alert("Nom ou mot de passe incorrect");
          setPseudo('');
          setPassword('');
          navigate("/login")
      }
  }
  return (
      <>
          <div className="login">
            <h1>Connexion</h1>
            <Link to={"/" } className="btn btn-primary" element={<HomePage/>}>Page d'accueil</Link>
            <Link to={"/tables" } className="btn btn-primary" element={<Tables/>}>Tableaux</Link>
          </div>

        <div className="container">
          <form className="form_login" onSubmit={(e) => e.preventDefault()}>
            <div className="form_input">
              <label className="my-3" htmlFor="pseudo">Nom</label>
              <input type="text" id="pseudo" className="form-control" value={pseudo} onChange={handlePseudoChange} />
            </div>
            <div className="form_input">
              <label className="my-3" htmlFor="password">Mot de passe</label>
              <input type="password" id="password" className="form-control" value={password} onChange={handlePasswordChange} />
            </div>

            <div className="form-group">
              <button type="button" className="btn btn-primary" onClick={validateLogin}>
                Connexion
              </button>
            </div>
          </form>
        </div>

      </>

  );
};

export default Login;
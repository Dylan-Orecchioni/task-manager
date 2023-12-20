import './App.css'
import Tables from "./components/Tables/Tables.jsx";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import HomePage from "./components/Home/HomePage.jsx";

// eslint-disable-next-line react/prop-types
function App() {
  return (
      <>
        <div className="app">
          <Routes>
            <Route path={"/"} element={<HomePage/>} />
            <Route path={"/login"} element={<Login/>} />
            <Route path={"/tasklist"} element={<Tables/>} />
          </Routes>

          <div className="card-container">
            <Tables />
          </div>
        </div>
      </>
  );
}

export default App

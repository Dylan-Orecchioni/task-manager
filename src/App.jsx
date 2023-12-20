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
            <Route path={"/tables"} element={<Tables/>} />
            <Route path={"/login"} element={<Login/>} />
          </Routes>
        </div>
      </>
  );
}

export default App

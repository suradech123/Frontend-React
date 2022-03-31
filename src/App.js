import Home from "./pages/home/Home";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Login from "./components/Login";
import Register from "./components/Register";
import ComputerList from "./components/Computer";
import AddComputer from "./components/AddComputer";
import Employeelist from "./components/Employee";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/computerlist" element={<ComputerList/>} />
            <Route path="/addcomputer" element={<AddComputer/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/employeelist" element={<Employeelist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
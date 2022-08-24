import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/auth/Register";
import { Route, Routes } from "react-router";
import Login from "./pages/auth/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;

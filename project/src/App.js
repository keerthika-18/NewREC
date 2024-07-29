import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './index.css';
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

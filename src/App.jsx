import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { ConfigProvider, theme } from "antd";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "light" ? false : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(p => !p);

  return (
  <Router>
    <div className={`app-root ${isDark ? "dark" : "light"}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="main-content">
        <Routes>
  <Route path="/" element={<Home isDark={isDark} />} />
</Routes>
      </main>
    </div>
  </Router>
);
}
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Builder from "./pages/Builder";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/builder"
          element={isAuthenticated ? <Builder /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

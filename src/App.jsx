import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { getUsername } from "./utils/localStorage";

function AppRoutes() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!getUsername());

  useEffect(() => {
    setIsLoggedIn(!!getUsername());
  }, [location]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
      />
      <Route
        path="*"
        element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />}
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

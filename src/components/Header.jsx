import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaTools,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
  FaRegFileAlt,
} from "react-icons/fa";

export default function Header({ isAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
    window.location.reload();
  };

  return (
    <header className="bg-gray-900 text-white h-16 flex items-center px-6 shadow-md justify-between">
      <div className="flex items-center space-x-2">
        <FaRegFileAlt className="h-8 w-8 mr-2 text-blue-400" />
        <h1 className="text-xl font-extrabold tracking-tight">Page Builder</h1>
      </div>
      <nav className="flex items-center space-x-6 text-base font-medium">
        {isAuthenticated ? (
          <>
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-blue-400 transition-colors"
            >
              <FaHome className="inline-block" /> <span>Dashboard</span>
            </Link>
            <Link
              to="/builder"
              className="flex items-center gap-1 hover:text-blue-400 transition-colors"
            >
              <FaTools className="inline-block" /> <span>Builder</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 hover:text-red-400 transition-colors"
            >
              <FaSignOutAlt className="inline-block" /> <span>Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="flex items-center gap-1 hover:text-blue-400 transition-colors"
            >
              <FaSignInAlt className="inline-block" /> <span>Login</span>
            </Link>
            <Link
              to="/signup"
              className="flex items-center gap-1 hover:text-green-400 transition-colors"
            >
              <FaUserPlus className="inline-block" /> <span>Signup</span>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

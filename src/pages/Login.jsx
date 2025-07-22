import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";

export default function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("authToken", "demo-token");
      setAuth(true);
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 animate-fade-in">
        <h2 className="text-2xl font-extrabold mb-6 text-center text-gray-900">
          Login
        </h2>
        <div className="mb-4 relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400 text-lg" />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border pl-10 pr-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="mb-6 relative">
          <FaLock className="absolute left-3 top-3 text-gray-400 text-lg" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border pl-10 pr-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Password"
            type="password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full flex items-center justify-center gap-2 font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <FaSignInAlt /> Login
        </button>
      </div>
    </div>
  );
}

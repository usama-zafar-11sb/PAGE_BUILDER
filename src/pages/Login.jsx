import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

export default function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      localStorage.setItem("authToken", "demo-token-" + Date.now());
      localStorage.setItem("currentUser", JSON.stringify(user));
      setAuth(true);
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark px-4">
      <Motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="glass p-10 rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary" />

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-text-secondary text-sm">
            Sign in to continue building amazing pages
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <Motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20"
            >
              {error}
            </Motion.p>
          )}

          <div className="space-y-2">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
              Email Address
            </label>
            <div className="relative group">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent-primary transition-colors" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-dark/50 border border-dark-border text-white pl-12 pr-4 py-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all placeholder:text-gray-600 shadow-inner"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider ml-1">
              Password
            </label>
            <div className="relative group">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent-primary transition-colors" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-dark/50 border border-dark-border text-white pl-12 pr-4 py-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all placeholder:text-gray-600 shadow-inner"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40 transition-all duration-300 mt-4 text-lg"
          >
            <FaSignInAlt /> Sign In
          </Motion.button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-text-secondary text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-accent-primary hover:text-accent-secondary font-bold transition-colors"
            >
              Create one for free
            </Link>
          </p>
        </div>
      </Motion.div>
    </div>
  );
}

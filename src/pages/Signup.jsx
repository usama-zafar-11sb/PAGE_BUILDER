import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserPlus, FaUser } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      setError("User already exists");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark px-4">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass p-8 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            Create Account
          </h2>
          <p className="text-text-secondary text-sm">
            Join the next generation of page builders
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          {error && (
            <Motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20"
            >
              {error}
            </Motion.p>
          )}

          <div className="relative group">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent-primary transition-colors" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-dark/50 border border-dark-border text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all placeholder:text-gray-600"
              placeholder="Full Name"
            />
          </div>

          <div className="relative group">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent-primary transition-colors" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-dark/50 border border-dark-border text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all placeholder:text-gray-600"
              placeholder="Email Address"
            />
          </div>

          <div className="relative group">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent-primary transition-colors" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-dark/50 border border-dark-border text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all placeholder:text-gray-600"
              placeholder="Password"
            />
          </div>

          <div className="relative group">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent-primary transition-colors" />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-dark/50 border border-dark-border text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all placeholder:text-gray-600"
              placeholder="Confirm Password"
            />
          </div>

          <Motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40 transition-all duration-300 mt-4"
          >
            <FaUserPlus /> Sign Up
          </Motion.button>
        </form>

        <p className="text-center text-text-secondary mt-6 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-accent-primary hover:text-accent-secondary font-semibold transition-colors"
          >
            Login here
          </Link>
        </p>
      </Motion.div>
    </div>
  );
}

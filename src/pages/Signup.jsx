import React from "react";
import { FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";

export default function Signup() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 animate-fade-in">
        <h2 className="text-2xl font-extrabold mb-6 text-center text-gray-900">
          Sign Up
        </h2>
        <div className="mb-3 relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400 text-lg" />
          <input
            className="w-full border pl-10 pr-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400 mb-2"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="mb-3 relative">
          <FaLock className="absolute left-3 top-3 text-gray-400 text-lg" />
          <input
            className="w-full border pl-10 pr-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400 mb-2"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="mb-6 relative">
          <FaLock className="absolute left-3 top-3 text-gray-400 text-lg" />
          <input
            className="w-full border pl-10 pr-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Confirm Password"
            type="password"
          />
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-full flex items-center justify-center gap-2 font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400">
          <FaUserPlus /> Sign Up
        </button>
      </div>
    </div>
  );
}

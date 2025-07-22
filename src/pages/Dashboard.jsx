import React from "react";
import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="text-center bg-white p-10 rounded-2xl shadow-xl animate-fade-in">
        <div className="flex justify-center mb-4">
          <FaRocket className="text-5xl text-blue-600 animate-bounce" />
        </div>
        <h1 className="text-3xl font-extrabold mb-4 tracking-tight text-gray-900">
          Welcome to Page Builder
        </h1>
        <Link
          to="/builder"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <span>Start Building</span>
          <FaRocket className="text-xl" />
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaSignOutAlt,
  FaThLarge,
  FaMagic,
  FaPlus,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header({ isAuthenticated }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isBuilder = location.pathname === "/builder";
  const MotionDiv = motion.div;
  const MotionButton = motion.button;

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("currentUser");
    navigate("/login");
    window.location.reload();
  };

  const triggerExport = () => {
    window.dispatchEvent(new CustomEvent("EXPORT_PAGE"));
  };

  return (
    <nav className="glass sticky top-0 z-50 px-8 py-3 flex items-center justify-between border-b border-dark-border">
      <Link to="/" className="flex items-center gap-3 group">
        <MotionDiv
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-accent-primary to-accent-secondary p-2.5 rounded-2xl shadow-lg shadow-accent-primary/20"
        >
          <FaMagic className="text-white text-xl" />
        </MotionDiv>
        <span className="text-2xl font-black tracking-tighter text-white">
          PAGE
          <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            CRAFT
          </span>
        </span>
      </Link>

      <div className="flex items-center gap-8">
        {isAuthenticated ? (
          <>
            <Link
              to="/"
              className="text-text-secondary hover:text-white font-semibold flex items-center gap-2.5 transition-all duration-300 group"
            >
              <FaThLarge className="text-lg group-hover:text-accent-primary transition-colors" />
              <span>Dashboard</span>
            </Link>

            {isBuilder && (
              <MotionButton
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={triggerExport}
                className="bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-2xl font-bold flex items-center gap-2.5 transition-all duration-300 hover:bg-white/10"
              >
                <FaDownload className="text-sm text-accent-primary" />
                <span>Export Page</span>
              </MotionButton>
            )}

            <Link
              to="/builder"
              className="bg-accent-primary text-white px-6 py-2.5 rounded-2xl font-bold flex items-center gap-2.5 transition-all duration-300 shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaPlus className="text-sm" />
              <span>New Project</span>
            </Link>
            <div className="h-8 w-[1px] bg-dark-border" />
            <MotionButton
              whileHover={{ scale: 1.1, color: "#f87171" }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLogout}
              className="text-text-secondary transition-colors p-2"
              title="Logout"
            >
              <FaSignOutAlt className="text-xl" />
            </MotionButton>
          </>
        ) : (
          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="text-text-secondary hover:text-white font-bold transition-all duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-white text-dark px-7 py-3 rounded-2xl font-bold hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-xl shadow-white/5 hover:shadow-accent-primary/20"
            >
              Join Free
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

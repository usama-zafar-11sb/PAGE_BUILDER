import React from "react";
import { Link } from "react-router-dom";
import {
  FaPlus,
  FaThLarge,
  FaChartLine,
  FaUsers,
  FaClock,
  FaMagic,
} from "react-icons/fa";
import { motion as Motion } from "framer-motion";

export default function Dashboard() {
  const stats = [
    {
      label: "Active Projects",
      value: "12",
      icon: <FaThLarge />,
      color: "text-blue-400",
    },
    {
      label: "Total Views",
      value: "2.4k",
      icon: <FaChartLine />,
      color: "text-emerald-400",
    },
    {
      label: "Collaborators",
      value: "5",
      icon: <FaUsers />,
      color: "text-violet-400",
    },
    {
      label: "Last Edited",
      value: "2h ago",
      icon: <FaClock />,
      color: "text-amber-400",
    },
  ];

  return (
    <div className="p-10 bg-dark min-h-[calc(100vh-64px)] space-y-10 overflow-y-auto custom-scrollbar">
      <div className="flex justify-between items-end flex-wrap gap-6">
        <div>
          <Motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-black text-white tracking-tight"
          >
            Welcome back, <span className="text-accent-primary">Creator!</span>
          </Motion.h1>
          <p className="text-text-secondary mt-2">
            Here's what's happening with your projects today.
          </p>
        </div>
        <Link
          to="/builder"
          className="bg-white text-dark px-8 py-3.5 rounded-2xl font-bold flex items-center gap-3 hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-xl shadow-white/5 group"
        >
          <FaPlus className="group-hover:rotate-90 transition-transform duration-300" />{" "}
          Create New Project
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-3xl border border-dark-border group hover:border-accent-primary/50 transition-all duration-300"
          >
            <div
              className={`text-2xl ${stat.color} mb-4 bg-white/5 w-12 h-12 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform`}
            >
              {stat.icon}
            </div>
            <p className="text-text-secondary text-sm font-medium">
              {stat.label}
            </p>
            <h3 className="text-3xl font-bold text-white mt-1">{stat.value}</h3>
          </Motion.div>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          Recent Projects{" "}
          <div className="h-1 flex-1 bg-dark-border ml-2 rounded-full opacity-30" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Motion.div
              key={item}
              whileHover={{ y: -8 }}
              className="glass rounded-[2rem] overflow-hidden group border border-dark-border shadow-2xl"
            >
              <div className="h-48 bg-gradient-to-br from-dark-lighter to-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-dark/60 backdrop-blur-sm">
                  <Link
                    to="/builder"
                    className="bg-white text-dark px-6 py-2.5 rounded-xl font-bold hover:bg-accent-primary hover:text-white transition-all"
                  >
                    Edit Project
                  </Link>
                </div>
                <div className="absolute top-4 right-4 bg-dark/50 backdrop-blur-md p-2 rounded-lg border border-white/10">
                  <FaMagic className="text-accent-primary" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white">
                  Untitled Project {item}
                </h4>
                <p className="text-text-secondary text-sm mt-1">
                  Edited 2 days ago
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-[10px] font-bold rounded-full border border-accent-primary/20 uppercase tracking-wider">
                    Landing Page
                  </span>
                  <span className="px-3 py-1 bg-white/5 text-text-secondary text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Draft
                  </span>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

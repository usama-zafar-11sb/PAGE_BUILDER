import React from "react";
import {
  FaFont,
  FaImage,
  FaRegSquare,
  FaRegKeyboard,
  FaBoxOpen,
  FaVideo,
  FaShapes,
  FaPlus,
} from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const elements = [
  {
    name: "Text",
    icon: <FaFont />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    name: "Image",
    icon: <FaImage />,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    name: "Button",
    icon: <FaRegSquare />,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    name: "Input",
    icon: <FaRegKeyboard />,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    name: "Container",
    icon: <FaBoxOpen />,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    name: "Video",
    icon: <FaVideo />,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
];

export default function Sidebar({ setComponents }) {
  const handleAdd = (type) => {
    let defaultProps = {};
    switch (type) {
      case "Text":
        defaultProps = {
          text: "Edit this text",
          fontSize: "16px",
          color: "#ffffff",
        };
        break;
      case "Image":
        defaultProps = {
          src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
          alt: "Abstract Art",
          borderRadius: "12px",
        };
        break;
      case "Button":
        defaultProps = {
          label: "Explore More",
          link: "#",
          backgroundColor: "#6366f1",
          color: "#ffffff",
          borderRadius: "8px",
          padding: "10px 20px",
        };
        break;
      case "Input":
        defaultProps = {
          placeholder: "Enter your message...",
          borderRadius: "8px",
        };
        break;
      case "Video":
        defaultProps = {
          src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          borderRadius: "12px",
        };
        break;
      case "Container":
        defaultProps = {
          padding: "20px",
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: "16px",
        };
        break;
      default:
        defaultProps = {};
    }

    setComponents((prev) => [
      ...prev,
      { id: Date.now(), type, props: defaultProps },
    ]);
  };

  return (
    <aside className="w-64 glass border-r border-dark-border flex flex-col overflow-hidden">
      <div className="p-6 border-b border-dark-border">
        <h2 className="text-sm font-bold text-text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
          <FaShapes className="text-accent-primary" /> Components
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
        {elements.map((el, index) => (
          <Motion.button
            key={el.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ x: 4, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-200 group relative overflow-hidden"
            onClick={() => handleAdd(el.name)}
          >
            <div
              className={`w-10 h-10 rounded-xl ${el.bg} flex items-center justify-center text-xl ${el.color} shadow-inner`}
            >
              {el.icon}
            </div>
            <span className="font-semibold text-text-primary group-hover:text-white transition-colors">
              {el.name}
            </span>
            <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <FaPlus className="text-xs text-accent-primary" />
            </div>
          </Motion.button>
        ))}
      </div>
    </aside>
  );
}

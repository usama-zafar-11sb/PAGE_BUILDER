import React from "react";
import {
  FaFont,
  FaImage,
  FaRegSquare,
  FaRegKeyboard,
  FaBoxOpen,
  FaVideo,
  FaLayerGroup,
  FaEye,
} from "react-icons/fa";
import { motion as Motion } from "framer-motion";

export default function LayersPanel({ components, setSelectedId, selectedId }) {
  const elementIcons = {
    Text: <FaFont className="text-blue-400" />,
    Image: <FaImage className="text-pink-400" />,
    Button: <FaRegSquare className="text-emerald-400" />,
    Input: <FaRegKeyboard className="text-amber-400" />,
    Container: <FaBoxOpen className="text-violet-400" />,
    Video: <FaVideo className="text-rose-400" />,
  };

  return (
    <div className="h-full flex flex-col overflow-hidden bg-dark/20">
      <div className="p-4 border-b border-dark-border flex items-center justify-between bg-dark/40">
        <h2 className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
          <FaLayerGroup className="text-accent-primary" /> Layers
        </h2>
        <span className="text-[10px] font-bold text-accent-primary bg-accent-primary/10 px-2 py-0.5 rounded-full">
          {components.length}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
        {components.length === 0 ? (
          <div className="h-full flex items-center justify-center text-text-secondary/20 italic text-xs">
            No layers yet
          </div>
        ) : (
          <div className="space-y-1">
            {components.map((c, i) => (
              <Motion.button
                key={c.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${
                  selectedId === c.id
                    ? "bg-accent-primary/20 border border-accent-primary/30"
                    : "hover:bg-white/5 border border-transparent"
                }`}
                onClick={() => setSelectedId(c.id)}
              >
                <div className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                  {elementIcons[c.type]}
                </div>
                <div className="flex-1 text-left">
                  <p
                    className={`text-xs font-bold ${selectedId === c.id ? "text-white" : "text-text-secondary group-hover:text-text-primary"}`}
                  >
                    {c.type}
                  </p>
                  <p className="text-[9px] text-text-secondary/50 font-mono">
                    #{c.id.toString().slice(-4)}
                  </p>
                </div>
                <FaEye
                  className={`text-xs ${selectedId === c.id ? "text-accent-primary" : "text-text-secondary/20 group-hover:text-text-secondary"}`}
                />
              </Motion.button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

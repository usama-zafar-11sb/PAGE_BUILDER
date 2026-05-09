import React from "react";
import { FaSlidersH, FaLayerGroup } from "react-icons/fa";
import * as FramerMotion from "framer-motion";

export default function ConfigPanel({ components, setComponents, selectedId }) {
  const selected = components.find((c) => c.id === selectedId);

  const updateProp = (name, value) => {
    setComponents((prev) =>
      prev.map((c) =>
        c.id === selectedId
          ? { ...c, props: { ...c.props, [name]: value } }
          : c,
      ),
    );
  };

  return (
    <aside className="w-80 glass border-l border-dark-border flex flex-col overflow-hidden">
      <div className="p-6 border-b border-dark-border flex items-center justify-between">
        <h2 className="text-sm font-bold text-text-secondary uppercase tracking-[0.2em] flex items-center gap-2">
          <FaSlidersH className="text-accent-primary" /> Configuration
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
        <FramerMotion.AnimatePresence mode="wait">
          {!selected ? (
            <FramerMotion.motion.div
              key="no-selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30"
            >
              <FaLayerGroup size={48} />
              <p className="text-sm font-medium">
                Select a component
                <br />
                to edit its properties
              </p>
            </FramerMotion.motion.div>
          ) : (
            <FramerMotion.motion.div
              key={selected.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-accent-primary/10 p-4 rounded-2xl border border-accent-primary/20">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent-primary">
                  Component Type
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {selected.type}
                </h3>
              </div>

              <div className="space-y-5">
                {Object.entries(selected.props).map(([key, val]) => (
                  <div key={key} className="space-y-2 group">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-widest ml-1 group-focus-within:text-accent-primary transition-colors">
                      {key.replace(/([A-Z])/g, " $1")}
                    </label>
                    {key.toLowerCase().includes("color") ? (
                      <div className="flex gap-3 items-center">
                        <input
                          type="color"
                          value={val}
                          onChange={(e) => updateProp(key, e.target.value)}
                          className="w-12 h-12 bg-dark-lighter border border-dark-border rounded-xl cursor-pointer overflow-hidden p-0"
                        />
                        <input
                          type="text"
                          value={val}
                          onChange={(e) => updateProp(key, e.target.value)}
                          className="flex-1 bg-dark-lighter border border-dark-border text-white px-4 py-2.5 rounded-xl text-sm focus:ring-2 focus:ring-accent-primary outline-none transition-all font-mono"
                        />
                      </div>
                    ) : (
                      <input
                        type="text"
                        name={key}
                        value={val}
                        onChange={(e) => updateProp(key, e.target.value)}
                        className="w-full bg-dark-lighter border border-dark-border text-white px-4 py-3 rounded-xl text-sm focus:ring-2 focus:ring-accent-primary outline-none transition-all placeholder:text-gray-600 shadow-inner"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-dark-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">
                    Metadata
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark/30 p-3 rounded-xl border border-dark-border">
                    <p className="text-[9px] text-text-secondary uppercase font-bold">
                      ID
                    </p>
                    <p className="text-[10px] text-white/50 font-mono mt-1">
                      #{selected.id.toString().slice(-6)}
                    </p>
                  </div>
                  <div
                    className={`bg-dark/30 p-3 rounded-xl border border-dark-border`}
                  >
                    <p className="text-[9px] text-text-secondary uppercase font-bold">
                      Z-Index
                    </p>
                    <p className="text-[10px] text-white/50 font-mono mt-1">
                      Auto
                    </p>
                  </div>
                </div>
              </div>
            </FramerMotion.motion.div>
          )}
        </FramerMotion.AnimatePresence>
      </div>
    </aside>
  );
}

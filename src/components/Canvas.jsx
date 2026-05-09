import React from "react";
import { motion as Motion, Reorder } from "framer-motion";
import { FaTrash, FaClone, FaGripVertical } from "react-icons/fa";

export default function Canvas({
  components,
  setComponents,
  selectedId,
  setSelectedId,
}) {
  const handleSelect = (id) => setSelectedId(id);

  const handleDelete = (id, e) => {
    e.stopPropagation();
    setComponents((prev) => prev.filter((c) => c.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const handleDuplicate = (component, e) => {
    e.stopPropagation();
    const newComponent = { ...component, id: Date.now() };
    setComponents((prev) => [...prev, newComponent]);
  };

  return (
    <div className="flex-1 bg-dark/50 p-12 overflow-y-auto custom-scrollbar relative">
      <div className="max-w-4xl mx-auto min-h-full glass rounded-[2.5rem] p-12 shadow-2xl border border-white/5 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

        {components.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-text-secondary">
            <Motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-6xl mb-6 opacity-20"
            >
              ✨
            </Motion.div>
            <p className="text-xl font-medium">Your canvas is empty</p>
            <p className="text-sm opacity-60">
              Drag components from the sidebar to start building
            </p>
          </div>
        ) : (
          <Reorder.Group
            axis="y"
            values={components}
            onReorder={setComponents}
            className="space-y-6"
          >
            {components.map((c) => (
              <Reorder.Item
                key={c.id}
                value={c}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileDrag={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                }}
                className={`relative group cursor-pointer transition-all duration-300 rounded-2xl ${
                  selectedId === c.id
                    ? "ring-2 ring-accent-primary ring-offset-4 ring-offset-dark shadow-2xl shadow-accent-primary/20"
                    : "hover:ring-2 hover:ring-white/10"
                }`}
                onClick={() => handleSelect(c.id)}
              >
                {/* Controls */}
                <div
                  className={`absolute -right-12 top-0 flex flex-col gap-2 transition-opacity duration-200 ${
                    selectedId === c.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <button
                    onClick={(e) => handleDuplicate(c, e)}
                    className="p-2.5 bg-dark-lighter text-text-secondary hover:text-white rounded-xl border border-dark-border shadow-lg"
                  >
                    <FaClone size={14} />
                  </button>
                  <button
                    onClick={(e) => handleDelete(c.id, e)}
                    className="p-2.5 bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white rounded-xl border border-rose-500/20 shadow-lg"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>

                {/* Component Rendering */}
                <div className="relative">
                  {c.type === "Text" && (
                    <p
                      style={{
                        fontSize: c.props.fontSize || "16px",
                        color: c.props.color || "#ffffff",
                      }}
                      className="font-medium leading-relaxed"
                    >
                      {c.props.text}
                    </p>
                  )}
                  {c.type === "Image" && (
                    <img
                      src={c.props.src}
                      alt={c.props.alt}
                      style={{ borderRadius: c.props.borderRadius || "0px" }}
                      className="w-full h-auto object-cover shadow-2xl"
                    />
                  )}
                  {c.type === "Button" && (
                    <div className="flex justify-start">
                      <button
                        style={{
                          backgroundColor: c.props.backgroundColor,
                          color: c.props.color,
                          borderRadius: c.props.borderRadius,
                          padding: c.props.padding,
                        }}
                        className="font-bold shadow-lg hover:brightness-110 transition-all active:scale-95"
                      >
                        {c.props.label}
                      </button>
                    </div>
                  )}
                  {c.type === "Input" && (
                    <input
                      placeholder={c.props.placeholder}
                      style={{ borderRadius: c.props.borderRadius }}
                      className="w-full bg-dark-lighter/50 border border-dark-border p-4 text-white focus:ring-2 focus:ring-accent-primary outline-none transition-all placeholder:text-gray-600"
                    />
                  )}
                  {c.type === "Video" && (
                    <div
                      className="overflow-hidden shadow-2xl"
                      style={{ borderRadius: c.props.borderRadius }}
                    >
                      <iframe
                        width="100%"
                        height="400"
                        src={c.props.src}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                  {c.type === "Container" && (
                    <div
                      style={{
                        padding: c.props.padding,
                        backgroundColor: c.props.backgroundColor,
                        borderRadius: c.props.borderRadius,
                      }}
                      className="border border-dashed border-white/20 min-h-[100px] flex items-center justify-center"
                    >
                      <span className="text-white/20 font-bold uppercase tracking-widest text-xs">
                        Section Container
                      </span>
                    </div>
                  )}
                </div>

                {/* Reorder Handle */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-dark-border group-hover:text-text-secondary cursor-grab active:cursor-grabbing p-2 transition-colors">
                  <FaGripVertical />
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        )}
      </div>
    </div>
  );
}

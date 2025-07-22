import React from "react";
import {
  FaFont,
  FaImage,
  FaRegSquare,
  FaRegKeyboard,
  FaBoxOpen,
  FaVideo,
} from "react-icons/fa";

export default function LayersPanel({ components, setSelectedId }) {
  const elementIcons = {
    Text: <FaFont className="text-blue-400" />,
    Image: <FaImage className="text-pink-400" />,
    Button: <FaRegSquare className="text-green-400" />,
    Input: <FaRegKeyboard className="text-yellow-400" />,
    Container: <FaBoxOpen className="text-purple-400" />,
    Video: <FaVideo className="text-red-400" />,
  };

  return (
    <div className="w-64 bg-gray-100 p-4 border-l rounded-l-xl shadow-inner animate-fade-in">
      <h2 className="text-lg font-extrabold mb-4 tracking-tight flex items-center gap-2">
        Layers
      </h2>
      <ul className="overflow-y-auto max-h-[calc(100vh-120px)] pr-1 space-y-2">
        {components.map((c) => (
          <li key={c.id}>
            <button
              className="flex items-center gap-2 text-left w-full px-2 py-2 rounded hover:bg-blue-50 transition-colors group"
              onClick={() => setSelectedId(c.id)}
            >
              <span className="text-xl">{elementIcons[c.type]}</span>
              <span className="group-hover:text-blue-600 transition-colors font-medium">
                {c.type} <span className="text-xs text-gray-400">({c.id})</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

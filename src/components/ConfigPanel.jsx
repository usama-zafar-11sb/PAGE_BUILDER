import React from "react";
import {
  FaFont,
  FaImage,
  FaRegSquare,
  FaRegKeyboard,
  FaBoxOpen,
  FaVideo,
} from "react-icons/fa";

export default function ConfigPanel({ components, setComponents, selectedId }) {
  const selected = components.find((c) => c.id === selectedId);
  const updateProp = (e) => {
    const { name, value } = e.target;
    setComponents((prev) =>
      prev.map((c) =>
        c.id === selectedId ? { ...c, props: { ...c.props, [name]: value } } : c
      )
    );
  };

  const elementIcons = {
    Text: <FaFont className="text-blue-400" />,
    Image: <FaImage className="text-pink-400" />,
    Button: <FaRegSquare className="text-green-400" />,
    Input: <FaRegKeyboard className="text-yellow-400" />,
    Container: <FaBoxOpen className="text-purple-400" />,
    Video: <FaVideo className="text-red-400" />,
  };

  if (!selected)
    return (
      <div className="w-64 bg-gray-50 p-6 border-l rounded-l-xl shadow-inner text-gray-400 flex items-center justify-center animate-fade-in">
        No selection
      </div>
    );

  return (
    <div className="w-64 bg-gray-50 p-6 border-l rounded-l-xl shadow-inner animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{elementIcons[selected.type]}</span>
        <h3 className="font-semibold text-lg text-gray-800">
          Edit {selected.type}
        </h3>
      </div>
      <div className="space-y-3">
        {Object.entries(selected.props).map(([key, val]) => (
          <label key={key} className="block">
            <span className="text-gray-600 font-medium capitalize">{key}:</span>
            <input
              name={key}
              value={val}
              onChange={updateProp}
              className="border p-2 rounded w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

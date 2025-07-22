import React from "react";
import {
  FaFont,
  FaImage,
  FaRegSquare,
  FaRegKeyboard,
  FaBoxOpen,
  FaVideo,
} from "react-icons/fa";

export default function Canvas({ components, selectedId, setSelectedId }) {
  const handleSelect = (id) => setSelectedId(id);

  const elementIcons = {
    Text: <FaFont className="text-blue-400 mr-2" />,
    Image: <FaImage className="text-pink-400 mr-2" />,
    Button: <FaRegSquare className="text-green-400 mr-2" />,
    Input: <FaRegKeyboard className="text-yellow-400 mr-2" />,
    Container: <FaBoxOpen className="text-purple-400 mr-2" />,
    Video: <FaVideo className="text-red-400 mr-2" />,
  };

  return (
    <div className="flex-1 p-6 bg-white overflow-auto grid gap-4 animate-fade-in">
      {components.map((c) => (
        <div
          key={c.id}
          className={`rounded-xl shadow-md transition-all duration-200 bg-gray-50 hover:shadow-lg cursor-pointer border-2 flex items-center gap-4 px-4 py-3 ${
            selectedId === c.id
              ? "border-blue-500 ring-2 ring-blue-200"
              : "border-transparent"
          }`}
          onClick={() => handleSelect(c.id)}
        >
          <span className="text-2xl">{elementIcons[c.type]}</span>
          <div className="flex-1">
            {c.type === "Text" && (
              <p className="text-gray-800 font-medium">{c.props.text}</p>
            )}
            {c.type === "Image" && (
              <img
                src={c.props.src}
                alt={c.props.alt}
                className="max-w-full rounded"
              />
            )}
            {c.type === "Button" && (
              <a
                href={c.props.link}
                className="bg-blue-500 text-white px-3 py-1 rounded shadow hover:bg-blue-600 transition-colors"
              >
                {c.props.label}
              </a>
            )}
            {c.type === "Input" && (
              <input
                placeholder={c.props.placeholder}
                className="border p-1 rounded w-full"
              />
            )}
            {c.type === "Video" && (
              <iframe
                width="100%"
                height="200"
                src={c.props.src}
                frameBorder="0"
                allowFullScreen
                className="rounded"
              ></iframe>
            )}
            {c.type === "Container" && (
              <div className="p-4 border-dashed border-2 rounded text-gray-500">
                Container
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import {
  FaFont,
  FaImage,
  FaRegSquare,
  FaRegKeyboard,
  FaBoxOpen,
  FaVideo,
} from "react-icons/fa";

const elements = ["Text", "Image", "Button", "Input", "Container", "Video"];

export default function Sidebar({ setComponents }) {
  const handleAdd = (type) => {
    let defaultProps = {};
    switch (type) {
      case "Text":
        defaultProps = { text: "Edit this text" };
        break;
      case "Image":
        defaultProps = {
          src: "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
          alt: "Placeholder",
        };
        break;
      case "Button":
        defaultProps = { label: "Click Me", link: "https://www.google.com" };
        break;
      case "Input":
        defaultProps = { placeholder: "Enter text" };
        break;
      case "Video":
        defaultProps = { src: "https://www.youtube.com/embed/dQw4w9WgXcQ" };
        break;
      default:
        defaultProps = {};
    }

    setComponents((prev) => [
      ...prev,
      { id: Date.now(), type, props: defaultProps },
    ]);
  };

  const elementIcons = {
    Text: <FaFont className="text-blue-500" />,
    Image: <FaImage className="text-pink-500" />,
    Button: <FaRegSquare className="text-green-500" />,
    Input: <FaRegKeyboard className="text-yellow-500" />,
    Container: <FaBoxOpen className="text-purple-500" />,
    Video: <FaVideo className="text-red-500" />,
  };

  return (
    <div className="w-52 bg-gray-50 p-4 border-r shadow-sm flex flex-col">
      <h2 className="text-lg font-extrabold mb-4 tracking-tight flex items-center gap-2">
        Elements
      </h2>
      <div className="flex flex-col gap-2">
        {elements.map((el) => (
          <button
            key={el}
            className="flex items-center gap-3 py-2 px-3 bg-white rounded-lg shadow-sm hover:bg-blue-50 transition-colors text-gray-800 font-medium text-base group"
            onClick={() => handleAdd(el)}
          >
            <span className="text-xl">{elementIcons[el]}</span>
            <span className="group-hover:text-blue-600 transition-colors">
              {el}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

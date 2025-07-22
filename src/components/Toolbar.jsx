import React from "react";
import { FaFileExport } from "react-icons/fa";

export default function Toolbar({ components }) {
  const handleExport = () => {
    const html = components
      .map((c) => {
        if (c.type === "Text") return `<p>${c.props.text}</p>`;
        if (c.type === "Image")
          return `<img src="${c.props.src}" alt="${c.props.alt}" />`;
        if (c.type === "Button")
          return `<a href="${c.props.link}">${c.props.label}</a>`;
        if (c.type === "Input")
          return `<input placeholder="${c.props.placeholder}" />`;
        if (c.type === "Video")
          return `<iframe src="${c.props.src}" frameborder="0"></iframe>`;
        return `<div>${c.type}</div>`;
      })
      .join("\n");

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "page.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <button
        onClick={handleExport}
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <FaFileExport className="text-2xl" /> Export HTML
      </button>
    </div>
  );
}

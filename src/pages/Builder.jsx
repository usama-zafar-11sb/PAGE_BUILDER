import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";
import ConfigPanel from "../components/ConfigPanel";
import LayersPanel from "../components/LayersPanel";

export default function Builder() {
  const [components, setComponents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const handleExportEvent = () => {
      const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background-color: #0f172a; color: white; padding: 50px; }
    </style>
</head>
<body>
    <div class="max-w-4xl mx-auto space-y-8">
        ${components
          .map((c) => {
            if (c.type === "Text")
              return `<p style="font-size: ${c.props.fontSize}; color: ${c.props.color}">${c.props.text}</p>`;
            if (c.type === "Image")
              return `<img src="${c.props.src}" alt="${c.props.alt}" style="border-radius: ${c.props.borderRadius}" class="w-full" />`;
            if (c.type === "Button")
              return `<button style="background-color: ${c.props.backgroundColor}; color: ${c.props.color}; border-radius: ${c.props.borderRadius}; padding: ${c.props.padding}">${c.props.label}</button>`;
            if (c.type === "Input")
              return `<input placeholder="${c.props.placeholder}" style="border-radius: ${c.props.borderRadius}" class="w-full bg-slate-800 border-slate-700 p-4" />`;
            if (c.type === "Video")
              return `<iframe src="${c.props.src}" frameborder="0" class="w-full h-[400px]" style="border-radius: ${c.props.borderRadius}"></iframe>`;
            return `<div>${c.type}</div>`;
          })
          .join("\n")}
    </div>
</body>
</html>`;

      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "page-export.html";
      a.click();
      URL.revokeObjectURL(url);
    };

    window.addEventListener("EXPORT_PAGE", handleExportEvent);
    return () => window.removeEventListener("EXPORT_PAGE", handleExportEvent);
  }, [components]);

  return (
    <div className="flex h-[calc(100vh-64px)] bg-dark overflow-hidden">
      <Sidebar setComponents={setComponents} />

      <main className="flex-1 flex flex-col relative min-w-0">
        <Canvas
          components={components}
          setComponents={setComponents}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </main>

      <div className="w-80 flex flex-col border-l border-dark-border glass">
        <div className="flex-1 overflow-hidden flex flex-col">
          <ConfigPanel
            components={components}
            setComponents={setComponents}
            selectedId={selectedId}
          />
        </div>
        <div className="h-1/3 border-t border-dark-border">
          <LayersPanel
            components={components}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
          />
        </div>
      </div>
    </div>
  );
}

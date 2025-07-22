import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";
import ConfigPanel from "../components/ConfigPanel";
import LayersPanel from "../components/LayersPanel";
import Toolbar from "../components/Toolbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Builder() {
  const [components, setComponents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-[calc(100vh-56px)]">
        <Sidebar setComponents={setComponents} />
        <Canvas
          components={components}
          setComponents={setComponents}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <ConfigPanel
          components={components}
          setComponents={setComponents}
          selectedId={selectedId}
        />
        <LayersPanel components={components} setSelectedId={setSelectedId} />
        <Toolbar components={components} setComponents={setComponents} />
      </div>
    </DndProvider>
  );
}

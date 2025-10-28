"use client";
import { useState } from "react";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{
        marginBottom: "20px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <button
        style={{
          backgroundColor: "#e0e0e0",
          color: "black",
          border: "1px solid #ccc",
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        Collapse All
      </button>
      <button
        style={{
          backgroundColor: "#e0e0e0",
          color: "black",
          border: "1px solid #ccc",
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        View Progress
      </button>

      <select
        style={{
          backgroundColor: "#e0e0e0",
          color: "black",
          border: "1px solid #ccc",
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        <option>✓ Publish all</option>
        <option>✓ Publish all modules and items</option>
        <option>✕ Unpublish all modules and items</option>
        <option>✓ Publish modules only</option>
      </select>

      <button
        onClick={handleShow}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "8px 16px",
          cursor: "pointer",
          marginLeft: "auto",
        }}
      >
        + Module
      </button>

      <ModuleEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}

"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, editModule } from "./reducer";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { Module as DatabaseModule, Lesson } from "../../../Database/types";

// Extend the Module type to include editing
interface Module extends DatabaseModule {
  editing?: boolean;
}

interface RootState {
  modulesReducer: {
    modules: Module[];
  };
}

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid as string }));
          setModuleName("");
        }}
      />

      {/* Data-Driven Modules List */}
      <ul id="wd-modules" style={{ listStyle: "none", padding: 0 }}>
        {modules
          .filter((module: Module) => module.course === cid)
          .map((module: Module) => (
            <li
              key={module._id}
              className="wd-module"
              style={{ marginBottom: "10px" }}
            >
              {/* Module Header */}
              <div
                className="wd-title"
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <i
                    className="bi bi-grip-vertical"
                    style={{ marginRight: "10px" }}
                  ></i>
                  {!module.editing && <strong>{module.name}</strong>}
                  {module.editing && (
                    <input
                      type="text"
                      defaultValue={module.name}
                      style={{
                        display: "inline-block",
                        width: "50%",
                        padding: "4px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                      }}
                      onChange={(e) =>
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
                    />
                  )}
                </div>
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    dispatch(deleteModule(moduleId));
                  }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>

              {/* Lessons List */}
              {module.lessons && module.lessons.length > 0 && (
                <ul
                  className="wd-lessons"
                  style={{ listStyle: "none", padding: 0 }}
                >
                  {module.lessons.map((lesson: Lesson, index: number) => (
                    <li
                      key={lesson._id}
                      className="wd-lesson"
                      style={{
                        borderLeft: "4px solid green",
                        backgroundColor: "white",
                        padding: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: index > 0 ? "2px" : "0",
                      }}
                    >
                      <div>
                        <i
                          className="bi bi-file-text"
                          style={{ marginRight: "10px" }}
                        ></i>
                        <span className="wd-title">{lesson.name}</span>
                      </div>
                      <div>
                        <i className="bi bi-three-dots-vertical"></i>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

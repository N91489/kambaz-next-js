"use client";
import { useParams } from "next/navigation";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as db from "../../../Database";
import { Module, Lesson } from "../../../Database/types";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
    <div style={{ padding: "20px" }}>
      {/* Buttons section - keep as is */}
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
      </div>

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
                  <strong>{module.name}</strong>
                </div>
                <div>
                  <i
                    className="bi bi-plus-circle"
                    style={{ marginRight: "10px" }}
                  ></i>
                  <i className="bi bi-three-dots-vertical"></i>
                </div>
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

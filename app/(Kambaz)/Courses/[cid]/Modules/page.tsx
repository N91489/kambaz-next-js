"use client";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Modules() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Buttons section */}
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

        {/* Publish All Dropdown - NO ICONS in options */}
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

      {/* Modules List */}
      <ul id="wd-modules" style={{ listStyle: "none", padding: 0 }}>
        <li className="wd-module" style={{ marginBottom: "10px" }}>
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
              <strong>Week 1</strong>
            </div>
            <div>
              <i
                className="bi bi-plus-circle"
                style={{ marginRight: "10px" }}
              ></i>
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
          <ul className="wd-lessons" style={{ listStyle: "none", padding: 0 }}>
            <li
              className="wd-lesson"
              style={{
                borderLeft: "4px solid green",
                backgroundColor: "white",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <i
                  className="bi bi-file-text"
                  style={{ marginRight: "10px" }}
                ></i>
                <span className="wd-title">LEARNING OBJECTIVES</span>
              </div>
              <div>
                <i className="bi bi-three-dots-vertical"></i>
              </div>
            </li>
            <li
              className="wd-lesson"
              style={{
                borderLeft: "4px solid green",
                backgroundColor: "white",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "2px",
              }}
            >
              <div>
                <i
                  className="bi bi-file-text"
                  style={{ marginRight: "10px" }}
                ></i>
                <span className="wd-title">Introduction to the course</span>
              </div>
              <div>
                <i className="bi bi-three-dots-vertical"></i>
              </div>
            </li>
            <li
              className="wd-lesson"
              style={{
                borderLeft: "4px solid green",
                backgroundColor: "white",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "2px",
              }}
            >
              <div>
                <i
                  className="bi bi-file-text"
                  style={{ marginRight: "10px" }}
                ></i>
                <span className="wd-title">Learn what is Web Development</span>
              </div>
              <div>
                <i className="bi bi-three-dots-vertical"></i>
              </div>
            </li>
          </ul>
        </li>

        <li className="wd-module" style={{ marginBottom: "10px" }}>
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
              <strong>Week 2</strong>
            </div>
            <div>
              <i
                className="bi bi-plus-circle"
                style={{ marginRight: "10px" }}
              ></i>
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
          <ul className="wd-lessons" style={{ listStyle: "none", padding: 0 }}>
            <li
              className="wd-lesson"
              style={{
                borderLeft: "4px solid green",
                backgroundColor: "white",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <i
                  className="bi bi-file-text"
                  style={{ marginRight: "10px" }}
                ></i>
                <span className="wd-title">LEARNING OBJECTIVES</span>
              </div>
              <div>
                <i className="bi bi-three-dots-vertical"></i>
              </div>
            </li>
            <li
              className="wd-lesson"
              style={{
                borderLeft: "4px solid green",
                backgroundColor: "white",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "2px",
              }}
            >
              <div>
                <i
                  className="bi bi-file-text"
                  style={{ marginRight: "10px" }}
                ></i>
                <span className="wd-title">
                  Advanced Web Development Topics
                </span>
              </div>
              <div>
                <i className="bi bi-three-dots-vertical"></i>
              </div>
            </li>
          </ul>
        </li>

        <li className="wd-module" style={{ marginBottom: "10px" }}>
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
              <strong>Week 3</strong>
            </div>
            <div>
              <i
                className="bi bi-plus-circle"
                style={{ marginRight: "10px" }}
              ></i>
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

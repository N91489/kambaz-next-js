"use client";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Modules() {
  // Data structure for modules and lessons
  const modules = [
    {
      id: "M101",
      name: "Week 1",
      lessons: [
        { id: "L101", title: "LEARNING OBJECTIVES" },
        { id: "L102", title: "Introduction to the course" },
        { id: "L103", title: "Learn what is Web Development" },
      ],
    },
    {
      id: "M102",
      name: "Week 2",
      lessons: [
        { id: "L201", title: "LEARNING OBJECTIVES" },
        { id: "L202", title: "Advanced Web Development Topics" },
      ],
    },
    {
      id: "M103",
      name: "Week 3",
      lessons: [],
    },
  ];

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

        {/* Publish All Dropdown */}
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
        {modules.map((module) => (
          <li
            key={module.id}
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

            {/* Lessons List (only if lessons exist) */}
            {module.lessons.length > 0 && (
              <ul
                className="wd-lessons"
                style={{ listStyle: "none", padding: 0 }}
              >
                {module.lessons.map((lesson, index) => (
                  <li
                    key={lesson.id}
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
                      <span className="wd-title">{lesson.title}</span>
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

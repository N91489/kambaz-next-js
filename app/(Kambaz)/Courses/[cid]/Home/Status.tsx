"use client";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function CourseStatus() {
  return (
    <div
      id="wd-course-status"
      style={{ padding: "20px", border: "1px solid #ddd" }}
    >
      <h2>Course Status</h2>

      <div style={{ marginBottom: "15px" }}>
        <button
          style={{
            padding: "8px 16px",
            marginRight: "10px",
            backgroundColor: "#e0e0e0",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          Unpublish
        </button>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Publish
        </button>
      </div>

      <button
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <i className="bi bi-file-import" style={{ marginRight: "8px" }}></i>
        Import Existing Content
      </button>

      <button
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <i className="bi bi-cloud-upload" style={{ marginRight: "8px" }}></i>
        Import from Commons
      </button>

      <button
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <i className="bi bi-house-door" style={{ marginRight: "8px" }}></i>
        Choose Home Page
      </button>

      <button
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <i className="bi bi-speedometer2" style={{ marginRight: "8px" }}></i>
        View Course Stream
      </button>

      <button
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <i className="bi bi-megaphone" style={{ marginRight: "8px" }}></i>
        New Announcement
      </button>

      <button
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <i className="bi bi-bar-chart" style={{ marginRight: "8px" }}></i>
        New Analytics
      </button>

      <button
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <i className="bi bi-bell" style={{ marginRight: "8px" }}></i>
        View Course Notifications
      </button>
    </div>
  );
}

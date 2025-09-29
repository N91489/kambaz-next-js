"use client";

import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home" style={{ display: "flex", width: "100%" }}>
      {/* 3rd column - Modules */}
      <div style={{ flex: "0 0 70%", padding: "20px" }}>
        <Modules />
      </div>

      {/* 4th column - Course Status */}
      <div
        className="course-status-column"
        style={{
          flex: "0 0 30%",
          padding: "20px",
          borderLeft: "1px solid #ddd",
        }}
      >
        <CourseStatus />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .course-status-column {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

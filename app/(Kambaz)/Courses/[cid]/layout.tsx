"use client";

import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default function CourseLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/* 2nd column - Course Navigation */}
      <div
        className="course-nav"
        style={{
          width: "200px",
          backgroundColor: "white",
          borderRight: "1px solid #ddd",
          minHeight: "100vh",
        }}
      >
        <CourseNavigation />
      </div>

      {/* Main content area */}
      <div style={{ flex: "1" }}>{children}</div>

      <style jsx>{`
        @media (max-width: 992px) {
          .course-nav {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

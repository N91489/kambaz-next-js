"use client";

import { ReactNode } from "react";
import { useParams } from "next/navigation";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { courses } from "../../Database";

export default function CourseLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  return (
    <div>
      <h2 style={{ color: "red", padding: "20px" }}>
        {course?.name} &gt; <Breadcrumb course={course} />
      </h2>
      <hr />
      <div style={{ display: "flex", width: "100%" }}>
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

        <div style={{ flex: "1" }}>{children}</div>

        <style jsx>{`
          @media (max-width: 992px) {
            .course-nav {
              display: none;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

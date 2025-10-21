import Link from "next/link";
import Image from "next/image";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses; // Changed this line

  return (
    <div id="wd-dashboard" style={{ padding: "20px" }}>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div
        id="wd-dashboard-courses"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {courses.map((course) => (
          <div
            key={course._id}
            className="wd-dashboard-course"
            style={{ width: "100%" }}
          >
            <Link
              href={`/Courses/${course._id}/Home`}
              className="wd-dashboard-course-link"
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/reactjs.jpg"
                  alt="Course Image"
                  width={300}
                  height={150}
                  style={{ width: "100%", height: "auto" }}
                />
                <div style={{ padding: "15px", backgroundColor: "#f5f5f5" }}>
                  <h5>{course.name}</h5>
                  <p className="wd-dashboard-course-title">
                    {course.description}
                  </p>
                  <button style={{ padding: "8px 16px", cursor: "pointer" }}>
                    Go
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

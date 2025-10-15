import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  // Data structure for courses
  const courses = [
    {
      id: "001",
      name: "CS001 React JS",
      description: "Full Stack software developer",
      image: "/images/its-hard.jpg",
    },
    {
      id: "002",
      name: "CS002 Algorithms",
      description: "Full Stack software developer",
      image: "/images/its-hard.jpg",
    },
    {
      id: "003",
      name: "CS003 System Engineer",
      description: "Full Stack software developer",
      image: "/images/its-hard.jpg",
    },
    {
      id: "004",
      name: "CS004 Low Level",
      description: "Full Stack software developer",
      image: "/images/its-hard.jpg",
    },
    {
      id: "005",
      name: "CS005 IoT",
      description: "Full Stack software developer",
      image: "/images/its-hard.jpg",
    },
    {
      id: "006",
      name: "CS006 AI/ML",
      description: "Full Stack software developer",
      image: "/images/its-hard.jpg",
    },
    {
      id: "007",
      name: "CS007 Backend Engineering",
      description: "Full Stack software developer",
      image: "/images/its-hard.jpg",
    },
  ];

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
            key={course.id}
            className="wd-dashboard-course"
            style={{ width: "100%" }}
          >
            <Link
              href={`/Courses/${course.id}`}
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
                  src={course.image}
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

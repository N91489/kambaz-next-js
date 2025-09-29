import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={{ padding: "20px" }}>
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div
        id="wd-dashboard-courses"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <div className="wd-dashboard-course" style={{ width: "100%" }}>
          <Link href="/Courses/001" className="wd-dashboard-course-link">
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/its-hard.jpg"
                alt="Course Image"
                width={300}
                height={150}
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ padding: "15px", backgroundColor: "#f5f5f5" }}>
                <h5>CS001 React JS</h5>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <button style={{ padding: "8px 16px", cursor: "pointer" }}>
                  Go
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course" style={{ width: "100%" }}>
          <Link href="/Courses/002" className="wd-dashboard-course-link">
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/its-hard.jpg"
                alt="Course Image"
                width={300}
                height={150}
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ padding: "15px", backgroundColor: "#f5f5f5" }}>
                <h5>CS002 Algorithms</h5>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <button style={{ padding: "8px 16px", cursor: "pointer" }}>
                  Go
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course" style={{ width: "100%" }}>
          <Link href="/Courses/003" className="wd-dashboard-course-link">
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/its-hard.jpg"
                alt="Course Image"
                width={300}
                height={150}
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ padding: "15px", backgroundColor: "#f5f5f5" }}>
                <h5>CS003 System Engineer</h5>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <button style={{ padding: "8px 16px", cursor: "pointer" }}>
                  Go
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course" style={{ width: "100%" }}>
          <Link href="/Courses/004" className="wd-dashboard-course-link">
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/its-hard.jpg"
                alt="Course Image"
                width={300}
                height={150}
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ padding: "15px", backgroundColor: "#f5f5f5" }}>
                <h5>CS004 Low Level</h5>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <button style={{ padding: "8px 16px", cursor: "pointer" }}>
                  Go
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course" style={{ width: "100%" }}>
          <Link href="/Courses/005" className="wd-dashboard-course-link">
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/its-hard.jpg"
                alt="Course Image"
                width={300}
                height={150}
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ padding: "15px", backgroundColor: "#f5f5f5" }}>
                <h5>CS005 IoT</h5>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <button style={{ padding: "8px 16px", cursor: "pointer" }}>
                  Go
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course" style={{ width: "100%" }}>
          <Link href="/Courses/006" className="wd-dashboard-course-link">
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/its-hard.jpg"
                alt="Course Image"
                width={300}
                height={150}
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ padding: "15px", backgroundColor: "#f5f5f5" }}>
                <h5>CS006 AI/ML</h5>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <button style={{ padding: "8px 16px", cursor: "pointer" }}>
                  Go
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course" style={{ width: "100%" }}>
          <Link href="/Courses/007" className="wd-dashboard-course-link">
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/its-hard.jpg"
                alt="Course Image"
                width={300}
                height={150}
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ padding: "15px", backgroundColor: "#f5f5f5" }}>
                <h5>CS007 Backend Engineering</h5>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <button style={{ padding: "8px 16px", cursor: "pointer" }}>
                  Go
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

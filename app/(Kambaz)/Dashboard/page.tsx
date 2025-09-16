import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/001" className="wd-dashboard-course-link">
            <Image
              src="/images/its-hard.jpg"
              alt="Course Image"
              width={200}
              height={150}
            />
            <div>
              <h5> CS001 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/002" className="wd-dashboard-course-link">
            <Image
              src="/images/its-hard.jpg"
              alt="Course Image"
              width={200}
              height={150}
            />
            <div>
              <h5> CS002 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/003" className="wd-dashboard-course-link">
            <Image
              src="/images/its-hard.jpg"
              alt="Course Image"
              width={200}
              height={150}
            />
            <div>
              <h5> CS003 System Engineer </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/004" className="wd-dashboard-course-link">
            <Image
              src="/images/its-hard.jpg"
              alt="Course Image"
              width={200}
              height={150}
            />
            <div>
              <h5> CS004 Low Level </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/005" className="wd-dashboard-course-link">
            <Image
              src="/images/its-hard.jpg"
              alt="Course Image"
              width={200}
              height={150}
            />
            <div>
              <h5> CS005 IoT </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/006" className="wd-dashboard-course-link">
            <Image
              src="/images/its-hard.jpg"
              alt="Course Image"
              width={200}
              height={150}
            />
            <div>
              <h5> CS006 AI/ML</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/007" className="wd-dashboard-course-link">
            <Image
              src="/images/its-hard.jpg"
              alt="Course Image"
              width={200}
              height={150}
            />
            <div>
              <h5>CS007 Backend Engineering</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

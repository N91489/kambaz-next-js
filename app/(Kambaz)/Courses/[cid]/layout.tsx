"use client";

import { ReactNode, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import { Course } from "../../Database/types";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface User {
  _id: string;
  role: string;
}

interface RootState {
  coursesReducer: {
    courses: Course[];
  };
  enrollmentsReducer: {
    enrollments: Enrollment[];
  };
  accountReducer: {
    currentUser: User | null;
  };
}

export default function CourseLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const { cid } = useParams();
  const router = useRouter();
  const [showNav, setShowNav] = useState(true);

  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer
  );
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  const course = courses.find((course: Course) => course._id === cid);

  // Route Protection
  useEffect(() => {
    if (currentUser) {
      const isEnrolled = enrollments.some(
        (e: Enrollment) => e.user === currentUser._id && e.course === cid
      );
      const isFaculty = currentUser.role === "FACULTY";

      if (!isEnrolled && !isFaculty) {
        alert("You are not enrolled in this course!");
        router.push("/Dashboard");
      }
    }
  }, [currentUser, enrollments, cid, router]);

  return (
    <div>
      <h2 style={{ color: "red", padding: "20px" }}>
        <i
          className="bi bi-list"
          style={{ cursor: "pointer", marginRight: "15px" }}
          onClick={() => setShowNav(!showNav)}
        ></i>
        {course?.name} &gt; <Breadcrumb course={course} />
      </h2>
      <hr />
      <div style={{ display: "flex", width: "100%" }}>
        {showNav && (
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
        )}

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

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enrollCourse, unenrollCourse } from "../Enrollments/reducer";
import { Course } from "../Database/types";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: string;
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
}

interface RootState {
  coursesReducer: {
    courses: Course[];
  };
  accountReducer: {
    currentUser: User | null;
  };
  enrollmentsReducer: {
    enrollments: Enrollment[];
  };
}

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer
  );
  const dispatch = useDispatch();

  const [course, setCourse] = useState<Partial<Course>>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const [showAllCourses, setShowAllCourses] = useState(false);

  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some(
      (e: Enrollment) => e.user === currentUser._id && e.course === courseId
    );
  };

  const handleEnrollment = (courseId: string) => {
    if (!currentUser) return;

    if (isEnrolled(courseId)) {
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    }
  };

  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((c) => isEnrolled(c._id));

  return (
    <div id="wd-dashboard" style={{ padding: "20px" }}>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Course Management Form - Only for Faculty */}
      {currentUser?.role === "FACULTY" && (
        <>
          <div style={{ marginBottom: "30px" }}>
            <h5>New Course</h5>
            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
              <button
                onClick={() => dispatch(addNewCourse(course as Course))}
                id="wd-add-new-course-click"
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Add
              </button>
              <button
                onClick={() => dispatch(updateCourse(course as Course))}
                id="wd-update-course-click"
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#ffc107",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Update
              </button>
            </div>

            <input
              value={course.name || ""}
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
              placeholder="Course Name"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <input
              value={course.number || ""}
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
              placeholder="Course Number"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <input
              value={course.startDate || ""}
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
              type="date"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <input
              value={course.endDate || ""}
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
              type="date"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <textarea
              value={course.description || ""}
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
              placeholder="Course Description"
              rows={3}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <hr />
        </>
      )}

      {/* Header with Enrollment Toggle */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h2 id="wd-dashboard-published">
          Published Courses ({displayedCourses.length})
        </h2>
        {currentUser && (
          <button
            onClick={() => setShowAllCourses(!showAllCourses)}
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
          </button>
        )}
      </div>
      <hr />

      <div
        id="wd-dashboard-courses"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {displayedCourses.map((c) => (
          <div
            key={c._id}
            className="wd-dashboard-course"
            style={{ width: "100%" }}
          >
            <Link
              href={`/Courses/${c._id}/Home`}
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
                  <h5>{c.name}</h5>
                  <p className="wd-dashboard-course-title">{c.description}</p>

                  <button style={{ padding: "8px 16px", cursor: "pointer" }}>
                    Go
                  </button>

                  {/* Faculty Controls */}
                  {currentUser?.role === "FACULTY" && (
                    <>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          if (
                            window.confirm(
                              `Are you sure you want to delete ${c.name}?`
                            )
                          ) {
                            dispatch(deleteCourse(c._id));
                          }
                        }}
                        id="wd-delete-course-click"
                        style={{
                          float: "right",
                          marginLeft: "5px",
                          padding: "8px 16px",
                          backgroundColor: "#dc3545",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(c);
                        }}
                        id="wd-edit-course-click"
                        style={{
                          float: "right",
                          padding: "8px 16px",
                          backgroundColor: "#ffc107",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                      >
                        Edit
                      </button>
                    </>
                  )}

                  {/* Student Enrollment Controls */}
                  {currentUser?.role === "STUDENT" && showAllCourses && (
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        handleEnrollment(c._id);
                      }}
                      style={{
                        float: "right",
                        padding: "8px 16px",
                        backgroundColor: isEnrolled(c._id)
                          ? "#dc3545"
                          : "#28a745",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      {isEnrolled(c._id) ? "Unenroll" : "Enroll"}
                    </button>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

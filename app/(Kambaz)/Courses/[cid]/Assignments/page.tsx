"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as db from "../../../Database";
import { Assignment } from "../../../Database/types";

export default function Assignments() {
  const params = useParams();
  const router = useRouter();
  const cid = params.cid as string;
  const assignments = db.assignments;
  const filteredAssignments = assignments.filter(
    (assignment: Assignment) => assignment.course === cid
  );

  const handleAddAssignment = () => {
    router.push(`/Courses/${cid}/Assignments/new`);
  };

  return (
    <div id="wd-assignments" style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ position: "relative", width: "300px" }}>
          <i
            className="bi bi-search"
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#666",
            }}
          ></i>
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            style={{
              width: "100%",
              padding: "8px 8px 8px 35px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            id="wd-add-assignment-group"
            style={{
              padding: "8px 16px",
              backgroundColor: "#e0e0e0",
              border: "1px solid #ccc",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            <i className="bi bi-plus-circle" style={{ marginRight: "5px" }}></i>
            Group
          </button>
          <button
            id="wd-add-assignment"
            onClick={handleAddAssignment}
            style={{
              padding: "8px 16px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            <i className="bi bi-plus-circle" style={{ marginRight: "5px" }}></i>
            Assignment
          </button>
        </div>
      </div>

      <div style={{ border: "1px solid #ddd", borderRadius: "4px" }}>
        <div
          style={{
            backgroundColor: "#f0f0f0",
            padding: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
          }}
        >
          <div>
            <i
              className="bi bi-grip-vertical"
              style={{ marginRight: "10px" }}
            ></i>
            <strong>ASSIGNMENTS</strong>
            <span style={{ marginLeft: "10px", color: "#666" }}>
              40% of Total
            </span>
          </div>
          <div>
            <i
              className="bi bi-plus-circle"
              style={{ marginRight: "10px", cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-three-dots-vertical"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>

        <ul
          id="wd-assignment-list"
          style={{ listStyle: "none", padding: 0, margin: 0 }}
        >
          {filteredAssignments.map((assignment: Assignment, index: number) => (
            <li
              key={assignment._id}
              className="wd-assignment-list-item"
              style={{
                borderLeft: "4px solid green",
                padding: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom:
                  index < filteredAssignments.length - 1
                    ? "1px solid #ddd"
                    : "none",
              }}
            >
              <div>
                <i
                  className="bi bi-grip-vertical"
                  style={{ marginRight: "10px", color: "#666" }}
                ></i>
                <i
                  className="bi bi-file-text"
                  style={{ marginRight: "10px", color: "green" }}
                ></i>
                <div style={{ display: "inline-block" }}>
                  <Link
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="wd-assignment-link"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <strong>{assignment.title}</strong>
                  </Link>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      marginTop: "4px",
                    }}
                  >
                    <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                    <strong>Not available until</strong>{" "}
                    {assignment.availableFromDate} |
                    <br />
                    <strong>Due</strong> {assignment.dueDate} |{" "}
                    {assignment.points} pts
                  </div>
                </div>
              </div>
              <div>
                <i
                  className="bi bi-check-circle"
                  style={{ marginRight: "10px", color: "green" }}
                ></i>
                <i
                  className="bi bi-three-dots-vertical"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

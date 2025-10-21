"use client";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../Database";
import { User, Enrollment } from "../../../Database/types";

export default function People() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  return (
    <div id="wd-people-table" style={{ padding: "20px" }}>
      <h2>People</h2>

      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#f0f0f0",
              borderBottom: "2px solid #ddd",
            }}
          >
            <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Login ID</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Section</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Role</th>
            <th style={{ padding: "12px", textAlign: "left" }}>
              Last Activity
            </th>
            <th style={{ padding: "12px", textAlign: "left" }}>
              Total Activity
            </th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((usr: User) =>
              enrollments.some(
                (enrollment: Enrollment) =>
                  enrollment.user === usr._id && enrollment.course === cid
              )
            )
            .map((user: User) => (
              <tr key={user._id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "12px" }}>
                  <FaUserCircle
                    style={{ marginRight: "10px", fontSize: "24px" }}
                  />
                  <strong>
                    {user.firstName} {user.lastName}
                  </strong>
                </td>
                <td style={{ padding: "12px" }}>{user.loginId}</td>
                <td style={{ padding: "12px" }}>{user.section}</td>
                <td style={{ padding: "12px" }}>{user.role}</td>
                <td style={{ padding: "12px" }}>{user.lastActivity}</td>
                <td style={{ padding: "12px" }}>{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

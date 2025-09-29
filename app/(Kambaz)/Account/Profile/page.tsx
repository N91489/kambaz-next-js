"use client";
import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ maxWidth: "400px" }}>
      <h3>Profile</h3>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Username
        </label>
        <input
          defaultValue="alice"
          placeholder="username"
          className="wd-username form-control"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Password
        </label>
        <input
          defaultValue="123"
          placeholder="password"
          type="password"
          className="wd-password form-control"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          First Name
        </label>
        <input
          defaultValue="Alice"
          placeholder="First Name"
          id="wd-firstname"
          className="form-control"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Last Name
        </label>
        <input
          defaultValue="Wonderland"
          placeholder="Last Name"
          id="wd-lastname"
          className="form-control"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Date of Birth
        </label>
        <input
          defaultValue="2000-01-01"
          type="date"
          id="wd-dob"
          className="form-control"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
        <input
          defaultValue="alice@wonderland"
          type="email"
          id="wd-email"
          className="form-control"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Role</label>
        <select
          defaultValue="FACULTY"
          id="wd-role"
          className="form-select"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      <Link
        href="/Account/Signin"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
        }}
      >
        Sign out
      </Link>
    </div>
  );
}

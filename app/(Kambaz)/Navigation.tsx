"use client";

import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function KambazNavigation() {
  return (
    <div
      id="wd-kambaz-navigation"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <div>
        <div>
          <b>Nishit Agarwal</b>
        </div>
        <br />
        <div>
          <Link href="https://github.com/N91489/kambaz-next-js"> Github </Link>
        </div>
      </div>

      <br />

      {/* Northeastern - with logo */}
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        style={{ color: "white" }}
      >
        <div style={{ textAlign: "center" }}>
          <i className="bi bi-building" style={{ fontSize: "24px" }}></i>
          <div>Northeastern</div>
        </div>
      </a>
      <br />

      {/* Account - black background, white text and icon */}
      <Link href="/Account" id="wd-account-link" style={{ color: "white" }}>
        <div style={{ textAlign: "center" }}>
          <i className="bi bi-person-circle" style={{ fontSize: "24px" }}></i>
          <div>Account</div>
        </div>
      </Link>
      <br />

      {/* Dashboard - white background, red text and icon */}
      <Link
        href="/Dashboard"
        id="wd-dashboard-link"
        style={{
          backgroundColor: "white",
          color: "red",
          display: "inline-block",
          padding: "5px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <i className="bi bi-speedometer2" style={{ fontSize: "24px" }}></i>
          <div>Dashboard</div>
        </div>
      </Link>
      <br />

      {/* Courses - black background, white text, red icon */}
      <Link href="/Dashboard" id="wd-course-link" style={{ color: "white" }}>
        <div style={{ textAlign: "center" }}>
          <i
            className="bi bi-book"
            style={{ color: "red", fontSize: "24px" }}
          ></i>
          <div>Courses</div>
        </div>
      </Link>
      <br />

      {/* Calendar - black background, white text, red icon */}
      <Link
        href="https://registrar.northeastern.edu/article/academic-calendar/"
        id="wd-calendar-link"
        style={{ color: "white" }}
      >
        <div style={{ textAlign: "center" }}>
          <i
            className="bi bi-calendar"
            style={{ color: "red", fontSize: "24px" }}
          ></i>
          <div>Calendar</div>
        </div>
      </Link>
      <br />

      {/* Inbox - black background, white text, red icon */}
      <Link
        href="https://outlook.office.com/mail/"
        id="wd-inbox-link"
        style={{ color: "white" }}
      >
        <div style={{ textAlign: "center" }}>
          <i
            className="bi bi-envelope"
            style={{ color: "red", fontSize: "24px" }}
          ></i>
          <div>Inbox</div>
        </div>
      </Link>
      <br />

      {/* Labs - black background, white text, red icon */}
      <Link href="/Labs" id="wd-labs-link" style={{ color: "white" }}>
        <div style={{ textAlign: "center" }}>
          <i
            className="bi bi-flask"
            style={{ color: "red", fontSize: "24px" }}
          ></i>
          <div>Labs</div>
        </div>
      </Link>
      <br />
    </div>
  );
}

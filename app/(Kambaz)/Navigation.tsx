"use client";

import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function KambazNavigation() {
  // Data structure for navigation links
  const links = [
    {
      id: "wd-neu-link",
      label: "Northeastern",
      href: "https://www.northeastern.edu/",
      icon: "bi-building",
      isExternal: true,
      style: { color: "white" },
    },
    {
      id: "wd-account-link",
      label: "Account",
      href: "/Account",
      icon: "bi-person-circle",
      isExternal: false,
      style: { color: "white" },
    },
    {
      id: "wd-dashboard-link",
      label: "Dashboard",
      href: "/Dashboard",
      icon: "bi-speedometer2",
      isExternal: false,
      isActive: true,
      style: {
        backgroundColor: "white",
        color: "red",
        display: "inline-block",
        padding: "5px",
      },
    },
    {
      id: "wd-course-link",
      label: "Courses",
      href: "/Dashboard",
      icon: "bi-book",
      isExternal: false,
      iconColor: "red",
      style: { color: "white" },
    },
    {
      id: "wd-calendar-link",
      label: "Calendar",
      href: "https://registrar.northeastern.edu/article/academic-calendar/",
      icon: "bi-calendar",
      isExternal: true,
      iconColor: "red",
      style: { color: "white" },
    },
    {
      id: "wd-inbox-link",
      label: "Inbox",
      href: "https://outlook.office.com/mail/",
      icon: "bi-envelope",
      isExternal: true,
      iconColor: "red",
      style: { color: "white" },
    },
    {
      id: "wd-labs-link",
      label: "Labs",
      href: "/Labs",
      icon: "bi-flask",
      isExternal: false,
      iconColor: "red",
      style: { color: "white" },
    },
  ];

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

      {/* Data-driven navigation links */}
      {links.map((link) => (
        <div key={link.id}>
          {link.isExternal ? (
            <a href={link.href} id={link.id} style={link.style}>
              <div style={{ textAlign: "center" }}>
                <i
                  className={`bi ${link.icon}`}
                  style={{
                    fontSize: "24px",
                    color: link.iconColor || "inherit",
                  }}
                ></i>
                <div>{link.label}</div>
              </div>
            </a>
          ) : (
            <Link href={link.href} id={link.id} style={link.style}>
              <div style={{ textAlign: "center" }}>
                <i
                  className={`bi ${link.icon}`}
                  style={{
                    fontSize: "24px",
                    color: link.iconColor || "inherit",
                  }}
                ></i>
                <div>{link.label}</div>
              </div>
            </Link>
          )}
          <br />
        </div>
      ))}
    </div>
  );
}

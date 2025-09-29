"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function CourseNavigation() {
  const params = useParams();
  const pathname = usePathname();
  const cid = params.cid as string;

  const links = [
    { href: `/Courses/${cid}/Home`, id: "wd-course-home-link", label: "Home" },
    {
      href: `/Courses/${cid}/Modules`,
      id: "wd-course-modules-link",
      label: "Modules",
    },
    {
      href: `/Courses/${cid}/Piazza`,
      id: "wd-course-piazza-link",
      label: "Piazza",
    },
    { href: `/Courses/${cid}/Zoom`, id: "wd-course-zoom-link", label: "Zoom" },
    {
      href: `/Courses/${cid}/Assignments`,
      id: "wd-course-assignments-link",
      label: "Assignments",
    },
    {
      href: `/Courses/${cid}/Quizzes`,
      id: "wd-course-quizzes-link",
      label: "Quizzes",
    },
    {
      href: `/Courses/${cid}/Grades`,
      id: "wd-course-grades-link",
      label: "Grades",
    },
    {
      href: `/Courses/${cid}/People/Table`,
      id: "wd-course-people-link",
      label: "People",
    },
  ];

  return (
    <div
      id="wd-courses-navigation"
      style={{ backgroundColor: "white", padding: "10px" }}
    >
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <div key={link.id}>
            <Link
              href={link.href}
              id={link.id}
              style={{
                color: isActive ? "black" : "red",
                borderLeft: isActive ? "4px solid black" : "none",
                paddingTop: "8px",
                paddingBottom: "8px",
                paddingLeft: isActive ? "10px" : "14px",
                paddingRight: "14px",
                display: "block",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

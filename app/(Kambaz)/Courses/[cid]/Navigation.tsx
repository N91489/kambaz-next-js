"use client";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const pathname = usePathname();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" style={{ padding: "10px" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {links.map((link) => {
          const isActive =
            pathname.endsWith(link) ||
            (link === "Home" && pathname.endsWith(cid as string));

          return (
            <li key={link} style={{ marginBottom: "5px" }}>
              <Link
                href={`/Courses/${cid}/${link}`}
                style={{
                  display: "block",
                  padding: "10px",
                  textDecoration: "none",
                  color: isActive ? "black" : "red",
                  backgroundColor: isActive ? "#f0f0f0" : "transparent",
                  borderLeft: isActive
                    ? "3px solid black"
                    : "3px solid transparent",
                }}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

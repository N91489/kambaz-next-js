"use client";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";

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
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroupItem
          key={link}
          as={Link}
          href={`/Courses/${cid}/${link}`}
          className={`border border-0 ${
            pathname.includes(link) ? "active text-black" : "text-danger"
          }`}
        >
          {link}
        </ListGroupItem>
      ))}
    </div>
  );
}

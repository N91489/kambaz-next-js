import coursesData from "./courses.json";
import modulesData from "./modules.json";
import assignmentsData from "./assignments.json";
import usersData from "./users.json";
import enrollmentsData from "./enrollments.json";
import { Course, Module, Assignment, User, Enrollment } from "./types";

export const courses: Course[] = coursesData as Course[];
export const modules: Module[] = modulesData as Module[];
export const assignments: Assignment[] = assignmentsData as Assignment[];
export const users: User[] = usersData as User[];
export const enrollments: Enrollment[] = enrollmentsData as Enrollment[];
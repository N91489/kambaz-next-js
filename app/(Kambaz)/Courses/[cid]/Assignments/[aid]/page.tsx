"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const params = useParams();
  const cid = params.cid as string;
  const aid = params.aid as string;

  const assignment = db.assignments.find((a: any) => a._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  // Dropdown options data - keep as is
  const assignmentGroups = [
    { value: "ASSIGNMENTS", label: "ASSIGNMENTS" },
    { value: "QUIZZES", label: "QUIZZES" },
    { value: "EXAMS", label: "EXAMS" },
    { value: "PROJECT", label: "PROJECT" },
    { value: "LABS", label: "LABS" },
  ];

  const displayGradeOptions = [
    { value: "PERCENTAGE", label: "Percentage" },
    { value: "COMPLETE_INCOMPLETE", label: "Complete/Incomplete" },
    { value: "POINTS", label: "Points" },
    { value: "LETTER_GRADE", label: "Letter Grade" },
    { value: "GPA_SCALE", label: "GPA Scale" },
    { value: "NOT_GRADED", label: "Not Graded" },
  ];

  const submissionTypes = [
    { value: "ONLINE", label: "Online" },
    { value: "ON_PAPER", label: "On Paper" },
    { value: "NO_SUBMISSION", label: "No Submission" },
    { value: "EXTERNAL_TOOL", label: "External Tool" },
  ];

  const onlineEntryOptions = [
    { id: "wd-text-entry", label: "Text Entry" },
    { id: "wd-website-url", label: "Website URL" },
    { id: "wd-media-recordings", label: "Media Recordings" },
    { id: "wd-student-annotation", label: "Student Annotation" },
    { id: "wd-file-upload", label: "File Uploads" },
  ];

  return (
    <div id="wd-assignments-editor" className="container-fluid p-4">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          defaultValue={assignment.title}
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Description
        </label>
        <textarea
          id="wd-description"
          className="form-control"
          rows={10}
          defaultValue={assignment.description}
        />
      </div>

      {/* Points */}
      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-10">
          <input
            id="wd-points"
            className="form-control"
            type="number"
            defaultValue={assignment.points}
          />
        </div>
      </div>

      {/* Keep all other form fields as is */}
      {/* ... */}

      {/* Due Date */}
      <div className="mb-3">
        <label htmlFor="wd-due-date" className="form-label">
          Due
        </label>
        <input
          type="date"
          id="wd-due-date"
          className="form-control"
          defaultValue={assignment.dueDate}
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-available-from" className="form-label">
            Available from
          </label>
          <input
            type="date"
            id="wd-available-from"
            className="form-control"
            defaultValue={assignment.availableFromDate}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="wd-available-until" className="form-label">
            Until
          </label>
          <input
            type="date"
            id="wd-available-until"
            className="form-control"
            defaultValue={assignment.availableUntilDate}
          />
        </div>
      </div>

      {/* Buttons */}
      <hr />
      <div className="d-flex justify-content-end gap-2">
        <Link href={`/Courses/${cid}/Assignments`}>
          <button className="btn btn-secondary">Cancel</button>
        </Link>
        <Link href={`/Courses/${cid}/Assignments`}>
          <button className="btn btn-danger">Save</button>
        </Link>
      </div>
    </div>
  );
}

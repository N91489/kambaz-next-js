"use client";
import { useParams } from "next/navigation";

export default function AssignmentEditor() {
  const params = useParams();
  const cid = params.cid as string;
  const aid = params.aid as string;

  // Assignment data structure - could be fetched based on aid
  const assignments = {
    "123": {
      name: "A1 - ENV + HTML",
      description:
        "Your Assignment is to READ THIS BECAUSE I MADE THIS ASSIGNMENT, i dont even know what to write here i have never given an assignment i have been a student my whole life.",
      points: 100,
      assignmentGroup: "ASSIGNMENTS",
      displayGradeAs: "PERCENTAGE",
      submissionType: "ONLINE",
      assignTo: "Everyone",
      dueDate: "2025-01-01",
      availableFrom: "2025-01-01",
      availableUntil: "2025-01-01",
    },
    "124": {
      name: "A2 - CSS + BOOTSTRAP",
      description: "Learn CSS and Bootstrap for styling web applications.",
      points: 100,
      assignmentGroup: "ASSIGNMENTS",
      displayGradeAs: "PERCENTAGE",
      submissionType: "ONLINE",
      assignTo: "Everyone",
      dueDate: "2025-01-15",
      availableFrom: "2025-01-08",
      availableUntil: "2025-01-20",
    },
    "125": {
      name: "A3 - REACT + TYPESCRIPT",
      description: "Build a React application using TypeScript.",
      points: 100,
      assignmentGroup: "ASSIGNMENTS",
      displayGradeAs: "PERCENTAGE",
      submissionType: "ONLINE",
      assignTo: "Everyone",
      dueDate: "2025-02-01",
      availableFrom: "2025-01-25",
      availableUntil: "2025-02-05",
    },
  };

  // Get current assignment data
  const assignment =
    assignments[aid as keyof typeof assignments] || assignments["123"];

  // Dropdown options data
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
      {/* Breadcrumb */}
      <div className="mb-3">
        <span>Course Name &gt; Assignments &gt; Assignment Editor</span>
      </div>

      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          defaultValue={assignment.name}
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

      {/* Assignment Group - Data Driven */}
      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-sm-2 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-10">
          <select
            id="wd-group"
            className="form-select"
            defaultValue={assignment.assignmentGroup}
          >
            {assignmentGroups.map((group) => (
              <option key={group.value} value={group.value}>
                {group.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display Grade as - Data Driven */}
      <div className="row mb-3">
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-2 col-form-label text-end"
        >
          Display Grade as
        </label>
        <div className="col-sm-10">
          <select
            id="wd-display-grade-as"
            className="form-select"
            defaultValue={assignment.displayGradeAs}
          >
            {displayGradeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submission Type - Data Driven */}
      <div className="row mb-3">
        <label
          htmlFor="wd-submission-type"
          className="col-sm-2 col-form-label text-end"
        >
          Submission Type
        </label>
        <div className="col-sm-10">
          <div className="border p-3">
            <select
              id="wd-submission-type"
              className="form-select mb-3"
              defaultValue={assignment.submissionType}
            >
              {submissionTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            <div className="mb-2">
              <strong>Online Entry Options</strong>
            </div>

            {/* Online Entry Options - Data Driven */}
            {onlineEntryOptions.map((option) => (
              <div key={option.id} className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="online-options"
                  id={option.id}
                />
                <label className="form-check-label" htmlFor={option.id}>
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assign */}
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label text-end">Assign</label>
        <div className="col-sm-10">
          <div className="border p-3">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label">
                Assign to
              </label>
              <input
                id="wd-assign-to"
                className="form-control"
                defaultValue={assignment.assignTo}
              />
            </div>

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
                  defaultValue={assignment.availableFrom}
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
                  defaultValue={assignment.availableUntil}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <hr />
      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-secondary">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}

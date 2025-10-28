"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  dueDate: string;
  availableFromDate: string;
  availableUntilDate: string;
}

interface RootState {
  assignmentsReducer: {
    assignments: Assignment[];
  };
}

export default function AssignmentEditor() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const cid = params.cid as string;
  const aid = params.aid as string;

  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );

  const [assignment, setAssignment] = useState<Assignment>({
    _id: "",
    title: "New Assignment",
    course: cid,
    description: "New Assignment Description",
    points: 100,
    dueDate: new Date().toISOString().split("T")[0],
    availableFromDate: new Date().toISOString().split("T")[0],
    availableUntilDate: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    if (aid && aid !== "new") {
      const existingAssignment = assignments.find(
        (a: Assignment) => a._id === aid
      );
      if (existingAssignment) {
        setAssignment(existingAssignment);
      }
    }
  }, [aid, assignments]);

  const handleSave = () => {
    if (aid === "new") {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

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
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
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
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
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
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: parseInt(e.target.value) })
            }
          />
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-sm-2 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-10">
          <select id="wd-group" className="form-select">
            {assignmentGroups.map((group) => (
              <option key={group.value} value={group.value}>
                {group.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display Grade as */}
      <div className="row mb-3">
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-2 col-form-label text-end"
        >
          Display Grade as
        </label>
        <div className="col-sm-10">
          <select id="wd-display-grade-as" className="form-select">
            {displayGradeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submission Type */}
      <div className="row mb-3">
        <label
          htmlFor="wd-submission-type"
          className="col-sm-2 col-form-label text-end"
        >
          Submission Type
        </label>
        <div className="col-sm-10">
          <div className="border p-3">
            <select id="wd-submission-type" className="form-select mb-3">
              {submissionTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            <div className="mb-2">
              <strong>Online Entry Options</strong>
            </div>

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
                defaultValue="Everyone"
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
                value={assignment.dueDate}
                onChange={(e) =>
                  setAssignment({ ...assignment, dueDate: e.target.value })
                }
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
                  value={assignment.availableFromDate}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableFromDate: e.target.value,
                    })
                  }
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
                  value={assignment.availableUntilDate}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableUntilDate: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <hr />
      <div className="d-flex justify-content-end gap-2">
        <Link href={`/Courses/${cid}/Assignments`}>
          <button className="btn btn-secondary">Cancel</button>
        </Link>
        <button className="btn btn-danger" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

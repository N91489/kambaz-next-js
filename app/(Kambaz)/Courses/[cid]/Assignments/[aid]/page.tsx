export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        cols={50}
        rows={10}
        defaultValue={
          "Your Assignment is to READ THIS BECAUSE I MADE THIS ASSIGNMENT, i dont even know what to write here i have never given an assignment i have been a student my whole life."
        }
      ></textarea>
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
                <option value="LABS">LABS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
                <option value="COMPLETE_INCOMPLETE">Complete/Incomplete</option>
                <option value="POINTS">Points</option>
                <option value="LETTER_GRADE">Letter Grade</option>
                <option value="GPA_SCALE">GPA Scale</option>
                <option value="NOT_GRADED">Not Graded</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
                <option value="ON_PAPER">On Paper</option>
                <option value="NO_SUBMISSION">No Submission</option>
                <option value="EXTERNAL_TOOL">External Tool</option>
              </select>
              <br />
              <br />
              <strong>Online Entry Options</strong>
              <div>
                <input
                  type="checkbox"
                  name="online-options"
                  id="wd-text-entry"
                />
                <label htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="online-options"
                  id="wd-website-url"
                />
                <label htmlFor="wd-website-url">Website URL</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="online-options"
                  id="wd-media-recordings"
                />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="online-options"
                  id="wd-student-annotation"
                />
                <label htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="online-options"
                  id="wd-file-upload"
                />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" defaultValue="2025-01-01" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top"></td>
            <td>
              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  <label htmlFor="wd-available-from">
                    <strong>Available from</strong>
                  </label>
                  <br />
                  <input
                    type="date"
                    id="wd-available-from"
                    defaultValue="2025-01-01"
                  />
                </div>
                <div>
                  <label htmlFor="wd-available-until">
                    <strong>Until</strong>
                  </label>
                  <br />
                  <input
                    type="date"
                    id="wd-available-until"
                    defaultValue="2025-01-01"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <hr />
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="right">
              <button>Cancel</button> <button>Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

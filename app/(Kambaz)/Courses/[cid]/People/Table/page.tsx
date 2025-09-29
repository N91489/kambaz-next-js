export default function People() {
  return (
    <div id="wd-people-table" style={{ padding: "20px" }}>
      <h2>People</h2>

      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#f0f0f0",
              borderBottom: "2px solid #ddd",
            }}
          >
            <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Login ID</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Section</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Role</th>
            <th style={{ padding: "12px", textAlign: "left" }}>
              Last Activity
            </th>
            <th style={{ padding: "12px", textAlign: "left" }}>
              Total Activity
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "12px" }}>
              <strong>John Doe</strong>
            </td>
            <td style={{ padding: "12px" }}>john.doe@northeastern.edu</td>
            <td style={{ padding: "12px" }}>S101</td>
            <td style={{ padding: "12px" }}>Student</td>
            <td style={{ padding: "12px" }}>Sep 28, 2025</td>
            <td style={{ padding: "12px" }}>2h 15m</td>
          </tr>

          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "12px" }}>
              <strong>Jane Smith</strong>
            </td>
            <td style={{ padding: "12px" }}>jane.smith@northeastern.edu</td>
            <td style={{ padding: "12px" }}>S101</td>
            <td style={{ padding: "12px" }}>Student</td>
            <td style={{ padding: "12px" }}>Sep 29, 2025</td>
            <td style={{ padding: "12px" }}>3h 45m</td>
          </tr>

          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "12px" }}>
              <strong>Mike Johnson</strong>
            </td>
            <td style={{ padding: "12px" }}>mike.johnson@northeastern.edu</td>
            <td style={{ padding: "12px" }}>S102</td>
            <td style={{ padding: "12px" }}>TA</td>
            <td style={{ padding: "12px" }}>Sep 29, 2025</td>
            <td style={{ padding: "12px" }}>5h 30m</td>
          </tr>

          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "12px" }}>
              <strong>Sarah Williams</strong>
            </td>
            <td style={{ padding: "12px" }}>sarah.williams@northeastern.edu</td>
            <td style={{ padding: "12px" }}>S101</td>
            <td style={{ padding: "12px" }}>Student</td>
            <td style={{ padding: "12px" }}>Sep 27, 2025</td>
            <td style={{ padding: "12px" }}>1h 20m</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

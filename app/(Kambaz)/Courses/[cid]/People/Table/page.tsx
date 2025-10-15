export default function People() {
  // Data structure for people
  const people = [
    {
      id: "P001",
      name: "John Doe",
      loginId: "john.doe@northeastern.edu",
      section: "S101",
      role: "Student",
      lastActivity: "Sep 28, 2025",
      totalActivity: "2h 15m",
    },
    {
      id: "P002",
      name: "Jane Smith",
      loginId: "jane.smith@northeastern.edu",
      section: "S101",
      role: "Student",
      lastActivity: "Sep 29, 2025",
      totalActivity: "3h 45m",
    },
    {
      id: "P003",
      name: "Mike Johnson",
      loginId: "mike.johnson@northeastern.edu",
      section: "S102",
      role: "TA",
      lastActivity: "Sep 29, 2025",
      totalActivity: "5h 30m",
    },
    {
      id: "P004",
      name: "Sarah Williams",
      loginId: "sarah.williams@northeastern.edu",
      section: "S101",
      role: "Student",
      lastActivity: "Sep 27, 2025",
      totalActivity: "1h 20m",
    },
  ];

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
          {/* Data-Driven Table Rows */}
          {people.map((person) => (
            <tr key={person.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "12px" }}>
                <strong>{person.name}</strong>
              </td>
              <td style={{ padding: "12px" }}>{person.loginId}</td>
              <td style={{ padding: "12px" }}>{person.section}</td>
              <td style={{ padding: "12px" }}>{person.role}</td>
              <td style={{ padding: "12px" }}>{person.lastActivity}</td>
              <td style={{ padding: "12px" }}>{person.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

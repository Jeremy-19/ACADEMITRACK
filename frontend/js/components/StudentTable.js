export function StudentTable(students) {
    let rows = students.map(s => `
    <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.grade}</td>
        <td>${s.attendance}</td>
        <td>
        <button data-id="${s.id}" class="edit-btn">✏️ Edit</button>
        <button data-id="${s.id}" class="delete-btn">🗑️ Delete</button>
      </td>
    </tr>
  `).join("");

    return `
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, sans-serif;
      }

      thead {
        background-color: #f2f2f2;
      }

      th, td {
        padding: 8px;
        text-align: left;
        border: 1px solid #ddd;
      }

      tr:hover {
        background-color: #f9f9f9;
      }

      .edit-btn,.delete-btn {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1rem;
      }
    </style>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Grade</th>
          <th>Attendance</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}

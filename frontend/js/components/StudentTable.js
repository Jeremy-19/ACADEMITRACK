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
        <table border="1" cellpadding="8" cellspacing="0">
            <thead>
                <tr>
                    <th>ID</th><th>Name</th><th>Grade</th><th>Attendance</th><th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

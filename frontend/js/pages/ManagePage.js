import { StudentTable } from "../components/StudentTable.js";
import { StudentForm } from "../components/StudentForm.js";

export function ManagePage() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <h1>👩‍🎓 Manage Students</h1>
        <div style="margin-bottom: 20px;">
            <h2>Add New Student</h2>
            <div id="student-form"></div>
        </div>

        <div>
            <h2>Student List</h2>
            <div id="student-table"></div>
        </div>
    `;

    // Example data (replace with API later)
    const students = [
        { id: 1, name: "Alice", grade: 95, attendance: "98%" },
        { id: 2, name: "Bob", grade: 88, attendance: "92%" },
        { id: 3, name: "Charlie", grade: 76, attendance: "85%" }
    ];

    // Render components
    document.getElementById("student-form").innerHTML = StudentForm();
    document.getElementById("student-table").innerHTML = StudentTable(students);
}

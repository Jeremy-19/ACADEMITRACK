import { StudentTable } from "../components/StudentTable.js";
import { StudentForm } from "../components/StudentForm.js";
import { SearchBar } from "../components/SearchBar.js";

export function ManagePage() {
    const app = document.getElementById("app");

    // Example data (replace with API later)
    const students = [
        { id: 1, name: "Alice", grade: 95, attendance: "98%" },
        { id: 2, name: "Bob", grade: 88, attendance: "92%" },
        { id: 3, name: "Charlie", grade: 76, attendance: "85%" }
    ];
    app.innerHTML = `
        <div class="title-wrapper">
            <h2>👩‍🎓 Manage Students</h2>
            <hr></hr>

        <div class="charts-wrapper">
            <!-- Search -->
            <div>
                <h2>🔍 Search Student</h2>
                ${SearchBar()}
            </div>
            <!-- Add -->
            <div>
                <h2>➕ Add New Student</h2>
                ${StudentForm()}
            </div>
        </div>





            <!-- List -->
            <div>
            <h2>📋 Student List</h2>
            ${StudentTable(students)}
            <div id="student-table"></div>
            </div>
            </div>
    `;
}

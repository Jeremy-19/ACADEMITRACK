import { StudentTable } from "../components/StudentTable.js";
import { getStudents } from "../api/student.js";  // 👈 Import your API function

export async function ManagePage() {
    const app = document.getElementById("app");

    // Fetch students from backend
    const students = await getStudents();

    app.innerHTML = `
        <div class="title-wrapper">
            <h2>📋 Student List</h2>
            <hr>
            ${StudentTable(students)}
            <div id="student-table"></div>
        </div>
    `;
}

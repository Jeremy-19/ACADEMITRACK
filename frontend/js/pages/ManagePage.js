// frontend/js/pages/ManagePage.js
import { getStudents } from "../api/student.js";
import { StudentTable } from "../components/StudentTable.js";

export function ManagePage() {
    const container = document.createElement("section");
    container.style.padding = "2rem";
    container.innerHTML = `
    <h1>Manage Students</h1>
    <p>Loading student list...</p>
    <div id="student-list"></div>
  `;

    // ✅ Only run this when ManagePage is actually displayed
    getStudents()
        .then(students => {
            const list = document.getElementById("student-list");
            if (!students || students.length === 0) {
                list.innerHTML = `<p>No students found.</p>`;
                return;
            }
            list.innerHTML = `
        <ul>
          ${students.map(s => `<li>${s.Name} — ${s.ClassGrade}</li>`).join("")}
        </ul>
      `;
        })
        .catch(err => {
            console.error("Error fetching students:", err);
            document.getElementById("student-list").innerHTML = `<p style="color:red;">Error loading students</p>`;
        });

    return container.outerHTML;
}

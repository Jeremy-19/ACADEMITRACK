export function StudentForm() {
    return `
        <form id="add-student-form">
            <label>Name: <input type="text" id="studentName" required></label><br>
            <label>Grade: <input type="number" id="studentGrade" min="0" max="100" required></label><br>
            <label>Attendance: <input type="text" id="studentAttendance" placeholder="95%" required></label><br>
            <button type="submit">Add Student</button>
        </form>
    `;
}

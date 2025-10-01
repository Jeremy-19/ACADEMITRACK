const API_URL = "http://localhost/student-performance-dashboard/backend/index.php";

export async function getStudents() {
    const response = await fetch(`${API_URL}?action=read`);
    return response.json();
}

export async function addStudent(student) {
    const response = await fetch(`${API_URL}?action=create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    });
    return response.json();
}

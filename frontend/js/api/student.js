export async function getStudents() {
    try {
        const res = await fetch("http://localhost:8000/routes/manage.php", {
            method: "GET"
        });

        if (!res.ok) {
            throw new Error("Failed to fetch students");
        }

        const data = await res.json();

        // ✅ Normalize backend fields → frontend format
        return data.map(s => ({
            id: s.StudentID,
            name: s.Name,
            grade: s.ClassGrade,
            attendance: s.Attendance
        }));
    } catch (err) {
        console.error("Error fetching students:", err);
        return [];
    }
}

// export async function addStudent(student) {
//     const res = await fetch("routes/manage.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(student)
//     });
//     return res.json();
// }

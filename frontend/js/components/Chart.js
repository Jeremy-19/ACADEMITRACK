// DashboardPage.js
let gradeChart;
let attendanceChart;

export function renderGradeChart(studentGrades) {
    const gradeCtx = document.getElementById("gradeChart").getContext("2d");

    if (gradeChart) {
        gradeChart.destroy(); // remove old chart
    }

    gradeChart = new Chart(gradeCtx, {
        type: "bar",
        data: {
            labels: studentGrades.map(s => s.name),
            datasets: [{
                label: "Grades",
                data: studentGrades.map(s => s.grade),
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, max: 100 }
            }
        }
    });

    const attendanceCtx = document.getElementById("attendanceChart").getContext("2d");
    if (attendanceChart) {
        attendanceChart.destroy(); // remove old chart
    }
    attendanceChart = new Chart(attendanceCtx, {
        type: "bar",
        data: {
            labels: studentGrades.map(s => s.name),
            datasets: [{
                label: "Grades",
                data: studentGrades.map(s => s.grade),
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, max: 100 }
            }
        }
    });
}

// Optional: force redraw on window resize
window.addEventListener("resize", () => {
    if (gradeChart) gradeChart.resize();
    if (attendanceChart) attendanceChart.resize();
});

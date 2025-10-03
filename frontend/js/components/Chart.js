// DashboardPage.js
let gradeChart;
let attendanceChart;

export function renderGradeChart(chartGrades) {
    if (!chartGrades || chartGrades.length === 0) {
        console.warn("No chart data available");
        return;
    }

    const labels = chartGrades.map(s => s.Name || s.name); // handle PHP naming (uppercase keys)
    const grades = chartGrades.map(s => s.grade);

    // ---- Grade Chart ----
    const gradeCtx = document.getElementById("gradeChart").getContext("2d");

    if (gradeChart) {
        gradeChart.destroy(); // remove old chart
    }

    gradeChart = new Chart(gradeCtx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Average Grade",
                data: grades,
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

    // ---- Attendance Chart (example using same labels) ----
    const attendanceCtx = document.getElementById("attendanceChart").getContext("2d");
    if (attendanceChart) {
        attendanceChart.destroy();
    }

    attendanceChart = new Chart(attendanceCtx, {
        type: "line", // different style for variety
        data: {
            labels: labels,
            datasets: [{
                label: "Grades (line version)",
                data: grades,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 2,
                fill: true,
                tension: 0.3
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

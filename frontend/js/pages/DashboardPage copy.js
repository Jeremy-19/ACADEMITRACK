// frontend/js/pages/DashboardPage.js
import { StatsCard } from "../components/StatsCard.js";
import { renderGradeChart } from "../components/Chart.js";

export function DashboardPage() {
    const app = document.getElementById("app");

    // Example data (replace with API call later)
    const currentTime = "12:00";
    const totalStudents = 120;
    const averageGrade = 88.5;
    const attendanceRate = "95%";
    const topPerformer = "Alice";

    // Dummy grades for the chart
    const dummyGrades = [
        { name: "Alice", grade: 95 },
        { name: "Bob", grade: 88 },
        { name: "Charlie", grade: 76 },
        { name: "Diana", grade: 92 }
    ];

    // <div style="display: flex; flex-wrap: wrap;">
    // Render initial HTML including canvas
    app.innerHTML = `
        
        <div class="title-wrapper">
            <h2>🖥️ Student Performance Dashboard</h2>
            <hr></hr>
        </div>
        
        <div class="stats-container">
        ${StatsCard("Time", currentTime)}
        ${StatsCard("Total Students", totalStudents)}
        ${StatsCard("Average Grade", averageGrade)}
        ${StatsCard("Attendance Rate", attendanceRate)}
        ${StatsCard("Top Performer", topPerformer)}
        </div>
        
        <div class="title-wrapper">
            <h2>📊 Visual Aid</h2>
            <hr></hr>
        </div>

        <div class="charts-wrapper">
            <div class="chart-container" style="flex: 1;">
                <canvas id="gradeChart" style="height: 400px; width: 100%;"></canvas>
            </div>
            <div class="chart-container" style="flex: 1;">
                <canvas id="attendanceChart" style="height: 400px; width: 100%;"></canvas>
            </div>
        </div>
    `;

    // Now the canvas exists, render the chart
    renderGradeChart(dummyGrades);
}

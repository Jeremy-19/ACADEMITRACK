import { StatsCard } from "../components/StatsCard.js";
import { renderGradeChart } from "../components/Chart.js";

export async function DashboardPage() {
    const app = document.getElementById("app");

    // Fetch data from your PHP API
    let data;
    try {
        const res = await fetch('../backend/routes/dashboard.php'); // adjust path if needed
        data = await res.json();
    } catch (err) {
        console.error("Error fetching dashboard page data:", err);
        app.innerHTML = "<p>Error loading dashboard page data.</p>";
        return;
    }

    console.log(data); // optional: check API response

    // Render dashboard HTML
    app.innerHTML = `
        <div class="title-wrapper">
            <h2>🖥️ Student Performance Dashboard</h2>
            <hr />
        </div>

        <div class="stats-container" style="display:flex; gap:15px; flex-wrap:wrap;">
            ${StatsCard("Time", new Date().toLocaleTimeString(), "time-card")}
            ${StatsCard("Total Students", data.totalStudents)}
            ${StatsCard("Average Grade", data.averageGrade)}
            ${StatsCard("Attendance Rate", data.attendanceRate)}
            ${StatsCard("Top Performer", data.topPerformer)}
        </div>

        <div class="title-wrapper">
            <h2>📊 Visual Aid</h2>
            <hr />
        </div>

        <div class="charts-wrapper" style="display:flex; gap:20px; flex-wrap:wrap;">
            <div class="chart-container" style="flex:1; min-width:300px;">
                <canvas id="gradeChart" style="height:400px; width:100%;"></canvas>
            </div>
            <div class="chart-container" style="flex:1; min-width:300px;">
                <canvas id="attendanceChart" style="height:400px; width:100%;"></canvas>
            </div>
        </div>
    `;

    // Update the Time card every second
    setInterval(() => {
        const timeElem = document.querySelector("#time-card p");
        if (timeElem) {
            timeElem.textContent = new Date().toLocaleTimeString();
        }
    }, 1000);

    // Render grade chart using API data
    if (data.chartGrades) {
        renderGradeChart(data.chartGrades);
    }
}

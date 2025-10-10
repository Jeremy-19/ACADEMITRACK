// frontend/js/pages/ManagePage.js

export async function ManagePage() {
  const container = document.createElement("section");
  container.innerHTML = `
    <div class="title-wrapper">
        <h2>🏫 Manage Students</h2>
        <hr />
        <div id="student-list"></div>
    </div>
  `;

  const list = container.querySelector("#student-list");

  // Fetch data from your PHP API
  try {
    const res = await fetch('../backend/routes/manage.php');
    const data = await res.json(); // ✅ must await this too
    console.log(data);


    if (!Array.isArray(data) || data.length === 0) {
      list.innerHTML = `<p>No students found.</p>`;
      return container;
    }

    // Create a table
    const table = document.createElement("table");
    table.border = "1";
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.marginTop = "1rem";

    // Create table header
    const headers = Object.keys(data[0]); // automatically use keys from JSON
    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        ${headers.map(h => `<th style="padding:8px; background:#f0f0f0;">${h}</th>`).join("")}
      </tr>
    `;
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement("tbody");
    data.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = headers.map(h => `<td style="padding:8px;">${row[h]}</td>`).join("");
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    list.innerHTML = ""; // clear loading message
    list.appendChild(table);

  } catch (err) {
    console.error("Error fetching manage page data:", err);
    list.innerHTML = `<p style="color:red;">Error loading student data.</p>`;
  }

  return container;
}

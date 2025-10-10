/*
    Title: App.JS
    Description: This page serves as the entry point for the program. 
*/


// frontend/js/main.js
// frontend/js/app.js
import { Navbar } from "./components/Navbar.js";
import { Footer } from "./components/Footer.js";
import { DashboardPage } from "./pages/DashboardPage.js";
import { ManagePage } from "./pages/ManagePage.js";

// ✅ Render navbar and footer ONCE
document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();

// ✅ Router function
function router() {
    const app = document.getElementById("app");
    const page = window.location.hash.replace("#", "") || "dashboard";

    switch (page) {
        case "dashboard":
            app.innerHTML = DashboardPage();
            break;

        case "manage":
            (async () => {
                const app = document.getElementById('app');
                app.innerHTML = '<p>Loading student list...</p>'; // show loading message

                const page = await ManagePage(); // wait for data + section
                app.innerHTML = '';               // clear the loading message
                app.appendChild(page);            // show final table
            })();
            break;

        default:
            app.innerHTML = `<h2 style="padding:2rem;">404 - Page Not Found</h2>`;
            break;
    }

    updateActiveLink();
}

// ✅ Update active navbar link
function updateActiveLink() {
    const page = window.location.hash.replace("#", "") || "dashboard";
    document.querySelectorAll("nav a").forEach(link => {
        const isActive = link.getAttribute("href") === `#${page}`;
        link.style.fontWeight = isActive ? "bold" : "normal";
        link.style.borderBottom = isActive ? "2px solid black" : "none";
    });
}

// ✅ Run router when hash changes or page loads
window.addEventListener("hashchange", router);
window.addEventListener("hashchange", () => {
    console.log("🔁 Hash changed to:", window.location.hash);
});
window.addEventListener("DOMContentLoaded", router);

/*
    Title: App.JS
    Description: This page serves as the entry point for the program. 
*/


// Import components & pages
import { Navbar } from "./components/Navbar.js";
import { DashboardPage } from "./pages/DashboardPage.js";
import { ManagePage } from "./pages/ManagePage.js";
import { Footer } from "./components/Footer.js";

// Simple router
function router() {
    const app = document.getElementById("app");
    const page = window.location.hash.replace("#", "") || "dashboard";

    // Render Navbar
    document.getElementById("navbar").innerHTML = Navbar();

    // Render page based on hash
    if (page === "dashboard") {
        DashboardPage();
    } else if (page === "manage") {
        ManagePage();
    } else {
        app.innerHTML = `<h2>404 - Page Not Found</h2>`;
    }

    // Render Footer
    document.getElementById("footer").innerHTML = Footer();
}

// Listen for navigation changes
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);

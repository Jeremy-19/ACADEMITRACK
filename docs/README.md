# 🎓 Student Performance Dashboard

A mini full-stack project to demonstrate **PHP REST API** and **JavaScript reusable components**.  


This dashboard allows adding students, tracking their scores, and visualizing performance with charts and stats.  


Key features include:

✅ Add, update, and manage student data

✅ View performance trends and statistics

✅ Responsive design for desktop and mobile

✅ REST API backend (PHP) with a reusable JavaScript frontend


## 📂 Project Structure
```bash
student-performance-dashboard/
│── backend/                       # PHP REST API
│   ├── index.php                   # API entry point (routes requests)
│   ├── config/
│   │   └── Database.php            # DB connection
│   ├── models/
│   │   └── Student.php             # DB queries
│   ├── controllers/
│   │   └── StudentController.php   # Handles API requests
│   ├── routes/
│   │   └── api.php                 # Maps endpoints -> controller methods
│   └── responses/                  # Helpers for JSON output
│       └── Response.php
│
│── frontend/                       # Frontend app
│   ├── index.html                  # Entry page (loads JS app)
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── app.js                  # Main JS (bootstraps app)
│   │   ├── components/             # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── StudentForm.js
│   │   │   ├── StudentTable.js
│   │   │   └── StatsCard.js
│   │   ├── pages/                  # Page-level containers
│   │   │   ├── DashboardPage.js
│   │   │   └── ManagePage.js
│   │   └── services/               # API calls
│   │       └── studentService.js
│   └── assets/
│       └── img/
│
├── sql/
│   └── schema.sql
│
└── docs/
    └── README.md
```

📌 Tech Stack

Backend: PHP (REST API)

Frontend: Vanilla JavaScript, HTML, CSS

Database: MySQL / MariaDB


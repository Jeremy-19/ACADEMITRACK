<?php
// Safe API for Student Dashboard
header('Content-Type: application/json');
require_once '../config/database.php'; // Adjust path


// Development: show errors (set to 0 in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Create database connection
$database = new Database();
$pdo = $database->getConnection();

try {
    if (!isset($pdo)) {
        throw new Exception("Database connection not found.");
    }
    // 1. Total students
    $totalStudents = $pdo->query("SELECT COUNT(*) FROM Students")->fetchColumn() ?? 0;

    // 2. Average grade
    $averageGrade = $pdo->query("SELECT AVG(Grade) FROM Grades")->fetchColumn();
    $averageGrade = $averageGrade !== null ? round((float)$averageGrade, 2) : 0;

    // 3. Top performer
    $topPerformerStmt = $pdo->query("
        SELECT s.Name
        FROM Students s
        JOIN Grades g ON s.StudentID = g.StudentID
        GROUP BY s.StudentID, s.Name
        ORDER BY AVG(g.Grade) DESC
        LIMIT 1
    ");
    $topPerformer = $topPerformerStmt ? $topPerformerStmt->fetchColumn() : "N/A";

    // 4. Average attendance
    $attendance = $pdo->query("
        SELECT AVG(CAST(REPLACE(Attendance,'%','') AS DECIMAL(5,2))) FROM Students
    ")->fetchColumn();
    $attendanceRate = $attendance !== null ? round((float)$attendance, 2) . "%" : "N/A";

    // 5. Chart grades
    $stmt = $pdo->query("
        SELECT s.Name, AVG(g.Grade) AS grade
        FROM Students s
        JOIN Grades g ON s.StudentID = g.StudentID
        GROUP BY s.StudentID, s.Name
    ");
    $chartGrades = $stmt ? $stmt->fetchAll(PDO::FETCH_ASSOC) : [];

    // Output JSON
    echo json_encode([
        "totalStudents" => (int)$totalStudents,
        "averageGrade" => $averageGrade,
        "attendanceRate" => $attendanceRate,
        "topPerformer" => $topPerformer,
        "chartGrades" => $chartGrades
    ]);

} catch (Exception $e) {
    // Always return JSON on error
    echo json_encode([
        "error" => $e->getMessage()
    ]);
    exit;
}
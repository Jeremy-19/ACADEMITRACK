<?php
// Allow CORS
header("Access-Control-Allow-Origin: *"); // Or restrict to http://localhost
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

require_once __DIR__ . '/../config/database.php';

$database = new Database();
$pdo = $database->getConnection();

try {
    if (!$pdo) {
        throw new Exception("Database connection failed.");
    }

    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case 'GET': // 📖 Read all students
            $stmt = $pdo->query("SELECT * FROM Students");
            $students = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($students);
            break;

        case 'POST': // ➕ Create student
            $data = json_decode(file_get_contents("php://input"), true);

            if (!isset($data['Name']) || !isset($data['ClassGrade']) || !isset($data['Attendance'])) {
                throw new Exception("Invalid input data");
            }

            $stmt = $pdo->prepare("INSERT INTO Students (Name, ClassGrade, Attendance) VALUES (?, ?, ?)");
            $stmt->execute([
                $data['Name'],
                $data['ClassGrade'],
                $data['Attendance']
            ]);

            echo json_encode([
                "message" => "Student created",
                "StudentID" => $pdo->lastInsertId()
            ]);
            break;

        case 'PUT': // ✏️ Update student
            $data = json_decode(file_get_contents("php://input"), true);

            if (!isset($data['StudentID'])) {
                throw new Exception("StudentID required");
            }

            $stmt = $pdo->prepare("UPDATE Students SET Name=?, ClassGrade=?, Attendance=? WHERE StudentID=?");
            $stmt->execute([
                $data['Name'],
                $data['ClassGrade'],
                $data['Attendance'],
                $data['StudentID']
            ]);

            echo json_encode(["message" => "Student updated"]);
            break;

        case 'DELETE': // ❌ Delete student
            $data = json_decode(file_get_contents("php://input"), true);

            if (!isset($data['StudentID'])) {
                throw new Exception("StudentID required");
            }

            $stmt = $pdo->prepare("DELETE FROM Students WHERE StudentID=?");
            $stmt->execute([$data['StudentID']]);

            echo json_encode(["message" => "Student deleted"]);
            break;

        default:
            http_response_code(405);
            echo json_encode(["error" => "Method not allowed"]);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
    exit;
}

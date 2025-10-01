<?php
require_once "config/Database.php";

$database = new Database();
$conn = $database->getConnection();

if ($conn) {
    echo "✅ Database connection successful!";
} else {
    echo "❌ Failed to connect to the database.";
}
?>
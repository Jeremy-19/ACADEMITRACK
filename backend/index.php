<?php
// index.php - API entry point

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Include config and routes
require_once __DIR__ . '/config/Database.php';
require_once __DIR__ . '/routes/api.php';

// Get the request URI and method
$requestUri = $_SERVER['REQUEST_URI'];
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Route the request
$response = routeRequest($requestUri, $requestMethod);

// Send JSON response
http_response_code($response['status']);
echo json_encode($response['body']);

?>


<?php
class Database {
    private $host = "localhost";
    private $db_name = "student_dashboard"; // your DB name
    private $username = "root";             // default in XAMPP
    private $password = "";                 // default in XAMPP (empty)
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->exec("set names utf8");
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
?>
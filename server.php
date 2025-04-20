<?php
// Database connection configuration
$server = "localhost";
$username = "root"; // Default XAMPP username
$password = ""; // Default XAMPP password (empty)
$database = "user_db";

// Create connection
$conn = new mysqli($server, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to sanitize user inputs
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Enable CORS for development (you may want to restrict this in production)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// If preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Generate a secure random OTP
function generateOTP($length = 6) {
    $otp = "";
    for ($i = 0; $i < $length; $i++) {
        $otp .= mt_rand(0, 9);
    }
    return $otp;
}

// Store OTP in database
function storeOTP($email, $otp, $conn) {
    // Delete any existing OTPs for this email
    $stmt = $conn->prepare("DELETE FROM password_reset WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->close();
    
    // Store new OTP with expiry time (30 minutes from now)
    $expiry = date('Y-m-d H:i:s', strtotime('+30 minutes'));
    $stmt = $conn->prepare("INSERT INTO password_reset (email, otp, expiry) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $email, $otp, $expiry);
    $result = $stmt->execute();
    $stmt->close();
    
    return $result;
}

// Check if email exists in the database
function emailExists($email, $conn) {
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $exists = $result->num_rows > 0;
    $stmt->close();
    
    return $exists;
}

// Validate OTP
function validateOTP($email, $otp, $conn) {
    $stmt = $conn->prepare("SELECT * FROM password_reset WHERE email = ? AND otp = ? AND expiry > NOW()");
    $stmt->bind_param("ss", $email, $otp);
    $stmt->execute();
    $result = $stmt->get_result();
    $valid = $result->num_rows > 0;
    $stmt->close();
    
    return $valid;
}
?> 

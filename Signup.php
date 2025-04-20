<?php
// Include database connection
require_once 'server.php';

// Process only POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = sanitizeInput($_POST['name']);
    $email = sanitizeInput($_POST['email']);
    $phone = sanitizeInput($_POST['phone']);
    $password = $_POST['password']; // Will be hashed, don't sanitize

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            "success" => false,
            "message" => "Invalid email format"
        ]);
        exit();
    }

    // Check if email already exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        echo json_encode([
            "success" => false,
            "message" => "Email already exists. Please use a different email."
        ]);
        exit();
    }
    $stmt->close();

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert user data into database
    $stmt = $conn->prepare("INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $phone, $hashed_password);
    
    if ($stmt->execute()) {
        echo json_encode([
            "success" => true,
            "message" => "User registered successfully"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Error: " . $stmt->error
        ]);
    }
    
    $stmt->close();
} else {
    // Handle non-POST requests
    echo json_encode([
        "success" => false,
        "message" => "Invalid request method"
    ]);
}

$conn->close();
?> 


<?php
// Include database connection
require_once 'server.php';

// Process only POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email = sanitizeInput($_POST['email']);
    $password = $_POST['password']; // Will be verified against hash, don't sanitize

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            "success" => false,
            "message" => "Invalid email format"
        ]);
        exit();
    }

    // Check if user exists and verify password
    $stmt = $conn->prepare("SELECT id, name, email, phone, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        
        // Verify password
        if (password_verify($password, $user['password'])) {
            // Remove password from user data before sending to client
            unset($user['password']);
            
            echo json_encode([
                "success" => true,
                "message" => "Login successful",
                "user" => $user
            ]);
        } else {
            echo json_encode([
                "success" => false,
                "message" => "Invalid email or password"
            ]);
        }
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Invalid email or password"
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



<?php
// Include database connection
require_once 'server.php';

// Process only POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $action = isset($_POST['action']) ? $_POST['action'] : '';
    
    switch ($action) {
        case 'sendOTP':
            sendOTP();
            break;
        case 'verifyOTP':
            verifyOTP();
            break;
        case 'resetPassword':
            resetPassword();
            break;
        default:
            echo json_encode([
                "success" => false,
                "message" => "Invalid action specified"
            ]);
    }
} else {
    // Handle non-POST requests
    echo json_encode([
        "success" => false,
        "message" => "Invalid request method"
    ]);
}

function sendOTP() {
    global $conn;
    
    $email = sanitizeInput($_POST['email']);
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            "success" => false,
            "message" => "Invalid email format"
        ]);
        return;
    }
    
    // Check if email exists in users table
    if (!emailExists($email, $conn)) {
        echo json_encode([
            "success" => false,
            "message" => "Email not found. Please check your email address."
        ]);
        return;
    }
    
    // Generate and store OTP
    $otp = generateOTP();
    if (storeOTP($email, $otp, $conn)) {
        // In a real application, you would send the OTP via email
        // For demo purposes, we'll just return success
        // Note: In production, NEVER send the OTP back in the response
        echo json_encode([
            "success" => true,
            "message" => "OTP sent successfully",
            "debug_otp" => $otp // REMOVE THIS IN PRODUCTION
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Failed to generate OTP. Please try again."
        ]);
    }
}

function verifyOTP() {
    global $conn;
    
    $email = sanitizeInput($_POST['email']);
    $otp = sanitizeInput($_POST['otp']);
    
    // Validate OTP
    if (validateOTP($email, $otp, $conn)) {
        echo json_encode([
            "success" => true,
            "message" => "OTP verified successfully"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Invalid or expired verification code"
        ]);
    }
}

function resetPassword() {
    global $conn;
    
    $email = sanitizeInput($_POST['email']);
    $password = $_POST['password']; // Will be hashed, don't sanitize
    
    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    
    // Update user password
    $stmt = $conn->prepare("UPDATE users SET password = ? WHERE email = ?");
    $stmt->bind_param("ss", $hashed_password, $email);
    
    if ($stmt->execute()) {
        // Remove all OTPs for this email
        $deleteStmt = $conn->prepare("DELETE FROM password_reset WHERE email = ?");
        $deleteStmt->bind_param("s", $email);
        $deleteStmt->execute();
        $deleteStmt->close();
        
        echo json_encode([
            "success" => true,
            "message" => "Password reset successfully"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Failed to reset password: " . $stmt->error
        ]);
    }
    
    $stmt->close();
}

$conn->close();
?> 

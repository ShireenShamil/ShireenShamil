<?php

  $name = $_POST['name'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];
  $university = $_POST['university'];
  $course = $_POST['course'];
  $gender = $_POST['gender'];


  $conn = new mysqli('127.0.0.1', 'XAMPP', '', 'registration');

  
  if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
  } else {
    
    $stmt = $conn->prepare("INSERT INTO register (iD, name, email, mobile, university, course, gender) VALUES (?,?, ?, ?, ?, ?, ?)");
    
    
    if ($stmt === false) {
      die('Prepare failed: ' . htmlspecialchars($conn->error));
    }

    
    $stmt->bind_param("ssisss", $name, $email, $mobile, $university, $course, $gender);

    
    if ($stmt->execute()) {
      echo "Registration successful";
    } else {
      echo "Execution failed: " . htmlspecialchars($stmt->error);
    }

    $stmt->close();
    $conn->close();
  }
?>

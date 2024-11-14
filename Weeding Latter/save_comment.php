<?php
// save_comment.php
$name = $_POST['name'];
$presence = $_POST['presence'];
$comment = $_POST['comment'];

$conn = new mysqli("localhost", "username", "password", "wedding");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO comments (name, presence, comment) VALUES ('$name', '$presence', '$comment')";
$conn->query($sql);

$conn->close();
?>

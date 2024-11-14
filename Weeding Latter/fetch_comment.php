<?php
// fetch_comments.php
$conn = new mysqli("localhost", "username", "password", "wedding");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM comments ORDER BY created_at DESC";
$result = $conn->query($sql);

$comments = [];
while($row = $result->fetch_assoc()) {
    $comments[] = $row;
}

echo json_encode($comments);
$conn->close();
?>

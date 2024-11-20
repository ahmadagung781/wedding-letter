<?php
// save_comment.php
header('Content-Type: application/json');
$name = $_POST['name'];
$presence = $_POST['presence'];
$comment = $_POST['comment'];

$conn = new mysqli("localhost", "root", "", "wedding");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// $sql = "INSERT INTO comments (name, presence, comment) VALUES ('$name', '$presence', '$comment')";

// balik ke halaman index ketika sukses
// $sql = "INSERT INTO comments (name, presence, comment) VALUES ('$name', '$presence', '$comment')";
// if ($conn->query($sql) === TRUE) {
//     header("Location: index.html");
//     exit();
// }

// muncul notifikasi dan stay dihalaman, tidak reload page
// $sql = "INSERT INTO comments (name, presence, comment) VALUES ('$name', '$presence', '$comment')";
// if ($conn->query($sql) === TRUE) {
//     echo '<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>';
//     echo '<script>
//         Swal.fire({
//             title: "Success!",
//             text: "Your comment has been saved.",
//             icon: "success",
//             confirmButtonText: "OK"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 window.location.href = "index.html";
//             }
//         });
//     </script>';
// }

$sql = "INSERT INTO comments (name, presence, comment) VALUES ('$name', '$presence', '$comment')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => $conn->error]);
}
?>
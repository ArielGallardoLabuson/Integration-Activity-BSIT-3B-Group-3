<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $fullname = mysqli_real_escape_string($connection, $request->fullname);
    $email = mysqli_real_escape_string($connection, $request->email);
    $password = mysqli_real_escape_string($connection, md5($request->password));
     $sql = "INSERT INTO `user`( `fullname`, `email`, `password`) VALUES ('{$fullname}','{$email}','{$password}')";
    $query = mysqli_query($connection, $sql);
    if ($query) {
        $data = array('message' =>'successful');
        echo json_encode($data);
    } else {
        $data = array('message' =>'failed');
        echo json_encode($data);
    }
}
?>
<?php 
include 'database.php';
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $email = mysqli_real_escape_string($connection, $request->email);
    $password = mysqli_real_escape_string($connection, md5($request->password));

    $sql = "select * from user where email = '$email' and password = '$password'";
    $query = mysqli_query($connection, $sql);
    $result = mysqli_num_rows($query);
    if($result > 0) {
    $data = array('message' => "login success",'email' => $email);
    echo json_encode($data);
}
else{
    $data = array('message' => "login failed");
    echo json_encode($data);
}
}
?>
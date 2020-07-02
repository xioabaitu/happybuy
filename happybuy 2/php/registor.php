<?php
    include_once "./lianjie.php";
    $phone = $_REQUEST["phone"];
    $password = $_REQUEST["password"]; 
    $sql = "SELECT * FROM `user` WHERE phone = '$phone'";
    $r = mysqli_query($db,$sql);

    $num = mysqli_num_rows($r);
    if($num==1){
        echo '{"status":"error","msg":"该用户已经存在，请重新填写注册的昵称!!"}';
    }else{
        $sqq = "INSERT INTO user " .
          "(id,phone,password)" .
          "VALUES " .
          "(NULL,'$phone','$password')";     
        $retval = mysqli_query($db, $sqq);
        if (!$retval) {
          printf("Error: %s\n", mysqli_error($db));
          exit();
         }
        if (!$retval) {
          die('无法插入数据: ' . mysqli_error($conn));
        }
        echo '{"status":"success"}';
      }
?>
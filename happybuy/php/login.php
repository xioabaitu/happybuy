<?php
include_once "./lianjie.php";
$phone = $_REQUEST["phone"];
$password = $_REQUEST["password"];

$sql = "SELECT * FROM `user` WHERE phone = '$phone'";

$r = mysqli_query($db, $sql);

$num = mysqli_num_rows($r); /* 该方法得到的是记录的条数:$r["num_rows"]  */

if($num == 1){
  $data = mysqli_fetch_all($r,MYSQLI_ASSOC)[0];
  if($password  === $data["password"]){
    echo '{"status":"success","msg":"登录成功!"}';
  }else{
    echo '{"status":"error","msg":"密码不正确!"}';
  }
}else{
  echo '{"status":"error","msg":"该用户名不存在!"}';
}
?>
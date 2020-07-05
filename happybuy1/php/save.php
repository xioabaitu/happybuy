<?php
     include_once "./lianjie.php";
     $detailed = $_REQUEST["detailed"];
     $num = $_REQUEST["num"]; 
     $shopid = $_REQUEST["shopid"]; 
     $sql = "SELECT * FROM `buy` WHERE shopid = '$shopid'";
     $r = mysqli_query($db,$sql);
 
     $nu = mysqli_num_rows($r);
     if($nu==1){
         $num++;
     }else{
             $sqq = "INSERT INTO buy " .
             "(id,shoppe,num,shopid)" .
             "VALUES " .
             "(NULL,'$detailed','$num','$shopid')";     
         $retval = mysqli_query($db, $sqq);
         if (!$retval) {
           printf("错误: %s\n", mysqli_error($db));
           exit();       
          }
         if (!$retval) {
           die('无法插入数据: ' . mysqli_error($conn));
         }
         echo '{"status":"success"}';
       }
?>
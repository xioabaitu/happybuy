<?php
    include_once "./lianjie.php";
    $ad = $_REQUEST["ad"]; 
    $sql = "DELETE FROM `buy` WHERE shopid = '$ad'";
        $retval = mysqli_query($db, $sql);
        if (!$retval) {
          printf("Error: %s\n", mysqli_error($db));
          exit();
         }
        if (!$retval) {
          echo('无法插入数据: ' . mysqli_error($conn));
        }
?>
<?php
include_once "lianjie.php";
      $sql = "SELECT * FROM liebiao";
      $_result = mysqli_query($db,$sql);
      $res = mysqli_fetch_all($_result, MYSQLI_ASSOC);
          echo json_encode($res,true);
?>
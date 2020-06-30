<?php
    include_once "lianjie.php";
    // $sql = "SELECT * FROM data WHERE day = '$day",chinese ='$chine';
    // $sql = "SELECT * FROM date"
    $sql = "SELECT * FROM dates";
    $_result = mysqli_query($db,$sql);
    // $data = array("status"=>"","data"=>array("msg"=>""));
    $res = mysqli_fetch_all($_result, MYSQLI_ASSOC);
        echo json_encode($res,true);
    ?>
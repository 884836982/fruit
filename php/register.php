<?php
    header("Content-Type:text/html;charset=utf-8");
    //从前端拿来数据；
    $username = @$_POST["username"];
    $password = @$_POST["password"];
    if($username == "" || $password == ""){
        die("参数不全");
    }
    $conn = mysql_connect("localhost","root","123456");
    if(!$conn){
        die("数据库连接失败");
    }
    mysql_select_db("userlist",$conn);
    //判定是否存在相同的用户名；
    $result = mysql_query(
        "SELECT username FROM detaillist WHERE username='$username'"
    );
    $count =0;
    while($row = mysql_fetch_array($result)){
        $count++;
    }
    if($count != 0){
        die("用户名重名");
    }
    $password = md5($password);
    mysql_query('SET NAMES UTF8');
    mysql_query("INSERT INTO detaillist(password,username)VALUES('$password','$username')");
    if(mysql_error()){
        die("数据库错误".mysql_error());
    }
    die("注册成功");
   // echo "注册成功";
?>
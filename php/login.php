<?php
    header("Content-Type:text/html;charset=utf-8");
    //1.从前端获取数据
    $username=@$_GET["username"];
    $password=@$_GET["password"];
    //非空验证
    if($username =='' || $password == ""){
        die("参数不全");
    }
    //2.连接数据库
    $coon = mysql_connect("localhost","root","123456");
    if(!$coon){
        die("数据库连接失败");
    }
    //3.选中数据库
    mysql_select_db("userlist",$coon);
    //4.选中用户名相同的用户
    //解决数据库中文乱码问题
    mysql_query('SET NAMES UTF8');
    $result = mysql_query("SELECT username,password FROM detaillist WHERE username='$username'");
    //将选出的用户名转为数组
    $rows = mysql_fetch_array($result);
    if($rows == ''){
        die("该用户不存在，请先注册");
        return;
    }
    //5.密码加密
    $password = md5($password);
    while($row = $rows){
        if($row['password'] = $password){
            die("登录成功");
        }else{
            die("登录失败");
        }
    }
    die("账号或者密码不正确");
?>
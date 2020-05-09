<?php
$username = $_POST['username'];
$password = $_POST['password'];
$usercontrol ="B191210033@ogr.sakarya.edu.tr";
$passcontrol ="12345";

if($username and $password){
 
} else {
header("location:login.html");
}
if($usercontrol == $username and $passcontrol == $password){
    echo "Hoşgeldiniz ";
    echo $usercontrol;
    header("Refresh: 3; url=index.html");
}
else{ 

    echo "Kullanıcı Adı Ve Şifre Eşleşmiyor";
    header("Refresh: 3; url=login.html");
}
?>
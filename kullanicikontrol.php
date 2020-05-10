<?php

session_start();
ob_start();


if(($_POST["mail"]=="b191210033@sakarya.edu.tr") && ($_POST["password"]=="1234"))
{

$_SESSION["login"] = "true";
$_SESSION["mail"] = "b191210033@sakarya.edu.tr";
$_SESSION["password"] = "1234";

echo "Hosgeldiniz B191210033. Başarıyla giriş yaptınız. Hakkında sayfasına yonlendiriliyorsunuz. Lütfen bekleyin..";
												
header("Refresh:2; url=index.html");

}
elseif(($_POST["mail"]=="") && ($_POST["password"]==""))
{
    echo "Kullanici adi veya sifre bos birakilmamalidir";
    header("Refresh: 2; url=login.html");
}

else
{
	echo "Kullanici adi veya sifreniz yanlis.";
	header("Refresh: 2; url=login.html");
}


ob_end_flush();
?>
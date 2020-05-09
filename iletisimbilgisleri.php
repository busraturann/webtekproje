<!DOCTYPE html>
<html>
    <head>
        <title>Mesajınız Gönderildi!</title>
    </head>
    <body>
        <h2>Mesajınız gönderildi!</h2>
        Ad Soyad: <?php echo $_POST['adsoyad'];?><br/>
        Mail: <?php echo $_POST['mail'];?><br/>
        Konu: <?php echo $_POST['konu']; ?><br/>
        Mesaj: <?php echo $_POST['mesaj']; ?><br/>
    </body>
</html>
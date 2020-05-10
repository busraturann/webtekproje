var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function FormKontrol() {
  var ad = document.getElementById("ad").value;
  var soyad = document.getElementById("soyad").value;
  var mail = document.getElementById("mail").value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(mail) == false || mail == "") {
    alert("Lütfen geçerli bir e-posta adresi giriniz.");
}
    else if(mesaj=="")
    {
        alert("Lütfen mesajınızı giriniz.");
    }
    else if(ad=="")
    {
        alert("Lütfen adınızı giriniz.");
    }       
    else if(soyad=="")
    {
        alert("Lütfen soyadınızı giriniz.");
    }

    else
    {
        document.writeln("Teşekkürler! Mesajınız alınmıştır."+ "<br>" + mail+"<br>"+ad+" "+soyad);
    }
  }
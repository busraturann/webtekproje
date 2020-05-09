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

function iletisimKontrol() {
    var adsoyad = document.forms["iletisim"]["adsoyad"].value;
    var mail = document.forms["iletisim"]["mail"].value;

      if (ad == "") {
        alert("Ad boş bırakılamaz.");
        return false;
      }
      if (soyad == "") {
        alert("Soyad boş bırakılamaz.");
        return false;
      }
      if (mail == "") {
        alert("Mail boş bırakılamaz.");
        return false;
	  }
  }


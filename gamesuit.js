var lagi = true;
while (lagi) {
  var c = Math.random();
  var h = "";
  var g = "gajah";
  var s = "semut";
  var o = "orang";
  var win = "Horee, KAMU MENANG!";
  var lose = "Kasihan, KAMU KALAH!";
  var p = prompt("Silahkan ketik: gajah/semut/orang");
  if (c < 0.34) {
    c = g;
  } else if (c > 0.34 && c < 0.67) {
    c = s;
  } else if (c > 0.67) {
    c = o;
  }

  if (p == c) {
    h = "SERI!";
  } else if (p == g) {
    if (c == o) {
      h = win;
    } else {
      h = lose;
    }
  } else if (p == s) {
    if (c == g) {
      h = win;
    } else {
      h = lose;
    }
  } else if (p == o) {
    if (c == s) {
      h = win;
    } else {
      h = lose;
    }
  } else {
    alert('Salah input, silahkan ketik salah satu di antara 3 pilihan:\ngajah\nsemut\norang')
  }

  alert("Kamu memilih " + p + "\nComputer memilih " + c + "\nHasilnya : " + h);
  lagi = confirm("Ingin bermain lagi?");
}
alert("Terima kasih sudah bermain!");

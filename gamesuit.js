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
  if (p) {
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
      h = c == o ? win : lose;
    } else if (p == s) {
      h = c == g ? win : lose;
    } else if (p == o) {
      h = c == s ? win : lose;
    } else {
      alert("Salah input, silahkan ketik salah satu di antara 3 pilihan:\n- gajah\n- semut\n- orang");
    }

    alert("Kamu memilih " + p.toUpperCase() + "\nComputer memilih " + c.toUpperCase() + "\n\nHasilnya : " + h);
    lagi = confirm("Ingin bermain lagi?");
  } else {
    alert("Silahkan bermain dulu, bentar aja kok!");
  }
}
alert("Terima kasih sudah bermain!");

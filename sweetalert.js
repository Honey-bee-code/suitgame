var c = Math.random();
var h = "";
var g = "gajah";
var s = "semut";
var o = "orang";

if (c < 0.34) {
  c = g;
} else if (c > 0.34 && c < 0.67) {
  c = s;
} else if (c > 0.67) {
  c = o;
}

Swal.mixin({
  input: "text",
  confirmButtonText: "Next &rarr;",
  showCancelButton: true,
})
  .queue([
    {
      type: "question",
      title: "Silahkan Input !",
      html: "Kamu bisa memilih inputan : <br>- semut  - gajah  - orang",
    },
  ])
  .then((result) => {
    if (result.value == g) {
      if (c == g) {
        Swal.fire({
          type: "info",
          title: "Kita SERI/IMBANG!",
          html: "Kamu memilih: <pre><code><b>" + result.value + "</b></code></pre><br>Saya (com) memilih: <pre><code><b>" + c.toUpperCase() + "</b></code></pre>",
          confirmButtonText: "Game Over",
        });
      } else if (c == o) {
        Swal.fire({
          type: "success",
          title: "Kamu MENANG!",
          html: "Kamu memilih: <pre><code><b>" + result.value + "</b></code></pre><br>Saya (com) memilih: <pre><code><b>" + c.toUpperCase() + "</b></code></pre>",
          confirmButtonText: "Game Over",
        });
      } else if (c == s) {
        Swal.fire({
          type: "error",
          title: "Kamu KALAH!",
          html: "Kamu memilih: <pre><code><b>" + result.value + "</b></code></pre><br>Saya (com) memilih: <pre><code><b>" + c.toUpperCase() + "</b></code></pre>",
          confirmButtonText: "Game Over",
        });
      }
    } else if (result.value == s) {
      if (c == s) {
        Swal.fire({
          type: "info",
          title: "Kita SERI/IMBANG!",
          html: "Kamu memilih: <pre><code><b>" + result.value + "</b></code></pre><br>Saya (com) memilih: <pre><code><b>" + c.toUpperCase() + "</b></code></pre>",
          confirmButtonText: "Game Over",
        });
      } else if (c == g) {
        Swal.fire({
          type: "success",
          title: "Kamu MENANG!",
          html: "Kamu memilih: <pre><code><b>" + result.value + "</b></code></pre><br>Saya (com) memilih: <pre><code><b>" + c.toUpperCase() + "</b></code></pre>",
          confirmButtonText: "Game Over",
        });
      } else if (c == o) {
        Swal.fire({
          type: "error",
          title: "Kamu KALAH!",
          html: "Kamu memilih: <pre><code><b>" + result.value + "</b></code></pre><br>Saya (com) memilih: <pre><code><b>" + c.toUpperCase() + "</b></code></pre>",
          confirmButtonText: "Game Over",
        });
      }
    } else if (result.value == o) {
      if (c == o) {
        Swal.fire({
          type: "info",
          title: "Kita SEIMBANG!",
          html: "Kamu memilih: <pre><code><b>" + result.value + "</b></code></pre><br>Saya (com) memilih: <pre><code><b>" + c.toUpperCase() + "</b></code></pre>",
          confirmButtonText: "Game Over",
        });
      } else if (c == s) {
        Swal.fire({
          type: "success",
          title: "Kamu MENANG!",
          html: "Kamu memilih: <pre><code><b>" + result.value + "</b></code></pre><br>Saya (com) memilih: <pre><code><b>" + c.toUpperCase() + "</b></code></pre>",
          confirmButtonText: "Game Over",
        });
      } else if (c == g) {
        Swal.fire({
          type: "error",
          title: "Kamu KALAH!",
          html: "Kamu memilih: <pre><code><b>" + result.value + "</b></code></pre><br>Saya (com) memilih: <pre><code><b>" + c.toUpperCase() + "</b></code></pre>",
          confirmButtonText: "Game Over",
        });
      }
    } else {
      Swal.fire({
        type: "warning",
        title: "Oooops..!",
        html: "Kamu memasukkan inputan yang salah.",
        confirmButtonText: "Terima Kasih",
      });
    }
  });

//   Swal.fire({
//     title: "All done!",
//     html: "Your answers: <pre><code>" + JSON.stringify(result.value) + "</code></pre>",
//     confirmButtonText: "Lovely!",
//   });

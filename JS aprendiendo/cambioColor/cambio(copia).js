let titulo = document.getElementById('title');

function cambioRandom() {
 var color = "#";
 var caracteres = "0123456789abcdef";
  for (i = 0; i < 6; i++) {
    var posicion = Math.floor(Math.random() * 16);
    console.log("color: " + color + " posicion: " + posicion + " → carácter: " + caracteres[posicion]);
      color = color + caracteres[posicion] ;
  }
  document.documentElement.style.setProperty("--random-color", color);
  document.body.style.color = "white";
  console.log(color);
}

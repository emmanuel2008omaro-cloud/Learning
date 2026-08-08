function cambioColor() {
  var color = '#';
  var letras = '0123456789abcdef';
  for (i = 0; i < 6; i++){
   var posicion= Math.floor(Math.random() * 16);
    color = color + letras[posicion];
  }
  document.body.style.backgroundColor = color;

   
  var rojo = parseInt(color.slice(1, 3), 16);
  var verde = parseInt(color.slice(3, 5), 16);
  var azul = parseInt(color.slice(5, 7), 16);

  var rojoInt = 255 - rojo;
  var verdeInt = 255 - verde;
  var azulInt = 255 - azul;

  var colorTexto = "#" +
    rojoInt.toString(16).padStart(2, "0") +
    verdeInt.toString(16).padStart(2, "0") +
    azulInt.toString(16).padStart(2, "0");

  document.body.style.color = colorTexto;
}
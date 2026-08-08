let pantalla = document.querySelector('#pantalla');
let botones = document.querySelectorAll('#botones button');

let numero1 = "";
let operadorGuardado = "";

botones.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var valor = btn.value;
    var esOperador = valor === "+" || valor === "-" || valor === "*" || valor === "/";

    if (esOperador) {
      numero1 = pantalla.value;
      operadorGuardado = valor;
      pantalla.value = "";

    } else {
      pantalla.value = pantalla.value + valor;
    }
  });
});

function calcular() {
  var n1 = Number(numero1);
  var n2 = Number(pantalla.value);
  var resultado = 0;

  if (operadorGuardado === "+") resultado = n1 + pantalla.value;
  if (operadorGuardado === "-") resultado = n1 - pantalla.value;
  if (operadorGuardado === "*") resultado = n1 * pantalla.value;
  if (operadorGuardado === "/") resultado = numero1 / pantalla.value;

  document.getElementById("pantalla").value = resultado;
  if (valor === "=") {
  calcular();
  }
  
}
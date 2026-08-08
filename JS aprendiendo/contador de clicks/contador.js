var numero = document.getElementById('numero');
var sumar = document.getElementById('sumar');
var restar = document.getElementById('restar');
var multiplicar = document.getElementById('multiplicar');
var puntuacion = document.getElementById('puntuacion');
var sumarCinco = document.getElementById('sumarCinco'); 

var contador = 0;

function verificarHitoDe100() {
  let esHito = false;

  
  if (contador < 100) {
    if (contador === 10 || contador === 25 || contador === 50) {
      esHito = true;
    }
  } 
  
  else {
    if (contador % 100 === 0) {
      esHito = true;
    }
  }

  
  if (esHito) {
    puntuacion.textContent = `¡Llegaste a ${contador}!`;
    puntuacion.classList.remove("animar"); 
    void puntuacion.offsetWidth; 
    puntuacion.classList.add("animar");
  }

  
  if (contador >= 1000) {
    sumarCinco.style.display = "inline-block";
  } else {
    sumarCinco.style.display = "none"; 
  }
}


puntuacion.addEventListener('animationend', function() {
  puntuacion.classList.remove("animar");
});


sumarCinco.addEventListener('click', function() {
  contador += 5;
  numero.textContent = contador;
  verificarHitoDe100();
});

sumar.addEventListener('click', function () {
  contador++;
  numero.textContent = contador;
  verificarHitoDe100();

  sumar.classList.remove('flotar');
  void sumar.offsetWidth;
  sumar.classList.add('flotar');
});

sumar.addEventListener('animationend', function () {
  sumar.classList.remove('flotar');
});

restar.addEventListener('click', function () {
  if (contador < 1) {
    numero.textContent = "0";
    contador = 0;
    verificarHitoDe100();
  } else {
    contador--;
    numero.textContent = contador;
    verificarHitoDe100(); 
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === "+") {
    sumar.click();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === "-") {
    restar.click();
  }
});

multiplicar.addEventListener('click', function () {
  contador *= 2;
  numero.textContent = contador;
  verificarHitoDe100(); 
});




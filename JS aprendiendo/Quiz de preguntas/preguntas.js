var quiz = [{
  pregunta: "¿Cuál es la capital de España?",
  opciones: ["Madrid", "Ottawa", "Paris"],
  respuesta: 0
}, {
  pregunta: "¿Cuál es la raíz cuadrada de 64?",
  opciones: ["6", "22", "8"],
  respuesta: 2
}, {
  pregunta: "¿En qué año se descubrió América?",
  opciones: ["1942", "1492", "1756"],
  respuesta: 1
}];

var preguntaActual = 0;
var puntuacion = 0;

var preguntaEl = document.getElementById('pregunta');
var opcionesEl = document.getElementById('opciones');

function mostrarPregunta() {

  opcionesEl.innerHTML = "";

  preguntaEl.textContent = quiz[preguntaActual].pregunta;

  quiz[preguntaActual].opciones.forEach(function(opcion, index) {
    var boton = document.createElement('button');
    boton.textContent = opcion;

    boton.addEventListener('click', function() {
      if (index === quiz[preguntaActual].respuesta) {
        puntuacion++;
        alert('Respuesta correcta');
      } else {
        alert('Respuesta incorrecta');
      }

      preguntaActual++;

      if (preguntaActual < quiz.length) {
        mostrarPregunta();
      } else {
        preguntaEl.textContent = "Has sacado " + puntuacion + " de " + quiz.length;
        opcionesEl.innerHTML = "";
      }
    });

    opcionesEl.appendChild(boton);
  });
}

mostrarPregunta();
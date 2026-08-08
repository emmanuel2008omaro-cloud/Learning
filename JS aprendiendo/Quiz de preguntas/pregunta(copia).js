var quiz = [{
      pregunta: "¿Cuál es la capital de Nigeria?",
      opciones: ["Ottawa", "Madrid", "Mozambique", "Abuja"],
      respuesta: 3
    }, {
      pregunta: "¿En qué año se descubrió el continente americano?",
      opciones: ["1942", "1492", "2012", "1758"],
      respuesta: 1
    }, {
      pregunta: "¿Cuántos huesos tiene el ser humano adulto?",
      opciones: ["256", "200", "206", "301"],
      respuesta: 2
    }, {
      pregunta: "¿Quién es el autor de el Quijote?",
      opciones: ["Miguel de Cervantes", "Homero", "Lope de Vega", "William Shakespeare"],
      respuesta: 0
    }];

    var preguntaActual = 0;
    var puntuacion = 0;

    var preguntaEl = document.getElementById('pregunta');
    var opcionesEl = document.getElementById('opciones');
    var alertaEl = document.getElementById('alerta');
    var mensajeEl = document.getElementById('mensaje');

    function mostrarPregunta() {
      opcionesEl.innerHTML = "";
      preguntaEl.textContent = quiz[preguntaActual].pregunta;
      document.body.className = "";

      quiz[preguntaActual].opciones.forEach(function(opcion, index) {
        var boton = document.createElement('button');
        boton.textContent = opcion;

        boton.addEventListener('click', function() {
          if (index === quiz[preguntaActual].respuesta) {
            puntuacion++;
            mensajeEl.textContent = '¡Respuesta correcta!';
            mensajeEl.style.color = "white";
            alertaEl.style.backgroundColor = "green";
            boton.style.backgroundColor = "#00FF00";
            alertaEl.style.border = "solid white 1px;";
          } else {
            mensajeEl.textContent = '¡Respuesta incorrecta!';
            mensajeEl.style.color = "white";
            alertaEl.style.backgroundColor = "red";
            alertaEl.style.border = "solid white 1px;";
            boton.style.backgroundColor = "red";
          }

          if (quiz[preguntaActual].respuesta===3) {
            document.body.classList.toggle('nigeria');
          }else if (quiz[preguntaActual].respuesta===1) {
            document.body.classList.toggle('america');
          }else if(quiz[preguntaActual].respuesta===2) {
            document.body.classList.toggle('huesos');
          }else if(quiz[preguntaActual].respuesta===0) {
            document.body.classList.toggle('quijote');
          }else if(document.body.classList === "quijote") {
            preguntaEl.style.color = "white";
          }
          

          alertaEl.style.display = "flex";

          preguntaActual++;

          setTimeout(function() {
            alertaEl.style.display = "none";
            if (preguntaActual < quiz.length) {
              mostrarPregunta();
            } else {
              preguntaEl.textContent = "Has sacado " + puntuacion + " de " + quiz.length;
              opcionesEl.innerHTML = "";
              preguntaEl.classList.toggle('centro');
            }
          }, 4000);
        });

        opcionesEl.appendChild(boton);
      });
    }

    mostrarPregunta();
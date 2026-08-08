var lista = document.getElementById('lista');
var añadir = document.getElementById('añadirInput');
var eliminar = document.getElementById('eliminarInput');
var guardar = document.getElementById('valorGuardar');

var tareas = JSON.parse(localStorage.getItem('tareas')) || [];

tareas.forEach(function (tareaGuardada) {
  var elemento = document.createElement('li');
  elemento.textContent = tareaGuardada;
  lista.appendChild(elemento);

  elemento.addEventListener('click', function () {
    elemento.classList.toggle('completada');
  });

  elemento.addEventListener('dblclick', function () {
    var posicion = tareas.indexOf(elemento.textContent);
    lista.removeChild(elemento);
    tareas.splice(posicion, 1);
    localStorage.setItem('tareas', JSON.stringify(tareas));
  });
});

añadir.addEventListener('click', function () {
  if (guardar.value === "") {
    alert('Tarea vacía');
  } else {
    var elemento = document.createElement('li');
    elemento.textContent = guardar.value;
    lista.appendChild(elemento);
    tareas.push(guardar.value);
    localStorage.setItem('tareas', JSON.stringify(tareas));

    elemento.addEventListener('click', function () {
      elemento.classList.toggle('completada');
    });

    elemento.addEventListener('dblclick', function () {
      var posicion = tareas.indexOf(elemento.textContent);
      lista.removeChild(elemento);
      tareas.splice(posicion, 1);
      localStorage.setItem('tareas', JSON.stringify(tareas));
    });

    guardar.value = "";
  }
});

guardar.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    añadir.click();
  }
});

eliminar.addEventListener('click', function () {
  var lastElemento = lista.lastChild;
  lista.removeChild(lastElemento);
  tareas.pop();
  localStorage.setItem('tareas', JSON.stringify(tareas));
});
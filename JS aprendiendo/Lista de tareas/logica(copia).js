var guardar = document.getElementById('valor');
var lista = document.getElementById('lista');
var btnAñadir = document.getElementById('añadir');
var btnEliminar = document.getElementById('eliminar');

btnAñadir.addEventListener('click', function () {
  if (guardar.value.trim() === "") {
    guardar.placeholder = "VACÍO. Introduce una tarea por favor";
    guardar.style.width = "220px";
  } else {
    var elemento = document.createElement('li');
    elemento.textContent = guardar.value;
    lista.appendChild(elemento);
    elemento.addEventListener('click', function () {
      elemento.classList.toggle('completada');
    });
    elemento.addEventListener('dblclick', function () {
      elemento.remove();
    });
    guardar.value = "";
    guardar.placeholder = ""; 
  }
  });

guardar.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    btnAñadir.click();
  }
});

btnEliminar.addEventListener('click', function () {
      var lastElemento = lista.lastChild;
      lista.removeChild(lastElemento);
});


const cambio = document.getElementById('btn-cambio');

cambio.addEventListener('click', function() {
    document.body.classList.toogle('tema-oscuro');
    
    if (document.body.classList.contains('tema-oscuro')) {
        cambio.textContent = '☀️ Modo claro';
    } else {
        cambio.textContent = '🌙 Modo oscuro';
    }
});

function MeGusta() {
  const like = document.getElementById("btnLike");
  const texto = document.getElementById("textoAccion"); 

  if (like.classList.contains("bi-hand-thumbs-up")) {
    like.classList.replace("bi-hand-thumbs-up", "bi-hand-thumbs-up-fill");
    like.classList.add("activo");
    texto.innerText = "¡  MUCHAS GRACIAS!"; 
  } else {
    like.classList.replace("bi-hand-thumbs-up-fill", "bi-hand-thumbs-up");
    like.classList.remove("activo");
    texto.innerText = "¿UN LIKE?";
  }
}


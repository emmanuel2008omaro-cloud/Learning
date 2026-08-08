const cambio = document.getElementById('btn-cambio');
const header = document.querySelector('header');
let lastScrollY = window.scrollY;
const MOBILE_BREAKPOINT = 768;

cambio.addEventListener('click', function () {
    document.body.classList.toggle('tema-oscuro');

    if (document.body.classList.contains('tema-oscuro')) {
        cambio.textContent = '☀️ Modo claro';
    } else {
        cambio.textContent = '🌙 Modo oscuro';
    }
});

window.addEventListener('scroll', () => {
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
        header.classList.remove('header-hidden');
        lastScrollY = window.scrollY;
        return;
    }

    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollY = currentScrollY;
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
        header.classList.remove('header-hidden');
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


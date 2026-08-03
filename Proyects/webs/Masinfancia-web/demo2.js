const cambio = document.getElementById('btn-cambio');

cambio.addEventListener('click', function() {
    document.body.classList.toogle('tema-oscuro');
    
    if (document.body.classList.contains('tema-oscuro')) {
        cambio.textContent = '☀️ Modo claro';
    } else {
        cambio.textContent = '🌙 Modo oscuro';
    }
});
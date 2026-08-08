var input = document.getElementById('input');

var confirmar = document.getElementById('btn-confirm');

var usuario = document.getElementById('usuario');

confirmar.addEventListener('click',()=>{
    usuario.textContent=input.value;
});

var boton = document.getElementById('dark-mode');

var modoOscuro= false;
// boton.innerHTML="Modo oscuro";

boton.addEventListener('click',()=>{
    if(modoOscuro===false){
        document.documentElement.setAttribute('data-theme','dark');
        modoOscuro=true;
        // boton.innerHTML="Modo claro";
    }
    else{
        document.documentElement.removeAttribute('data-theme');
        modoOscuro=false;
        // boton.innerHTML="Modo oscuro";
    }
});
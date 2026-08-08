var elementos = [
  
  "Algoritmo", "Almacenamiento", "Antivirus", "API", "Aplicación", "Archivo", "Array", "Arquitectura", "Asíncrono", "Atributo",
  
  "Back-end", "Backup", "Banda-ancha", "Base-de-datos", "Binario", "Bios", "Bit", "Bitácora", "Blockchain", "Buffer",
  
  "Caché", "Ciberseguridad", "Cifrado", "Clase", "Cliente", "Cloud", "Código", "Compilador", "Componente", "Contraseña",
  
  "Dashboard", "Depuración", "Desarrollo", "Directorio", "Disco-duro", "Dispositivo", "DNS", "Dominio", "Driver", "Dump",
  
  "Ecosistema", "Editor", "Ejecutable", "Enrutador", "Enlace", "Entorno", "Etiqueta", "Excepción", "Expresión-regular", "Extensión",
  
  "Fibra-óptica", "Fichero", "Filtrado", "Firewall", "Firmware", "Flujo", "Formatear", "Framework", "Front-end", "Función",
  
  "Gateway", "Gigabyte", "Git", "Github", "Glitch", "Glosario", "Goolag", "Grafico", "Grid", "Guardado",
  
  "Hacker", "Hardware", "Hash", "Hosting", "Hover", "HTML", "HTTP", "Hipervínculo", "Hoja-de-cálculo", "Host",
  
  "Icono", "Identación", "IDE", "Indexación", "Informática", "Infraestructura", "Inyección-SQL", "IP", "Iteración", "Iterador",
  
  "Javascript", "Java", "JSON", "Joystick", "Kernel", "Keylogger", "Kilobyte", "Kubernetes", "Kiosco-digital", "Kernell-panic",
  
  "Kárate-code", "Kafka", "Keyframe", "Kilo-bit", "Kiosco", "Kombat-code", "Korn-shell", "Kotlin", "Kevlar-cable", "Kilo-transfer",
  
  "Lambda", "Lan", "Latencia", "Lector", "Librería", "Licencia", "Línea-de-comandos", "Link", "Linux", "Log",
  
  "Macro", "Mainframe", "Malware", "Matriz", "Megabyte", "Memoria-RAM", "Metadato", "Microcontrolador", "Microprocesador", "Módem",
  
  "Navegador", "Netware", "Nodo", "NoSQL", "Nube", "Núcleo", "Nulabilidad", "Nulo", "Numérico", "Nvidia",
  
  "Ñapa-de-código", "Ñu-linux", "Ñandú-bot", "Ñame-server", "Ñ-compatibilidad", "Ñ-codificación", "Ñ-teclado", "Ñoño-geek", "Ñ-soporte", "Ñ-carácter",
  
  "Objeto", "Octeto", "Offline", "Ofimática", "Online", "Open-source", "Optimización", "Ordenador", "Output", "Overclock",
  
  "Paquete", "Parámetro", "Parche", "Pasarela", "Peer-to-peer", "Periférico", "Phishing", "Píxel", "Placa-base", "Programación",
  
  "Query", "Queue", "Quicksort", "Query-string", "Quick-fix", "Qubit", "Qwerty", "Quality-assurance", "Quarkus", "Quantum-computing",
  
  "Ransomware", "Reactor", "Red", "Redundancia", "Refactorizar", "Repositorio", "Resolución", "Responsive", "Router", "Ruta",
  
  "Script", "Scrum", "Servidor", "Sintaxis", "Sistemas", "Smartphone", "Software", "Spam", "Spyware", "Switch",
  
  "Tabla", "Tarjeta-gráfica", "Tasa-de-refresco", "Teclado", "Terminal", "Tester", "Token", "Tráfico", "Transacción", "Troyano",
  
  "Ubuntu", "UI", "Unicorn-startup", "Unix", "Update", "Upload", "URL", "USB", "Usuario", "UX",
  
  "Variable", "Vector", "Ventana", "Versión", "Vídeo", "Virtual", "Virus", "VPN", "Vulnerabilidad", "Vuejs",
  
  "Web", "Webcam", "Webmaster", "Widget", "Wifi", "Windows", "Wireframe", "Wireless", "Wordpress", "Workstation",
  
  "XAMPP", "Xenón-procesador", "Xerografía-digital", "XHTML", "Xilema-red", "Xis-código", "XML", "XMPP", "XSS", "Xul-runner",
  
  "Yotta-byte", "Youtube", "Yacc", "Yagui-antena", "Yarn", "Yield-comando", "Yottabit", "Yugo-magnético", "Yoke-mando", "Yp-protocolo",
  
  "Z-index", "Zafiro-procesamiento", "Zapping-digital", "Zettabyte", "Zip", "Zócalo", "Zona-de-pruebas", "Zte", "Zumbido-interferencia", "Zuse-computador"
];


var input = document.getElementById('input');
var lista = document.getElementById('lista');

function mostrar(elementoMostrar){
  lista.innerHTML = "";

  elementoMostrar.forEach(function(elemento){
    var li = document.createElement('li');
    li.textContent = elemento;
    lista.appendChild(li);
  });
}

input.addEventListener('input',function(){
  var texto = input.value.toLowerCase();

  var filtrados = elementos.filter((elemento)=>
    elemento.toLowerCase().startsWith(texto));

  mostrar(filtrados);

  if(texto===""){
    lista.textContent="";
  }
});

document.body.style.backgroundColor="darkblue";




function actualizarReloj() {
  var ahora = new Date();
  var horasNum = ahora.getHours();
  var minutosNum = ahora.getMinutes();
  var segundosNum = ahora.getSeconds();
  var secDeg = segundosNum * 6;
  var secHand = document.getElementById('sec');
  if (secHand) secHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
  var minDeg = (minutosNum * 6) + (segundosNum * 0.1);
  var minHand = document.getElementById('min');
  if (minHand) minHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;


  var hourDeg = ((horasNum % 12) * 30) + (minutosNum * 0.5);
  var hourHand = document.getElementById('hour');
  if (hourHand) hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

  var horasDigital = horasNum;
  var minutosDigital = minutosNum;
  var segundosDigital = segundosNum;

  if (minutosDigital < 10) minutosDigital = "0" + minutosDigital;
  if (segundosDigital < 10) segundosDigital = "0" + segundosDigital;
  if (horasDigital < 10) horasDigital = "0" + horasDigital;
  
  var pantalla = document.getElementById('pantalla');
  if (pantalla) {
    pantalla.innerHTML = horasDigital + ":" + minutosDigital + ":" + segundosDigital;
  }
}


setInterval(actualizarReloj, 1000);
actualizarReloj();







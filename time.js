document.getElementById("shoot-button").addEventListener("click", cargarTiempo);
let time = 0;
cargarTiempo ();

//definir y ejecutar los segundos
function cargarTiempo() {
    let textTime;
    if (time < 0) {
        time = 59;
    }
//mostrar segundos en pantalla
if (time < 10) {
textTime = '0${time}';
} else {
    textTime =time;
}
document.getElementById("time").innerHTML = textTime;
time --;
}
//ejecutar cada segundo
setInterval(cargarTiempo, 1000);
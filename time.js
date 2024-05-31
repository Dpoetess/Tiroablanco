//SCRIPT PARA TEMPORIZADOR DEL JUEGO

let shoot = document.getElementById("shoot-button")
shoot.addEventListener("click", cargarTiempo);
let time = 0;

//definir y ejecutar los segundos
function cargarTiempo() {
    let textTime;
    if (time < 0) {
        time = 59;
    }
//mostrar segundos en pantalla
if (time < 10) {
textTime = 60;
} else {
    textTime =time;
}
document.getElementById("time").innerHTML = "Tiempo: "+textTime;
time --;
}
//ejecutar cada segundo
setInterval(cargarTiempo, 1000);
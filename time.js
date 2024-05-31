//SCRIPT PARA TEMPORIZADOR DEL JUEGO
const shootButton = document.getElementById("shoot-button")
shootButton.addEventListener("click", cargarTiempo);
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
setInterval(cargarTiempo, 1000);
document.getElementById("time").innerHTML = "Tiempo: "+textTime;
time --;

}

export {shootButton};
//ejecutar cada segundo

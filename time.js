//SCRIPT PARA TEMPORIZADOR DEL JUEGO
const shootButton = document.getElementById("shoot-button");
shootButton.addEventListener("click", timer);
let time = 0;
let textTime = 60;


//definir y ejecutar los segundos
function timer() {
    if (time < 0) {
        time = 59;
    }
//mostrar segundos en pantalla
if (time < 10) {
textTime = 60;
} else {
    textTime = time;
}
//ejecutar cada segundo
setInterval(timer, 1000);   
document.getElementById("time").innerHTML = "Tiempo:",+textTime;
};

export {timer};
//SCRIPT PARA TEMPORIZADOR DEL JUEGO

import { openPopup } from "/scripts/popup-script.js";

document.getElementById("shoot-button").addEventListener("click", startTimer, {once: true}, console.log("check"));
var time = 10;
var interval;

function startTimer() {
    interval = setInterval(againTimer, 1000);
}

function againTimer() {
    let timeText;
    time = time <= 0 ? 10 : time;
    time--;
    timeText = time
    document.getElementById("time").innerHTML = `${timeText}"`;
    if (time == 0) {
        clearInterval(interval); // stopTimer
        openPopup(); //open PopUp
        
    } 
}

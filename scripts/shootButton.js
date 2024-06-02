//EXPORTAR de los ficheros correspondientes e IMPORTAR las funciones de sonido, hitDuck, temporizador

import { hitDuck } from "/scripts/hitDuck.js";
import { playAudio } from "/scripts/audio-game.js"
//import { startTimer, againTimer } from "/scripts/time.js";

export const shootButton = document.getElementById("shoot-button");
shootButton.addEventListener("click", shootFunction);



function shootFunction () {
    
    hitDuck();
    playAudio();

}

    





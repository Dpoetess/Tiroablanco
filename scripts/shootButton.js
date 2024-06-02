//EXPORTAR de los ficheros correspondientes e IMPORTAR las funciones de sonido, hitDuck, temporizador

import { hitDuck } from "/scripts/hitDuck.js";
import { playAudio } from "/scripts/audio-game.js"
import { startTimer } from "/scripts/time.js";

const shootButton = document.getElementById("shoot-button");
shootButton.addEventListener("click", shootFunction);

function shootFunction () {
    hitDuck();
    playAudio();

    startTimer();
}
   /*  //Start timer only one time
    shootButton.addEventListener("click", startTimer, {once:true});
    
    againTimer();

    


}  
*/

    //comentar las lineas de HTML con todas las funciones excepto ese fichero




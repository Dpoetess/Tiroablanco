

import { hitDuck } from "/scripts/hitDuck.js";
import { playAudio } from "/scripts/audio-game.js"

export const shootButton = document.getElementById("shoot-button");
shootButton.addEventListener("click", shootFunction);



function shootFunction () {
    
    hitDuck();
    playAudio();

}

    





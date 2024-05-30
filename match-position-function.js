console.log("hola");

const shootButton = document.getElementById("shoot-button")

shootButton.addEventListener("click", hitDuck)

function findCenter (element) {
    const rect = element.getBoundingClientRect(); 
    const centerX = Math.round(rect.left + rect.width / 2); 
    return centerX;  
}

//AÑADIR mas patos

function hitDuck () {
    console.log("check")
    const duck = document.getElementById("duck");
    const target = document.getElementById("target");

    const duckCenter = findCenter(duck); 
    const targetCenter = findCenter(target);
    
    const pointA = targetCenter - 20;
    const pointB = targetCenter + 20;

    console.log(duckCenter, targetCenter, pointA, pointB)

    if (duckCenter > pointA && duckCenter < pointB) {
        console.log("shooted")

//Aqui van funciones  relacionadas con ACERTAR
        
        }
} 


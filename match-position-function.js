console.log("hola");

const shootButton = document.getElementById("shoot-button");
shootButton.addEventListener("click", hitDuck);
let duckDiv = document.getElementById('ducks').getElementsByTagName('div');
const target = document.getElementById("target");

//Count the score  
let score = 0;
function addScore () {
    const scoreArea = document.getElementById("score");
    score = score + 5;
    scoreArea.innerHTML = `PUNTOS: <br> ${score}`;
    console.log(score);
}

function findCenter (element) {
    const rect = element.getBoundingClientRect(); 
    const centerX = Math.round(rect.left + rect.width / 2); 
    return centerX;  
}

//SHOOT the duck

function hitDuck () {
    
    for (let i = 0; i< duckDiv.length; i++) {
        
        const duck = duckDiv[i];
        const duckImg = duck.getElementsByTagName('img')[0];
        const duckCenter = findCenter(duck); 
        const targetCenter = findCenter(target);
        const pointA = targetCenter - 20;
        const pointB = targetCenter + 20;

        if (duckCenter > pointA && duckCenter < pointB ) {
            
            //Sum the score
            if (duckImg.src != "https://i.ibb.co/RNtpttV/red-duck.png") {
                addScore();
            }
            
            //Change the color of the shooted duck
            duckImg.src = "https://i.ibb.co/RNtpttV/red-duck.png";
            }   
        
    }
} 

//Resurrect shooted ducks
function resurrectDuck () {

    for (let i = 0; i< duckDiv.length; i++) {
        
        const duck = duckDiv[i];
        const duckImg = duck.getElementsByTagName('img')[0];
        const duckCenter = findCenter(duck); 
        const targetCenter = findCenter(target);
        const pointC = targetCenter + 30;

        if (duckCenter > pointC) {
            duckImg.src = "https://i.ibb.co/vq8JVgV/yellow-duck.png";    
        } 
}
}

function repeatResurrection () {
    timer = setInterval(resurrectDuck, 350);
}

//Uncomment when stopResurrection is connected with Game Time
//repeatResurrection();


//ADD THIS FUNCTION TO THE END GAME FUNCTION
/*
function stopResurrection() {
    clearInterval(timer);
        }   */

//CHECK AND LINK THIS FUNCTIONS
/* //Add function playCuac 
shootButton.addEventListener("click", playCuac);        
function playCuac () {
    const cuac = document.getElementById("sounDuck"); // audio de cuac en html con id pato
    cuac.play();

    playCuac(sound);     
        }
 */


//RESTART from Isa
/*function restartGame() {
score = 0;
time = 0;
restart();
} */
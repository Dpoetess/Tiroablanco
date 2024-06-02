
let duckDiv = document.getElementById('ducks').getElementsByTagName('div');
const target = document.getElementById("target");

//Count the score  
let score = 0;
function addScore () {
    const scoreArea = document.getElementById("score");
    score = score + 5;
    scoreArea.innerHTML = score;
    localStorage.setItem("score", score);
}

//Quack sound
function playCuac () {
    const cuac = document.getElementById("sounDuck"); 
    cuac.currentTime = 0;
    cuac.play(); 
        }

//Gunshot sound
function playGunshot () {

    const gunshot = document.getElementById("soundShoot"); 
    gunshot.currentTime = 0;
        gunshot.play(); 
            }

//Find center of elements to match positions        
function findCenter (element) {
    const rect = element.getBoundingClientRect(); 
    const centerX = Math.round(rect.left + rect.width / 2); 
    return centerX;  
}

//SHOOT the duck
export function hitDuck () {

    playGunshot();
    
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

                //Make duck quack 
                playCuac();
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
    let timer;
    timer = setInterval(resurrectDuck, 350);
    
}

repeatResurrection();


//ADD THIS FUNCTION TO THE END GAME FUNCTION
/*
export function stopResurrection() {
    clearInterval(timer);
        }   */



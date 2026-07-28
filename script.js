const startBtn = document.getElementById("startBtn");

const menu = document.getElementById("menu");
const game = document.getElementById("game");
const endScreen = document.getElementById("endScreen");

const gameArea = document.getElementById("gameArea");

const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");


let score = 0;
let time = 30;

let gameInterval;
let timerInterval;


// Start Game

startBtn.addEventListener("click", () => {

    menu.classList.add("hidden");
    game.classList.remove("hidden");

    startGame();

});



// Game function

function startGame(){

    score = 0;
    time = 30;

    scoreText.textContent = score;
    timeText.textContent = time;


    gameInterval = setInterval(createHeart, 700);


    timerInterval = setInterval(()=>{

        time--;

        timeText.textContent = time;


        if(time <= 0){

            endGame();

        }


    },1000);

}



// Create falling heart

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";


    heart.style.left =
    Math.random() * 90 + "%";


    heart.style.animationDuration =
    (Math.random() * 2 + 2) + "s";



    heart.addEventListener("click",()=>{

    score++;

    scoreText.textContent = score;

    createExplosion(
        heart.offsetLeft,
        heart.offsetTop
    );

    heart.remove();

});


    gameArea.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },4000);


}




// End Game

function endGame(){

    clearInterval(gameInterval);
    clearInterval(timerInterval);


    game.classList.add("hidden");

    endScreen.classList.remove("hidden");



    const message =
    document.getElementById("finalMessage");


    if(score >= 20){

        message.innerHTML =
        "Wow ❤️ You caught so many hearts! You truly have my heart forever 💜";

    }

    else{

        message.innerHTML =
        "Every heart counts ❤️ Thanks for playing. You are special 💕";

    }

}
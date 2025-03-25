const startBtn =document.getElementById("startGames");
let computerChoice="ROCK";
const roke = "ROCK";
const SCISSORS="SCESSORS";
const PAPER="PAPER";
let winner = "";
let determineWinner = function(cChoice,pChoice){
    if(
    (pChoice === ROCK && cChoice === SCISSORS)||
    (pChoice === PAPER &&  cChoice===ROCK)||
    (pChoice=== SCISSORS && cChoice===PAPER)
     ) {
        winner = "PLAYER WINS";
    }
    else if(cChoice === pChoice){
        winner = "Draw"
    }
    else{
        winner = "Cumputer wins"
    }
    return winner;
}
function start(){
    // console.log("Gem is started....");
   let playerChoice= prompt(`${ROCK},${PAPER} OR ${SCISSORS}`);
   let  randomNumber=Math.random();
   if(randomNumber<0.33){
computerChoice= ROCK;
   }
   else if(randomNumber<0.66){
    computerChoice=PAPER;
   }
   else{
    computerChoice=SCISSORS;
   }
}

startBtn.addEventListener("click",start);
